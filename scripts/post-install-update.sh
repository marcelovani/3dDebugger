#!/bin/sh
pwd=`pwd`

# Build js stuff.
./vendor/nodejs/nodejs/bin/npm install

mv node_modules ./vendor/marcelovani/xhprof/xhprof_html

exit
# Remove existing symlinks
rm -rf ./3d_debugger/third-party/d3; mkdir ./3d_debugger/third-party/d3
rm -rf ./3d_debugger/third-party/graphlib-dot; mkdir ./3d_debugger/third-party/graphlib-dot
if [ -L 3d_debugger ]; then rm 3d_debugger; fi

# Create symlinks
echo "[Info] Creating symlinks"
ln -s ./vendor/marcelovani/xhprof/xhprof_html 3d_debugger
#cp ./vendor/mbostock/d3/d3.min.js ./3d_debugger/third-party/d3
#cp ./node_modules/graphlib-dot/dist/graphlib-dot.min.js ./3d_debugger/third-party/graphlib-dot

