<?php
include_once '../control/config.php';
 
$vid = $_GET['vid'];
 
$cell_query ="DELETE from tb_vehiclephoto where photo_id=".$vid."";
if(mysqli_query($con, $cell_query)){

  
    echo "<script> alert('Records Deleted successfully.!');
window.location.href='../../vehicle_photo';</script>";
   
}
else{
echo "ERROR: Could not able to execute $cell_query. " . mysqli_error($con);
}

// close connection
mysqli_close($con);   
	