<?php

$keyId = 'rzp_test_9TB3asShG3RvdV';
$keySecret = 'zrpWBMrytnHq5UMUeVikNgfn';
$displayCurrency = 'INR';

error_reporting(0);
$con = mysqli_connect('localhost', 'root', '', 'fastrakdb');
$expDate = '2030-03-10';
$Today = date('Y-m-d');
if(strtotime($expDate) < strtotime($Today)){
    header('location:expire.php');
}
$pdocon = new PDO("mysql:host=localhost; dbname=fastrakdb", "root", "");


$page_urls = basename($_SERVER['SCRIPT_NAME']);
$page_url = rtrim($page_urls,".php");


// $keyId = 'rzp_test_9TB3asShG3RvdV';
// $keySecret = 'zrpWBMrytnHq5UMUeVikNgfn';
// $displayCurrency = 'INR';

// error_reporting(0);
// $con = mysqli_connect('localhost', 'u704867921_fasttrack', 'Fasttrack!@789', 'u704867921_fasttrack');
// $expDate = '2030-03-10';
// $Today = date('Y-m-d');
// if(strtotime($expDate) < strtotime($Today)){
//     header('location:expire.php');
// }
// $pdocon = new PDO("mysql:host=localhost; dbname=u704867921_fasttrack", "u704867921_fasttrack", "Fasttrack!@789");


// $page_urls = basename($_SERVER['SCRIPT_NAME']);
// $page_url = rtrim($page_urls,".php");
?>