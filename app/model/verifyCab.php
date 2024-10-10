<?php

require('config.php');
session_start();

// Database connection (ensure `$con` is initialized correctly for database operations)
require('razorpay-php/Razorpay.php');

use Razorpay\Api\Api;
use Razorpay\Api\Errors\SignatureVerificationError;

$success = true;
$error = "Payment Failed";

if (!empty($_POST['razorpay_payment_id'])) {
    $api = new Api($keyId, $keySecret);

    try {
        // Verify the payment signature
        $attributes = [
            'razorpay_order_id' => $_SESSION['razorpay_order_id'],
            'razorpay_payment_id' => $_POST['razorpay_payment_id'],
            'razorpay_signature' => $_POST['razorpay_signature']
        ];

        $api->utility->verifyPaymentSignature($attributes);
    } catch (SignatureVerificationError $e) {
        $success = false;
        $error = 'Razorpay Error: ' . $e->getMessage();
    }
}

if ($success) {
    // Payment verified, update the booking status
    $razorpay_payment_id = $_POST['razorpay_payment_id'];
    $bookingId = $_SESSION['bookingId']; // Assuming the booking ID is stored in the session
    $date = date('Y-m-d H:i:s'); // Include time for the update
    // echo $razorpay_payment_id;


    // SQL query to update the payment status to 'success'
    $sql = "UPDATE tb_cab_bookings 
            SET paymentStatus = 'success', razorpayId = '$razorpay_payment_id'
            WHERE id = '$bookingId'"; // Replace 'id' with the actual column name for your booking ID

    // Execute the SQL query and check for errors
    if (mysqli_query($con, $sql)) {
        // Booking and payment update successful
        echo "<script type='text/javascript'> 
                alert('Thank you for your booking. Payment Successful!');                
                window.location.href = '../../car-details'; </script>";
    } else {
        // Log the error for debugging
        error_log("SQL Error: " . mysqli_error($con)); // Log the error
        echo "<script type='text/javascript'> 
                alert('There was an error updating your booking: " . mysqli_error($con) . "');
              </script>";
    }
} else {
    // Payment failed
    echo "<p>Your payment failed</p><p>{$error}</p>";
}
