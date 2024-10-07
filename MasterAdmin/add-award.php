<?php
include("../app/model/config.php");
include("access.php");

if($_GET['edited'] !='')
{
	$res_award_edit = $conn->query("SELECT * FROM $tbl_award WHERE awrdid='".$_GET['edited']."'");
	$result_award_edit=$res_award_edit->fetch_object();
}
if(isset($_POST['add_award']))
{
	$award_id=$_POST['award_id'];
	$awardee_name_eng=addslashes(html_entity_decode($_POST['awardee_name_eng']));
	$awardee_name_odia=addslashes(html_entity_decode($_POST['awardee_name_odia']));
	$dob=$_POST['dob'];
	$award_year=$_POST['award_year'];
	$fetr_img = $_FILES['image']['name'];
	if($fetr_img !='')
	{
		$num = rand(1,10000);
		$filename = $num."_".$fetr_img;
		$location = "../public/images/award-profile/".$filename;
		move_uploaded_file($_FILES['image']['tmp_name'],$location);
	}

	$updt= $conn->prepare("INSERT INTO $tbl_award(award_id,awardee_name_eng,awardee_name_odia,dob,award_year,image)VALUES('".$award_id."','".$awardee_name_eng."','".$awardee_name_odia."','".$dob."','".$award_year."','".$filename."')");
	$updt->execute();
	header("location:manage-award?succ=1");
}
if(isset($_POST['updt_award']))
{
	$award_id=$_POST['award_id'];
	$awardee_name_eng=addslashes(html_entity_decode($_POST['awardee_name_eng']));
	$awardee_name_odia=addslashes(html_entity_decode($_POST['awardee_name_odia']));
	$dob=$_POST['dob'];
	$award_year=$_POST['award_year'];
	$fetr_img = $_FILES['image']['name'];
	if($fetr_img !='')
	{
		$num = rand(1,10000);
		$filename = $num."_".$fetr_img;
		$location = "../public/images/award-profile/".$filename;
		move_uploaded_file($_FILES['image']['tmp_name'],$location);
	}
	else
	{
		$filename=$_POST['hideimg'];
	}
	$updt= $conn->prepare("UPDATE $tbl_award SET award_id='".$award_id."',awardee_name_eng='".$awardee_name_eng."',awardee_name_odia='".$awardee_name_odia."' ,dob='".$dob."',award_year='".$award_year."',image='".$filename."' WHERE awrdid='".$_GET['edited']."'");
	$updt->execute();
	if($updt)
	{
		header("location:manage-award?succ=2");
	}
}
if($_GET['delimg'] !='' && $_GET['edited'] !='')
{
	$updt= $conn->prepare("UPDATE $tbl_award SET image='' WHERE awrdid='".$_GET['edited']."'");
	$updt->execute();
	unlink("../public/images/award-profile/".$_GET['delimg']);
	header("location:add-award?edited=".$_GET['edited']);
}
include("../app/view/layouts/master-header.php");
include("../app/view/MasterAdmin/add-award.html");
?>