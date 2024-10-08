<?php
include("apps/control/config.php");

// Include FPDF library
require('./assets/vendors/fpdf186/fpdf.php');

// Get the ID from the URL parameter
if (isset($_GET['id'])) {
    $id = intval($_GET['id']); // Sanitize the ID
} else {
    die('Invalid ID');
}

// Fetch the booking details from the database for the given ID
$sql = "SELECT * FROM `tb_cab_bookings` WHERE `id` = $id";
$res_data = mysqli_query($con, $sql);

if (!$res_data) {
    echo "Error: " . mysqli_error($con);
    exit;
}

$data = mysqli_fetch_assoc($res_data);

if (!$data) {
    die('No booking found with the given ID.');
}

// Create instance of FPDF
$pdf = new FPDF();
$pdf->AddPage();

// Set font
$pdf->SetFont('Arial', 'B', 16);

// Invoice title
$pdf->Cell(190, 10, 'INVOICE', 0, 1, 'C');

// Line break
$pdf->Ln(10);

// Add Customer Information
$pdf->SetFont('Arial', '', 12);
$pdf->Cell(100, 10, 'Customer Name: ' . $data['firstName'] . ' ' . $data['lastName']);
$pdf->Ln();
$pdf->Cell(100, 10, 'Email: ' . $data['email']);
$pdf->Ln();
$pdf->Cell(100, 10, 'Phone: ' . $data['phone']);
$pdf->Ln();
$pdf->Cell(100, 10, 'Pickup Location: ' . $data['bookingPlace']);
$pdf->Ln();
$pdf->Cell(100, 10, 'Destination: ' . $data['destination']);
$pdf->Ln();
$pdf->Cell(100, 10, 'Pickup Date: ' . $data['pickupDate']);
$pdf->Ln();
$pdf->Cell(100, 10, 'Pickup Time: ' . $data['pickupTime']);
$pdf->Ln(10);

// Trip Information
$pdf->Cell(100, 10, 'Trip Info: ' . $data['tripInfo']);
$pdf->Ln(10);

// Add Payment Information
$pdf->Cell(100, 10, 'Payment Status: ' . $data['paymentStatus']);
$pdf->Ln();
$pdf->Cell(100, 10, 'Razorpay ID: ' . $data['razorpayId']);
$pdf->Ln(10);

// Amount and Invoice Date
$pdf->SetFont('Arial', 'B', 12);
$pdf->Cell(100, 10, 'Amount: Rs. ' . number_format($data['amount'], 2));
$pdf->Ln();
$pdf->Cell(100, 10, 'Invoice Date: ' . $data['createdAt']);
$pdf->Ln();

// Line break
$pdf->Ln(10);

// Footer
$pdf->SetFont('Arial', 'I', 10);
$pdf->Cell(190, 10, 'Thank you for booking with us!', 0, 1, 'C');

// Output the PDF
$pdf->Output('I', 'invoice_' . $data['hbooking_id'] . '.pdf');
?>
