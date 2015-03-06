<?php

$config['directory'] = ini_get('xdebug.profiler_output_dir');

/**
 * Do not modify below this line :) 
 * ...unless you really, really, reaaaally want to
 */
// get our own trace files
$ownTraces = file_get_contents('trace-own.cache');
$ownTraces = explode("\r\n",$ownTraces);

// place our current trace in the cache file
$trace = xdebug_get_tracefile_name( );
$ownTraces[] = $trace;
file_put_contents('trace-own.cache',$trace . "\r\n",FILE_APPEND);