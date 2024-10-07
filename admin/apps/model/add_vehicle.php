<?php
include("../control/config.php");
include("../control/common-func.php");

$brand_id =$_POST['brand_id'];
$model_id =$_POST['model_id'];
$car_photo = $_POST['car_photo'];
$date = date("Y-m-d");
$newdate = date("Ymdhi");

$allowTypes = array('jpg','png','jpeg','gif'); 
$targetDir =  "../../assets/images/car_photo/";

$fileNamem = $newdate.basename($_FILES['car_photo']['name']); 
$targetFilePathm = move_uploaded_file($_FILES["car_photo"]["tmp_name"], $targetDir.$fileNamem);

$sql = "INSERT INTO tb_vehiclephoto(brand_id,model_id,car_photo,date,status) VALUES ('$brand_id','$model_id','$fileNamem','$date','active')";

if (mysqli_query($con, $sql)) {

    echo "<script> alert('Saved successfully');
    window.location.href='../../add_vehicle';</script>";
 
} else {
    echo "ERROR: could not be able to execute $sql." . mysqli_error($con);
}
mysqli_close($con);
?>