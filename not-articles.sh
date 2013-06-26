#!/bin/sh
for file in content/\!/*/index.md; do grep article "$file" > /dev/null || echo "$file"; done
