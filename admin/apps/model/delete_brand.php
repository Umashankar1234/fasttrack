<?php
include_once '../control/config.php';
 
$bid = $_GET['bid'];
 
$cell_query ="DELETE from tb_brand where brand_id=".$bid."";
if(mysqli_query($con, $cell_query)){

  
    echo "<script> alert('Records Deleted successfully.!');
window.location.href='../../add_brand';</script>";
   
}
else{
echo "ERROR: Could not able to execute $cell_query. " . mysqli_error($con);
}

// close connection
mysqli_close($con);   
	