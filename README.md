# 3D Debugger

Requirements
============
- PHP Xhprof
  - On Mac Os: `brew install homebrew/php/php56-xhprof`.
  - Remember to enable it in php.ini.
- Dot (http://www.graphviz.org/)
  - On Mac OS: `brew install graphviz`

Installation
============
- Run `composer create-project marcelovani/3d_debugger -s dev`
- Follow the intallation steps from **vendor/marcelovani/xhprof/INSTALL**. Create config.php, set your DB credentials.
- Create a virtualhost and point to docroot **vendor/marcelovani/xhprof/xhprof_html**.
- Add xhprof to your code. See _vendor/marcelovani/xhprof/examples/sample.php_.

