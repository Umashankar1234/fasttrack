<?php
include_once '../control/config.php';
 
$mid = $_GET['mid'];
 
$cell_query ="DELETE from tb_model where model_id=".$mid."";
if(mysqli_query($con, $cell_query)){

  
    echo "<script> alert('Records Deleted successfully.!');
window.location.href='../../add_model';</script>";
   
}
else{
echo "ERROR: Could not able to execute $cell_query. " . mysqli_error($con);
}

// close connection
mysqli_close($con);   
	