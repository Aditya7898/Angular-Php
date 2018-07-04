<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";
$sql = "INSERT INTO users (fullName, email, contact, city, bloodGroup)
VALUES ('$data->fullName', '$data->email', '$data->contact', '$data->city', '$data->bloodGroup')";
if($data->fullName){
	$qry = $conn->query($sql);
}
$conn->close();
?>
