import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

/**
 * Gassy Jack's Asset Downloader
 * Scans the project for remote URLs, downloads them to public/assets, 
 * and generates a manifest for local asset replacement.
 */

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.join(__dirname, '..');
const PUBLIC_ASSETS_DIR = path.join(ROOT_DIR, 'public', 'assets');

// Ensure directories exist
if (!fs.existsSync(PUBLIC_ASSETS_DIR)) {
    fs.mkdirSync(PUBLIC_ASSETS_DIR, { recursive: true });
}

const EXTENSIONS = ['.tsx', '.ts', '.html', '.css', '.js'];
const URL_REGEX = /https:\/\/(lh3\.googleusercontent\.com|images\.unsplash\.com|www\.transparenttextures\.com)[^\s'"]+/g;

async function downloadFile(url, targetPath) {
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
                return;
            }
            const fileStream = fs.createWriteStream(targetPath);
            response.pipe(fileStream);
            fileStream.on('finish', () => {
                fileStream.close();
                resolve();
            });
        }).on('error', reject);
    });
}

function getFilePaths(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            if (file !== 'node_modules' && file !== '.git' && file !== 'public') {
                getFilePaths(filePath, fileList);
            }
        } else if (EXTENSIONS.includes(path.extname(file))) {
            fileList.push(filePath);
        }
    });
    return fileList;
}

async function run() {
    console.log('--- Gassy Jack\'s Asset Harvester ---');
    const files = getFilePaths(ROOT_DIR);
    const foundUrls = new Set();

    files.forEach(file => {
        const content = fs.readFileSync(file, 'utf-8');
        const matches = content.match(URL_REGEX);
        if (matches) {
            matches.forEach(url => foundUrls.add(url));
        }
    });

    console.log(`Found ${foundUrls.size} unique remote assets.`);

    const manifest = {};

    for (const url of foundUrls) {
        const fileName = `asset_${Buffer.from(url).toString('hex').slice(0, 8)}${path.extname(new URL(url).pathname) || '.png'}`;
        const targetPath = path.join(PUBLIC_ASSETS_DIR, fileName);
        const relativePath = `/assets/${fileName}`;

        try {
            console.log(`Downloading: ${url.slice(0, 50)}...`);
            await downloadFile(url, targetPath);
            manifest[url] = relativePath;
        } catch (err) {
            console.error(`Error downloading ${url}:`, err.message);
        }
    }

    const manifestPath = path.join(ROOT_DIR, 'public', 'assets-manifest.json');
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

    console.log('\n--- Harvesting Complete ---');
    console.log(`Manifest created at: ${manifestPath}`);
    console.log('You can now use this manifest to swap remote URLs for local paths.');
}

run().catch(console.error);
