#!/bin/bash
grep created_at content/\!/*/index.md|cut -d: -f1,3|sed 's/\([^:]*\):\([^:]*\)/\2:\1/'|sed 's/^ //'|sort
