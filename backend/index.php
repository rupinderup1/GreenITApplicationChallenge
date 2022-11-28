<?php
header('content-type: application/json');
header('Access-Control-Allow-Origin: *');

$response = array("success" => false, "message" => "Route not found");

// Listing Users
if($_GET['section'] === 'users' && $_GET['action'] == '' && $_SERVER['REQUEST_METHOD'] == 'GET') {
	$row = 0;
	$i = 0;
	$header = $resData = [];
	if (($handle = fopen("data.csv", "r")) !== FALSE) {
		while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
			$num = count($data);
			if($row == 0) {
				$header = $data;
			} else {
				$resData[$i] = [];
				for ($c=0; $c < $num; $c++) {
					$resData[$i] = array_merge($resData[$i], array($header[$c] => $data[$c]));
				}
				$i++;
			}
			$row++;
		}
		fclose($handle);
	}
	$response = array("success" => true, "message" => "Listing", "data" => $resData, "header" => $header);
}

// Add Users
else if($_GET['section'] === 'users' && $_GET['action'] == 'add' && $_SERVER['REQUEST_METHOD'] == 'POST') {

	$response = array("success" => true, "message" => "Add");
}

// Edit Users
else if($_GET['section'] === 'users' && $_GET['action'] == 'edit' && $_SERVER['REQUEST_METHOD'] == 'PUT') {

	$response = array("success" => true, "message" => "Edit");
}

// Delete Users
else if($_GET['section'] === 'users' && $_GET['action'] == 'delete' && $_SERVER['REQUEST_METHOD'] == 'DELTE') {

	$response = array("success" => true, "message" => "Delete");
}

die(json_encode($response));
