<?php
include_once '../control/config.php';
 
$vid = $_GET['vid'];
 
$cell_query ="DELETE from tb_vehicle where vehicle_id=".$vid."";
if(mysqli_query($con, $cell_query)){

  
    echo "<script> alert('Records Deleted successfully.!');
window.location.href='../../viewvehicle';</script>";
   
}
else{
echo "ERROR: Could not able to execute $cell_query. " . mysqli_error($con);
}

// close connection
mysqli_close($con);   
	