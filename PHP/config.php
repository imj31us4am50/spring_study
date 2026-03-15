<?php
	header('Content-Type: text/html; charset=utf8');
	$link = mysqli_connect("localhost", "avram", "naTUre@2SmArT", "spring");

	if($link == false){
		die("ERROR: Could not connect. " . mysqli_connect_error());
	}

	$link->query('SET character_set_client="utf8",character_set_connection="utf8",character_set_results="utf8";');
?>