<?php

require('config.php');
require('razorpay-php/Razorpay.php');
session_start();

// Enable error reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

use Razorpay\Api\Api;

// Create the Razorpay API instance
$api = new Api($keyId, $keySecret);

// Static amount for now
$carId = $_POST['carId'];
$staticAmount = $_POST['total'];

// Get booking details from POST
$carId = $_POST['carId'];
$bookingPlace = $_POST['bookingPlace'];
$destination = $_POST['destiny'];
$pickupDate = $_POST['pickupDate'];
$pickupTime = $_POST['pickupTime'];
$firstName = $_POST['txtFirstName'];
$lastName = $_POST['txtLastName'];
$email = $_POST['txtEmail'];
$phone = $_POST['txtmobile'];
$tripInfo = $_POST['tourDetails'];
$promoCode = $_POST['txtpromocode'];

// Assuming you have a database connection called $con in config.php
if (!isset($con)) {
    die("Database connection not established.");
}

// Insert the booking details into the database
$insertQuery = "INSERT INTO tb_cab_bookings (cabId, bookingPlace, destination, pickupDate, pickupTime, firstName, lastName, email, phone, tripInfo, promoCode, amount, paymentStatus, createdAt) 
VALUES ('$carId', '$bookingPlace', '$destination', '$pickupDate', '$pickupTime', '$firstName', '$lastName', '$email', '$phone', '$tripInfo', '$promoCode', '$staticAmount', 'pending', NOW())";

if (mysqli_query($con, $insertQuery)) {
    // Get the last inserted ID
    $bookingId = mysqli_insert_id($con);
    $_SESSION['bookingId'] = $bookingId;
} else {
    die("Error inserting booking details: " . mysqli_error($con));
}

// Create the Razorpay order
$receipt = "Receipt#" . $bookingId;
$orderData = [
    'receipt'         => $receipt,
    'amount'          => $staticAmount * 100, // Amount in paise (15000 INR)
    'currency'        => 'INR',
    'payment_capture' => 1 // Auto capture
];

$razorpayOrder = $api->order->create($orderData);
$razorpayOrderId = $razorpayOrder['id'];
$_SESSION['razorpay_order_id'] = $razorpayOrderId;

$data = [
    "key"               => $keyId,
    "amount"            => $orderData['amount'],
    "name"              => $firstName . " " . $lastName,
    "description"       => "Cab Booking",
    "prefill"           => [
        "name"              => $firstName . " " . $lastName,
        "email"             => $email,
        "contact"           => $phone,
    ],
    "notes"             => [
        "address"           => $bookingPlace,
        "merchant_order_id" => $receipt,
    ],
    "theme"             => [
        "color"             => "#F37254"
    ],
    "order_id"          => $razorpayOrderId,
];

$json = json_encode($data);
?>

<!-- Razorpay Checkout Script -->
<script src="https://checkout.razorpay.com/v1/checkout.js"></script>
<form name="razorpayform" action="verifyCab.php" method="POST">
    <input type="hidden" name="razorpay_payment_id" id="razorpay_payment_id">
    <input type="hidden" name="razorpay_signature" id="razorpay_signature">
</form>
<script>
    var options = <?php echo $json ?>;

    options.handler = function (response) {
        document.getElementById('razorpay_payment_id').value = response.razorpay_payment_id;
        document.getElementById('razorpay_signature').value = response.razorpay_signature;
        document.razorpayform.submit();
    };

    var rzp = new Razorpay(options);
    rzp.open();
</script>
