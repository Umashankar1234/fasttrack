<?php 
include("../app/model/config.php");
if($_POST['tenderid'] !='' && $_POST['deltender'] !='') 
{
	$updt= $conn->prepare("DELETE FROM $tbl_tender WHERE tndrid='".$_POST['tenderid']."'");
	$updt->execute();
	unlink("../public/images/tender/".$_POST['deltender']);
}
?>