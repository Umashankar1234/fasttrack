<?php
error_reporting(0);
 
// $con = mysqli_connect('localhost', 'u388063350_nvironuser', 'Free@2025', 'u388063350_nvironwebdb');
 
$con = mysqli_connect('localhost', 'root', '', 'fastrakdb');
$expDate = '2030-03-10';
$Today = date('Y-m-d');
if(strtotime($expDate) < strtotime($Today)){
    header('location:expire.php');
}
// $con = mysqli_connect('localhost', 'root', '', 'fastrakdb');
// $expDate = '2030-03-10';
// $Today = date('Y-m-d');
// if(strtotime($expDate) < strtotime($Today)){
//     header('location:expire.php');
// }
?>

