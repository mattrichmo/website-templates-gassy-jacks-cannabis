#!/bin/bash

# Gassy Jack's Migration Script
# This script will migrate all remaining component files from the PLAN directory to the Next.js project

set -e

SOURCE_DIR="/Users/cybertron/Code/website-templates/PLAN/gassy-jack's---the-premium-cannabis-lounge"
TARGET_DIR="/Users/cybertron/Code/website-templates/gassy-jacks-cannabis"

echo "🚀 Starting Gassy Jack's Migration"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Create component directories
echo "📁 Creating component directories..."
mkdir -p "$TARGET_DIR/components/Legend"
mkdir -p "$TARGET_DIR/components/Visit"  
mkdir -p "$TARGET_DIR/components/Study"
mkdir -p "$TARGET_DIR/components/Article"
mkdir -p "$TARGET_DIR/components/NotFound"

# Create page directories
echo "📁 Creating page directories..."
mkdir -p "$TARGET_DIR/app/legend"
mkdir -p "$TARGET_DIR/app/visit"
mkdir -p "$TARGET_DIR/app/study"
mkdir -p "$TARGET_DIR/app/privacy"

echo "✅ Migration structure ready"
echo ""
echo "Next steps:"
echo "1. Component files are being created programmatically"
echo "2. Page files will be created"
echo "3. Asset harvester will be run"
echo "4. Build will be tested"
