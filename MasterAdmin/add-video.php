<?php
include("../app/model/config.php");
include("access.php");

if($_GET['edited'] !='')
{
	$res_video_edit = $conn->query("SELECT * FROM $tbl_video WHERE vidid='".$_GET['edited']."'");
	$result_video_edit=$res_video_edit->fetch_object();
}
if(isset($_POST['add_video']))
{
	$eng_title=addslashes(html_entity_decode($_POST['eng_title']));
	$odia_title=addslashes(html_entity_decode($_POST['odia_title']));
	$fetr_img = $_FILES['thumbnail']['name'];
	$video = $_FILES['video']['name'];
	if($fetr_img !='')
	{
		$num = rand(1,10000);
		$filename = $num."_".$fetr_img;
		$location = "../public/images/video-gallery/".$filename;
		move_uploaded_file($_FILES['thumbnail']['tmp_name'],$location);
	}
	if($video !='')
	{
		$num = rand(1,10000);
		$filename2 = $num."_".$video;
		$location = "../public/images/video-gallery/".$filename2;
		move_uploaded_file($_FILES['video']['tmp_name'],$location);
	}
	$updt= $conn->prepare("INSERT INTO $tbl_video(eng_title,odia_title,thumbnail,video)VALUES('".$eng_title."','".$odia_title."','".$filename."','".$filename2."')");
	$updt->execute();
	header("location:manage-video?succ=1");
}
if(isset($_POST['updt_video']))
{
	$eng_title=addslashes(html_entity_decode($_POST['eng_title']));
	$odia_title=addslashes(html_entity_decode($_POST['odia_title']));
	$fetr_img = $_FILES['thumbnail']['name'];
	$video = $_FILES['video']['name'];
	if($fetr_img !='')
	{
		$num = rand(1,10000);
		$filename = $num."_".$fetr_img;
		
		$location = "../public/images/video-gallery/".$filename;
		move_uploaded_file($_FILES['thumbnail']['tmp_name'],$location);
	}
	else
	{
		$filename=$_POST['hideimg'];
	}
	if($video !='')
	{
		$num = rand(1,10000);
		$filename2 = $num."_".$video;
		
		$location = "../public/images/video-gallery/".$filename2;
		move_uploaded_file($_FILES['video']['tmp_name'],$location);
	}
	else
	{
		$filename2=$_POST['hidevdo'];
	}
	$updt= $conn->prepare("UPDATE $tbl_video SET eng_title='".$eng_title."',odia_title='".$odia_title."',thumbnail='".$filename."',video='".$filename2."' WHERE vidid='".$_GET['edited']."'");
	$updt->execute();
	if($updt)
	{
		header("location:manage-video?succ=2");
	}

}
if($_GET['delimg'] !='' && $_GET['edited'] !='')
{
	$updt= $conn->prepare("UPDATE $tbl_video SET image='' WHERE vidid='".$_GET['edited']."'");
	$updt->execute();
	unlink("../public/images/video-gallery/".$_GET['delimg']);
	header("location:add-video?edited=".$_GET['edited']);
}
if($_GET['delvdo'] !='' && $_GET['edited'] !='')
{
	$updt= $conn->prepare("UPDATE $tbl_video SET video='' WHERE vidid='".$_GET['edited']."'");
	$updt->execute();
	unlink("../public/images/video-gallery/".$_GET['delvdo']);
	header("location:add-video?edited=".$_GET['edited']);
}
include("../app/view/layouts/master-header.php");
include("../app/view/MasterAdmin/add-video.html");
?>