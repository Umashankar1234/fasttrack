<?php 
include("../app/model/config.php");
if($_POST['videoid'] !='' && $_POST['delimage'] !='') 
{
	$updt= $conn->prepare("DELETE FROM $tbl_video WHERE vidid='".$_POST['videoid']."'");
	$updt->execute();
	unlink("../public/images/video-gallery/".$_POST['delimage']);
	unlink("../public/images/video-gallery/".$_POST['delvdo']);
}
?>