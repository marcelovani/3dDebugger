# 3D Debugger

Requirements
============
- Xhprof

Installation
============

- $ composer create-project marcelovani/3d_debugger -s dev
- Follow the intallation steps from vendor/marcelovani/xhprof/INSTALL.
  Create config.php, set your DB credentials.
  Enable dot (http://www.graphviz.org/). On Mac OS: brew install graphviz
  On Mac Os: Brew install homebrew/php/php56-xhprof. Remember to enable it in php.ini.
- Create a virtualhost and point to docroot vendor/marcelovani/xhprof/xhprof_html.
- Add xhprof to your code. See vendor/marcelovani/xhprof/examples/sample.php.

