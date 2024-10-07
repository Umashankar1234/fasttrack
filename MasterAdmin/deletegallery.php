<?php 
include("../app/model/config.php");
if($_POST['imgid'] !='' && $_POST['delimage'] !='') 
{
	$updt= $conn->prepare("DELETE FROM $tbl_gallery WHERE imgid='".$_POST['imgid']."'");
	$updt->execute();
	unlink("../public/images/photo-gallery/".$_POST['delimage']);
}
?>