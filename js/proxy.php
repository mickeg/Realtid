<?php
	$url = 'http://api.sl.se/api2/realtimedepartures.json?key=27484b49298b4b068b6b7047f0f47a9d&siteid=3470&timewindow=30';
	$response  = file_get_contents($url);

	echo $response;
?>
