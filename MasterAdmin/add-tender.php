<?php
include("../app/model/config.php");
include("access.php");

if($_GET['edited'] !='')
{
	$res_tender_edit = $conn->query("SELECT * FROM $tbl_tender WHERE tndrid='".$_GET['edited']."'");
	$result_tender_edit=$res_tender_edit->fetch_object();
}
if(isset($_POST['add_tender']))
{
	$eng_title=addslashes(html_entity_decode($_POST['eng_title']));
	$odia_title=addslashes(html_entity_decode($_POST['odia_title']));
	$tender = $_FILES['tender']['name'];
	if($tender !='')
	{
		$num = rand(1,10000);
		$filename2 = $num."_".$tender;
		$location = "../public/images/tender/".$filename2;
		move_uploaded_file($_FILES['tender']['tmp_name'],$location);
	}
	$updt= $conn->prepare("INSERT INTO $tbl_tender(eng_title,odia_title,tender)VALUES('".$eng_title."','".$odia_title."','".$filename2."')");
	$updt->execute();
	header("location:manage-tender?succ=1");
}
if(isset($_POST['updt_tender']))
{
	$eng_title=addslashes(html_entity_decode($_POST['eng_title']));
	$odia_title=addslashes(html_entity_decode($_POST['odia_title']));
	$tender = $_FILES['tender']['name'];
	if($tender !='')
	{
		$num = rand(1,10000);
		$filename2 = $num."_".$tender;
		$location = "../public/images/tender/".$filename2;
		move_uploaded_file($_FILES['tender']['tmp_name'],$location);
	}
	else
	{
		$filename2=$_POST['hidepdf'];
	}
	$updt= $conn->prepare("UPDATE $tbl_tender SET eng_title='".$eng_title."',odia_title='".$odia_title."',tender='".$filename2."' WHERE tndrid='".$_GET['edited']."'");
	$updt->execute();
	if($updt)
	{
		header("location:manage-tender?succ=2");
	}

}
if($_GET['deltndr'] !='' && $_GET['edited'] !='')
{
	$updt= $conn->prepare("UPDATE $tbl_tender SET tender='' WHERE tndrid='".$_GET['edited']."'");
	$updt->execute();
	unlink("../public/images/tender/".$_GET['deltndr']);
	header("location:add-tender?edited=".$_GET['edited']);
}
include("../app/view/layouts/master-header.php");
include("../app/view/MasterAdmin/add-tender.html");
?>