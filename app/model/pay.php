<?php

require('config.php');
require('razorpay-php/Razorpay.php');
session_start();

// Create the Razorpay Order
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

use Razorpay\Api\Api;

$api = new Api($keyId, $keySecret);

$n = 8;
function getName($n) {
    $characters = '0123456789abcdefghijklmnopuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $randomString = '';
    for ($i = 0; $i < $n; $i++) {
        $index = rand(0, strlen($characters) - 1);
        $randomString .= $characters[$index];
    }
    return $randomString;
}
//
// We create an razorpay order using orders api
// Docs: https://docs.razorpay.com/docs/orders
//

$receipt = getName($n);
$_SESSION['receipt'] = $receipt;
$address = $_POST['address'];
$_SESSION['address'] = $address;
$_SESSION['hotelname']  = $address;
$hotelname = $_POST['hotelname'];
$_SESSION['hotelname'] = $hotelname;
$hoteladdress = $_POST['hoteladdress'];
$_SESSION['hoteladdress'] = $hoteladdress;
 $price = $_POST['gtotal'];
$_SESSION['price'] = $price;
 $customername = $_POST['cname'];
 $_SESSION['cname'] =  $customername;
 $email = $_POST['email'];
$_SESSION['email'] = $email;
 $contactno = $_POST['phone'];
 $_SESSION['phone'] =  $contactno;
 $price = str_replace(['Rs', '.', ',', ' '], '', $price);

$orderData = [
    'receipt'         => $receipt,
    'amount'          => $price * 100, // 2000 rupees in paise
    'currency'        => 'INR',
    'payment_capture' => 1 // auto capture
];

$razorpayOrder = $api->order->create($orderData);

$razorpayOrderId = $razorpayOrder['id'];

$_SESSION['razorpay_order_id'] = $razorpayOrderId;

$displayAmount = $amount = $orderData['amount'];

if ($displayCurrency !== 'INR')
{
    $url = "https://api.fixer.io/latest?symbols=$displayCurrency&base=INR";
    $exchange = json_decode(file_get_contents($url), true);

    $displayAmount = $exchange['rates'][$displayCurrency] * $amount / 100;
}

$data = [
    "key"               => $keyId,
    "amount"            => $amount,
    "name"              => $customername,
    "description"       => "Coding for Everyone",
    "image"             => "https://s29.postimg.org/r6dj1g85z/daft_punk.jpg",
    "prefill"           => [
    "name"              => $_POST['hotelname'],
    "email"             => $email,
    "contact"           => $contactno,
    ],
    "notes"             => [
    "address"           => $_POST['address'],
    "merchant_order_id" => $receipt,
    ],
    "theme"             => [
    "color"             => "#F37254"
    ],
    "order_id"          => $razorpayOrderId,
];

if ($displayCurrency !== 'INR')
{
    $data['display_currency']  = $displayCurrency;
    $data['display_amount']    = $displayAmount;
}

$json = json_encode($data);
?>


<!-- <button id="rzp-button1">Pay with Razorpay</button> -->
<script src="https://checkout.razorpay.com/v1/checkout.js"></script>
<form name='razorpayform' action="verify.php" method="POST">
    <input type="hidden" name="razorpay_payment_id" id="razorpay_payment_id">
    <input type="hidden" name="razorpay_signature"  id="razorpay_signature" >
</form>
<script>
// Checkout details as a json
var options = <?php echo $json?>;

/**
 * The entire list of Checkout fields is available at
 * https://docs.razorpay.com/docs/checkout-form#checkout-fields
 */
options.handler = function (response){
    document.getElementById('razorpay_payment_id').value = response.razorpay_payment_id;
    document.getElementById('razorpay_signature').value = response.razorpay_signature;
    document.razorpayform.submit();
};

// Boolean whether to show image inside a white frame. (default: true)
options.theme.image_padding = false;

options.modal = {
    ondismiss: function() {
        console.log("This code runs when the popup is closed");
    },
    // Boolean indicating whether pressing escape key 
    // should close the checkout form. (default: true)
    escape: true,
    // Boolean indicating whether clicking translucent blank
    // space outside checkout form should close the form. (default: false)
    backdropclose: false
};

var rzp = new Razorpay(options);
rzp.open();
// document.getElementById('rzp-button1').onclick = function(e){
    
//     e.preventDefault();
// }
</script>