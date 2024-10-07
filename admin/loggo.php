<?php
 include("apps/control/config.php");
   session_start();


if($_POST)
{
  $unm = mysqli_real_escape_string($con, $_POST['username']); 
  $pas = mysqli_real_escape_string($con, $_POST['password']); 
      
      $sql = "SELECT * FROM tb_login WHERE username='$unm' and password='$pas'";
      $result = mysqli_query($con, $sql);
      echo $count = mysqli_num_rows($result);
       
      // If result matched $myusername and $mypassword, table row must be 1 row
		
      if($count == 1) {
        // session_register("myusername");
        $_SESSION['login_user'] = $unm;
         header("location: dashboard");
      }else {
        "<script>alert('Your Login Name or Password is invalid')</script>";
      }
    }
?>