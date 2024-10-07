<?php
if(!isset($_SESSION['sahityaacademy_id']) && empty($_SESSION['sahityaacademy_id']))
{
	header("location:".$projectPath_master_admin);
}
?>