#!/bin/sh
for file in content/\!/*/index.md; do grep article "$file" || vim "$file"; done
