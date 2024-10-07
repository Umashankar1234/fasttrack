<?php 
include("../app/model/config.php");
if($_POST['bnrid'] !='' && $_POST['delimage'] !='') 
{
	$updt= $conn->prepare("DELETE FROM $tbl_banner WHERE bnrid='".$_POST['bnrid']."'");
	$updt->execute();
	unlink("../public/images/photo-gallery/".$_POST['delimage']);
}
?>