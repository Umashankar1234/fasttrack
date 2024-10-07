<?php
include_once '../control/config.php';
 
$vid = $_GET['vid'];
 
$cell_query ="DELETE from tb_variant where variant_id=".$vid."";
if(mysqli_query($con, $cell_query)){

  
    echo "<script> alert('Records Deleted successfully.!');
window.location.href='../../pay_variant';</script>";
   
}
else{
echo "ERROR: Could not able to execute $cell_query. " . mysqli_error($con);
}

// close connection
mysqli_close($con);   
	