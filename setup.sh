#!/bin/bash

# Set up novel reader structure
mkdir -p novel-reader/novels
cd novel-reader || exit

# Create files
touch index.html style.css script.js novels/novel1.txt novels/novel2.txt

echo "✅ Project structure created:"
echo "novel-reader/"
echo "  ├── index.html"
echo "  ├── style.css"
echo "  ├── script.js"
echo "  └── novels/"
echo "        ├── novel1.txt"
echo "        └── novel2.txt"
