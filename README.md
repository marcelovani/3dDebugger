# 3D Debugger

Requirements
============
- PHP Xhprof
  - On Mac Os
    - Using Brew i.e. `brew install homebrew/php/php55-xhprof`
    - Using Port `port install php55-xhprof` then `port contents php55-xhprof` to show you where xhprof.so is located.
  - Remember to enable it in php.ini:
  ```
  [xhprof]
  extension=[path]/xhprof.so
  xhprof.output_dir="/tmp/xhprof"
  ```
  
- Dot (http://www.graphviz.org/)
  - On Mac OS: `brew install graphviz`

Installation
============
- Run `composer create-project marcelovani/3d_debugger -s dev`
- Follow the intallation steps from **vendor/marcelovani/xhprof/INSTALL**. Create config.php, set your DB credentials.
- Create a virtualhost and point to docroot **vendor/marcelovani/xhprof/xhprof_html**.
- Add xhprof to your code. See _vendor/marcelovani/xhprof/examples/sample.php_.

