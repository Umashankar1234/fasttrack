<?php
include("../app/model/config.php");

if(isset($_GET['err']))
{
	if($_GET['err']==1)
	{	
		$error_msg="Invalid Username or Password.";	
	}
}
if(isset($_POST['btn_login']))
{
	$username=$_POST['uname'];	
	$password=md5($_POST['upwd']);
	$result_cnt = $conn->query("SELECT pas FROM $tbl_admin WHERE uid='".$username."' AND pas='".$password."'");
	$row = $result_cnt->fetch_object();
	if(($row->pas == $password) && (strlen($row->pas) == strlen($password)))
	{
		$_SESSION['sahityaacademy_id'] = $username;
		header("location:".$projectPath_master_admin."dashboard");
	}
	else
	{
		header("location:".$projectPath_master_admin."index?err=1");
	}
}

include("../app/view/MasterAdmin/index.html");
?>