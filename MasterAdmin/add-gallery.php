<?php
include("../app/model/config.php");
include("access.php");

if($_GET['edited'] !='')
{
	$res_gallery_edit = $conn->query("SELECT * FROM $tbl_gallery WHERE imgid='".$_GET['edited']."'");
	$result_gallery_edit=$res_gallery_edit->fetch_object();
}
if(isset($_POST['add_gallery']))
{
	$gallery_title=addslashes(html_entity_decode($_POST['gallery_title']));
	$odia_title=addslashes(html_entity_decode($_POST['odia_title']));
	$fetr_img = $_FILES['image']['name'];
	if($fetr_img !='')
	{
		$num = rand(1,10000);
		$filename = $num."_".$fetr_img;
		$location = "../public/images/photo-gallery/".$filename;
		move_uploaded_file($_FILES['image']['tmp_name'],$location);
	}

	$updt= $conn->prepare("INSERT INTO $tbl_gallery(gallery_title,odia_title,image)VALUES('".$gallery_title."','".$odia_title."','".$filename."')");
	$updt->execute();
	header("location:manage-gallery?succ=1");
}
if(isset($_POST['updt_gallery']))
{
	$gallery_title=addslashes(html_entity_decode($_POST['gallery_title']));
	$odia_title=addslashes(html_entity_decode($_POST['odia_title']));
	$fetr_img = $_FILES['image']['name'];
	if($fetr_img !='')
	{
		$num = rand(1,10000);
		$filename = $num."_".$fetr_img;
		
		$location = "../public/images/photo-gallery/".$filename;
		move_uploaded_file($_FILES['image']['tmp_name'],$location);
	}
	else
	{
		$filename=$_POST['hideimg'];
	}
	$updt= $conn->prepare("UPDATE $tbl_gallery SET gallery_title='".$gallery_title."',odia_title='".$odia_title."',image='".$filename."' WHERE imgid='".$_GET['edited']."'");
	$updt->execute();
	if($updt)
	{
		header("location:manage-gallery?succ=2");
	}
}
if($_GET['delimg'] !='' && $_GET['edited'] !='')
{
	$updt= $conn->prepare("UPDATE $tbl_gallery SET image='' WHERE imgid='".$_GET['edited']."'");
	$updt->execute();
	unlink("../public/images/photo-gallery/".$_GET['delimg']);
	header("location:add-gallery?edited=".$_GET['edited']);
}
include("../app/view/layouts/master-header.php");
include("../app/view/MasterAdmin/add-gallery.html");
?>