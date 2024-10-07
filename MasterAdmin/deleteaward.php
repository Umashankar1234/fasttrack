<?php 
include("../app/model/config.php");
if($_POST['awrdid'] !='' && $_POST['delimage'] !='') 
{
	$updt= $conn->prepare("DELETE FROM $tbl_award WHERE awrdid='".$_POST['awrdid']."'");
	$updt->execute();
	unlink("../public/images/award-profile/".$_POST['delimage']);
}
?>