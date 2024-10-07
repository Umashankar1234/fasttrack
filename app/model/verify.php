<?php

require('config.php');
session_start();
//db connection
require('razorpay-php/Razorpay.php');
use Razorpay\Api\Api;
use Razorpay\Api\Errors\SignatureVerificationError;

$success = true;

$error = "Payment Failed";

if (empty($_POST['razorpay_payment_id']) === false)
{
    $api = new Api($keyId, $keySecret);

    try
    {
        // Please note that the razorpay order ID must
        // come from a trusted source (session here, but
        // could be database or something else)
        $attributes = array(
            'razorpay_order_id' => $_SESSION['razorpay_order_id'],
            'razorpay_payment_id' => $_POST['razorpay_payment_id'],
            'razorpay_signature' => $_POST['razorpay_signature']
        );

        $api->utility->verifyPaymentSignature($attributes);
    }
    catch(SignatureVerificationError $e)
    {
        $success = false;
        $error = 'Razorpay Error : ' . $e->getMessage();
    }
}

if ($success === true)
{
    $razorpay_order_id = $_SESSION['razorpay_order_id'];
    $razorpay_payment_id = $_POST['razorpay_payment_id'];
    $cname = $_SESSION['cname'];
    $phone = $_SESSION['phone'];
    $email = $_SESSION['email'];
    $address = $_SESSION['address'];
    $price = $_SESSION['price'];
    $hname = $_SESSION['hotelname'];
    $haddress = $_SESSION['hoteladdress'];
    $getreceipt = $_SESSION['receipt'];
    $date = date('Y-m-d');
    $price = str_replace(['Rs', '.', ',', ' '], '', $price);



    $sql = "INSERT INTO tb_hotelbooking (hotel_name, hotel_address, guest_name, email, phone, address, gtotal, receiptno, date, razorpay_id, status) VALUES ('$hname','$haddress','$cname','$email','$phone','$address','$price','$getreceipt','$date','$razorpay_payment_id','success')";
    if(mysqli_query($con, $sql)){
       
 
    echo "<script type='text/javascript'> alert('Thank you for booking');
    window.location.href = '../../hotel-list'; </script>";
}
    
}
else
{
    $html = "<p>Your payment failed</p>
             <p>{$error}</p>";
}

echo $html;
