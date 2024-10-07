<?php
include("../app/model/config.php");
include("access.php");
if($_GET['edited'] !='')
{
	$res_banner_edit = $conn->query("SELECT * FROM $tbl_banner WHERE bnrid='".$_GET['edited']."'");
	$result_banner_edit=$res_banner_edit->fetch_object();
}
if(isset($_POST['add_banner']))
{
	$fetr_img = $_FILES['banner']['name'];
	if($fetr_img !='')
	{
		$num = rand(1,10000);
		$filename = $num."_".$fetr_img;
		$location = "../public/images/banner/".$filename;
		move_uploaded_file($_FILES['banner']['tmp_name'],$location);
	}

	$updt= $conn->prepare("INSERT INTO $tbl_banner(banner)VALUES('".$filename."')");
	$updt->execute();
	header("location:manage-banner?succ=1");
}
if(isset($_POST['updt_banner']))
{
	$fetr_img = $_FILES['banner']['name'];
	if($fetr_img !='')
	{
		$num = rand(1,10000);
		$filename = $num."_".$fetr_img;
		
		$location = "../public/images/banner/".$filename;
		move_uploaded_file($_FILES['banner']['tmp_name'],$location);
	}
	else
	{
		$filename=$_POST['hidebanner'];
	}
	$updt= $conn->prepare("UPDATE $tbl_banner SET banner='".$filename."' WHERE bnrid='".$_GET['edited']."'");
	$updt->execute();
	if($updt)
	{
		header("location:manage-banner?succ=2");
	}
}
if($_GET['delimg'] !='' && $_GET['edited'] !='')
{
	$updt= $conn->prepare("UPDATE $tbl_banner SET banner='' WHERE bnrid='".$_GET['edited']."'");
	$updt->execute();
	unlink("../public/images/banner/".$_GET['delimg']);
	header("location:manage-banner?edited=".$_GET['edited']);
}
include("../app/view/layouts/master-header.php");
include("../app/view/MasterAdmin/manage-banner.html");
?>