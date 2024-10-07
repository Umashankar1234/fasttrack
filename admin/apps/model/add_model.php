<?php
include("../control/config.php");

$brand_id = $_POST['brand_id'];
$model_name = $_POST['model_name'];
$date = date("d/m/Y");

$sql = "INSERT INTO tb_model(brand_id,model_name,date,status) VALUES ('$brand_id','$model_name','$date','active')";

if (mysqli_query($con, $sql)) {

    echo "<script> alert('Saved successfully');
    window.location.href='../../add_model';</script>";
 
} else {
    echo "ERROR: could not be able to execute $sql." . mysqli_error($con);
}
mysqli_close($con);
?>
