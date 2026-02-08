'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import { useSmokeTransition } from './SmokeTransitionContext';

const SmokeParticles = ({ isCovered, count = 120 }: { isCovered: boolean; count?: number }) => {
    const texture = useLoader(THREE.TextureLoader, '/assets/smoke-texture.png');
    const group = useRef<THREE.Group>(null);

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 20; // Increased spread
            const y = (Math.random() - 0.5) * 20;
            const z = (Math.random() - 0.5) * 5;
            const rotation = Math.random() * Math.PI * 2;
            const scale = 12 + Math.random() * 15; // Increased scale

            // White and hemp shades for joint exhale look
            const colors = ['#ffffff', '#fdfcf0', '#f5f4e8', '#e8e6d9'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            temp.push({ position: [x, y, z], rotation, scale, color, speed: 0.05 + Math.random() * 0.1 });
        }
        return temp;
    }, [count]);

    useFrame((state, delta) => {
        if (group.current) {
            group.current.children.forEach((mesh, i) => {
                mesh.rotation.z += delta * particles[i].speed;
                // Subtle organic drift
                mesh.position.y += delta * 0.1 * (particles[i].speed * 10);
                mesh.position.x += Math.sin(state.clock.elapsedTime + i) * 0.005;

                if (mesh.position.y > 10) mesh.position.y = -10;
            });

            // Volumetrically cover the screen by bringing particles EXTREMELY close to camera
            const targetZ = isCovered ? 5 : -20;
            group.current.position.z = THREE.MathUtils.lerp(group.current.position.z, targetZ, isCovered ? 0.15 : 0.05);
            group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
        }
    });

    return (
        <group ref={group}>
            {particles.map((p, i) => (
                <mesh key={i} position={p.position as any} rotation={[0, 0, p.rotation]}>
                    <planeGeometry args={[p.scale, p.scale]} />
                    <meshLambertMaterial
                        map={texture}
                        transparent
                        opacity={0.9} // Dense white smoke
                        color={p.color}
                        depthWrite={false}
                        blending={THREE.NormalBlending}
                    />
                </mesh>
            ))}
        </group>
    );
};

const SmokeTransition = ({ children }: { children?: any }) => {
    const { isCovered, isTransitioning } = useSmokeTransition();

    return (
        <>
            <div className="relative w-full h-full min-h-screen">
                {children}
            </div>

            {/* Smoke Overlay Layer */}
            <AnimatePresence>
                {isTransitioning && (
                    <motion.div
                        className="fixed inset-0 z-[100] pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        {/* Full white-out flash at peak coverage for 100% fill */}
                        <motion.div
                            className="absolute inset-0 bg-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isCovered ? 1 : 0 }}
                            transition={{ duration: 0.5 }}
                        />

                        <Canvas
                            camera={{ position: [0, 0, 5], fov: 60 }}
                            className="w-full h-full"
                            gl={{ antialias: true, alpha: true }}
                        >
                            <ambientLight intensity={3} />
                            <pointLight position={[5, 5, 5]} intensity={3} color="#ffffff" />
                            <SmokeParticles isCovered={isCovered} count={isCovered ? 200 : 80} />
                        </Canvas>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default SmokeTransition;
