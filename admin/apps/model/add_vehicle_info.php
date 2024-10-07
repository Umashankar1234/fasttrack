<?php
include("../control/config.php");

// Collecting form data
$title = $_POST['title'];
$brand_id = $_POST['brand_id'];
$model_id = $_POST['model_id'];
$facilities = $_POST['facilities'];
$localtrips1 = $_POST['localtrips1'];
$cost1 = $_POST['cost1'];
$localtrips2 = $_POST['localtrips2'];
$cost2 = $_POST['cost2'];
$localtrips3 = $_POST['localtrips3'];
$cost3 = $_POST['cost3'];
$localtrips4 = $_POST['localtrips4'];
$cost4 = $_POST['cost4'];
$outstation = $_POST['outstation'];
$outstation_cost = $_POST['outstation_cost'];
$description = $_POST['description'];
$notes = $_POST['notes'];
$date = date("d/m/Y");

// Insert query
$sql = "INSERT INTO tb_vehicle (title, brand_id, model_id, facilities, localtrips1, cost1, localtrips2, cost2, localtrips3, cost3, localtrips4, cost4, outstation, outstation_cost, description, notes, date, status) 
        VALUES ('$title', '$brand_id', '$model_id', '$facilities', '$localtrips1', '$cost1', '$localtrips2', '$cost2', '$localtrips3', '$cost3', '$localtrips4', '$cost4', '$outstation', '$outstation_cost', '$description', '$notes', '$date', 'active')";

// Execute query and handle result
if (mysqli_query($con, $sql)) {
    echo "<script> alert('Vehicle added successfully');
    window.location.href='../../add_vehicle';</script>";
} else {
    echo "ERROR: Could not execute $sql. " . mysqli_error($con);
}

// Close the connection
mysqli_close($con);
?>
