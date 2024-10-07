<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Expires" content="0" />
<title>SahityaAcademy Admin</title>
<link rel="icon" type="/image/png" href="<?php echo $projectPath;?>public/images/fav/favicon-32x32.png" sizes="32x32" />
<link rel="icon" type="/image/png" href="<?php echo $projectPath;?>public/images/fav/favicon-16x16.png" sizes="16x16" />  
<link href="<?php echo $projectPath;?>public/css/adminstyle.css" rel="stylesheet" type="text/css" />
<script src="//cdn.ckeditor.com/4.16.0/standard/ckeditor.js"></script>
</head>
<body>
<!--HEADER START HERE-->
<header class="header_outer">
  <div class="top_header_content">
    <div class="left_header">
      <ul>
        <li> <a href="dashboard" class="logoti">
        <img src="<?php echo $projectPath;?>public/images/sahitya-logo.png" alt="Master Admin Panel"/>
        </a>
        </li>
        <li class="menu_toggle_icon">
          <div class="mob">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </div>
          </li>
      </ul>
    </div>
    <div class="right_profile">
      <ul>
        <li class="profa ico ppmenu"><span>Hello <?php echo "Master Admin"; ?> <img class="dwme" src="<?php echo $projectPath;?>public/images/das_icons/dropdown.png" /></span> <a href="#">
          <figure>
            <div class="pro_box prof"><img src="<?php echo $projectPath;?>public/images/das_icons/profile1.png" /></div>
          </figure>
          </a>
          <ul class="submenu">
            <li><a href="logout"><img class="pimg" src="<?php echo $projectPath;?>public/images/das_icons/logout.png" alt="ico" />Log Out</a></li>
          </ul>
        </li>
      </ul>
      <div class="sub_menu_pro"> </div>
    </div>
  </div>
</header>
<!--HEADER END HERE--> 
<!--CONTENT AREA START-->
<section class="hmso_area">
<div class="hmslt_area">
  <div class="logohms">
    <ul class="hmsmenu_area">
      <li <?php if($page_url =="dashboard"){ ?> class="active" <?php }?>> <a href="dashboard" class="lhmsb">
        <div class="icohms_box"> <img class="default" src="<?php echo $projectPath;?>public/images/das_icons/dasb.png" alt="i" /> <img class="hover" src="<?php echo $projectPath;?>public/images/das_icons/dasb.png" alt="i" /></div>
        <div class="hmsrtm_text">
          <h5>Dashboard</h5>
        </div>
        </a> </li>
      <li <?php if($page_url =="manage-gallery" || $page_url =="add-gallery"){ ?> class="active" <?php }?>>
		<a href="manage-gallery" class="lhmsb">
        <div class="icohms_box">
         <img class="default" src="<?php echo $projectPath;?>public/images/das_icons/can.png" alt="i" /> 
         <img class="hover" src="<?php echo $projectPath;?>public/images/das_icons/can.png" alt="i" />
         </div>
        <div class="hmsrtm_text">
          <h5>Gallery</h5>
        </div>
        </a>
      </li>
      <li <?php if($page_url =="manage-video" || $page_url =="add-video"){ ?> class="active" <?php }?>>
		<a href="manage-video" class="lhmsb">
        <div class="icohms_box">
         <img class="default" src="<?php echo $projectPath;?>public/images/das_icons/can.png" alt="i" /> 
         <img class="hover" src="<?php echo $projectPath;?>public/images/das_icons/can.png" alt="i" />
         </div>
        <div class="hmsrtm_text">
          <h5>Video</h5>
        </div>
        </a>
      </li>
      <li <?php if($page_url =="manage-award" || $page_url =="add-award"){ ?> class="active" <?php }?>>
		<a href="manage-award" class="lhmsb">
        <div class="icohms_box">
         <img class="default" src="<?php echo $projectPath;?>public/images/das_icons/can.png" alt="i" /> 
         <img class="hover" src="<?php echo $projectPath;?>public/images/das_icons/can.png" alt="i" />
         </div>
        <div class="hmsrtm_text">
          <h5>Award</h5>
        </div>
        </a>
      </li>
      <li <?php if($page_url =="manage-tender" || $page_url =="add-tender"){ ?> class="active" <?php }?>>
		<a href="manage-tender" class="lhmsb">
        <div class="icohms_box">
         <img class="default" src="<?php echo $projectPath;?>public/images/das_icons/can.png" alt="i" /> 
         <img class="hover" src="<?php echo $projectPath;?>public/images/das_icons/can.png" alt="i" />
         </div>
        <div class="hmsrtm_text">
          <h5>Tender</h5>
        </div>
        </a>
      </li>
      <li <?php if($page_url =="manage-banner"){ ?> class="active" <?php }?>>
		<a href="manage-banner" class="lhmsb">
        <div class="icohms_box">
         <img class="default" src="<?php echo $projectPath;?>public/images/das_icons/can.png" alt="i" /> 
         <img class="hover" src="<?php echo $projectPath;?>public/images/das_icons/can.png" alt="i" />
         </div>
        <div class="hmsrtm_text">
          <h5>Banner</h5>
        </div>
        </a>
      </li>
      <li <?php if($page_url =="manage-announcement" || $page_url =="add-announcement"){ ?> class="active" <?php }?>>
		<a href="manage-announcement" class="lhmsb">
        <div class="icohms_box">
         <img class="default" src="<?php echo $projectPath;?>public/images/das_icons/can.png" alt="i" /> 
         <img class="hover" src="<?php echo $projectPath;?>public/images/das_icons/can.png" alt="i" />
         </div>
        <div class="hmsrtm_text">
          <h5>Announcement</h5>
        </div>
        </a>
      </li>
      <li> <a href="logout" class="lhmsb">
        <div class="icohms_box"> <img class="default" src="<?php echo $projectPath;?>public/images/das_icons/logout.png" alt="i"> <img class="hover" src="<?php echo $projectPath;?>public/images/das_icons/logout.png" alt="i"></div>
        <div class="hmsrtm_text">
          <h5>Logout</h5>
        </div>
        </a>
		</li>
    </ul>
  </div>
</div>
