<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";
$sql = "INSERT INTO requests (Pname, Pcity, Pbloodgroup, Paddress, Pdoctor, Cname, Cemail, Ccontact, Cdate)
VALUES ('$data->Pname', '$data->Pcity', '$data->Pbloodgroup', '$data->Paddress', '$data->Pdoctor', '$data->Cname', '$data->Cemail', '$data->Ccontact', '$data->Cdate')";
if($data->Pname){
	$qry = $conn->query($sql);
}
$conn->close();
?>
