<?php
include("../control/config.php");

$brand_name = $_POST['brand_name'];
$date = date("d/m/Y");

$sql = "INSERT INTO tb_brand(brand_name,date,status) VALUES ('$brand_name','$date','active')";

if (mysqli_query($con, $sql)) {

    echo "<script> alert('Saved successfully');
    window.location.href='../../add_brand';</script>";
 
} else {
    echo "ERROR: could not be able to execute $sql." . mysqli_error($con);
}
mysqli_close($con);
?>
