<?php
include("../control/config.php");

$variant_name = $_POST['variant_name'];
$percent = $_POST['percent'];
$date = date("d/m/Y");

$sql = "INSERT INTO tb_variant(variant_name,percent,date,status) VALUES ('$variant_name','$percent','$date','active')";

if (mysqli_query($con, $sql)) {

    echo "<script> alert('Saved successfully');
    window.location.href='../../pay_variant';</script>";
 
} else {
    echo "ERROR: could not be able to execute $sql." . mysqli_error($con);
}
mysqli_close($con);
?>
