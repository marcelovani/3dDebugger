<?php

echo "testing qcachegrind";

print_r(init());


function init() {
	return get_object(get_name(), get_size());
}

function get_array($name, $size) {
	return array('first level' => array(
		'first child' => array(
			'name' => 'first',
		),
		'second child' => array(
			'name' => 'second',
		),
	),
  );
}

function get_object($name, $size) {
	$obj = new stdClass();
	$obj->content = get_array($name, $size);
	return $obj;
}

function get_name() {
	return 'name';
}

function get_size() {
	return '18';
}
