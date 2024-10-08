<?php
include("apps/control/config.php");

// Include FPDF library
require('./assets/vendors/fpdf186/fpdf.php');

// Get the booking ID from the URL parameter
if (isset($_GET['id']) && is_numeric($_GET['id'])) {
    $id = intval($_GET['id']); // Sanitize the ID
} else {
    die('Invalid ID');
}

// Fetch the hotel booking details from the database for the given ID
$sql = "SELECT * FROM `tb_hotelbooking` WHERE `hbooking_id` = $id";
$res_data = mysqli_query($con, $sql);

if (!$res_data) {
    echo "Error: " . mysqli_error($con);
    exit;
}

$data = mysqli_fetch_assoc($res_data);

if (!$data) {
    die('No hotel booking found with the given ID.');
}

// Create instance of FPDF
$pdf = new FPDF();
$pdf->AddPage();

// Set font
$pdf->SetFont('Arial', 'B', 16);

// Invoice title
$pdf->Cell(190, 10, 'HOTEL BOOKING INVOICE', 0, 1, 'C');

// Line break
$pdf->Ln(10);

// Add Hotel Booking Information
$pdf->SetFont('Arial', '', 12);
$pdf->Cell(100, 10, 'Hotel Name: ' . $data['hotel_name']);
$pdf->Ln();
$pdf->Cell(100, 10, 'Hotel Address: ' . $data['hotel_address']);
$pdf->Ln();
$pdf->Cell(100, 10, 'Guest Name: ' . $data['guest_name']);
$pdf->Ln();
$pdf->Cell(100, 10, 'Email: ' . $data['email']);
$pdf->Ln();
$pdf->Cell(100, 10, 'Phone: ' . $data['phone']);
$pdf->Ln();
$pdf->Cell(100, 10, 'Guest Address: ' . $data['address']);
$pdf->Ln();
$pdf->Cell(100, 10, 'Booking Date: ' . $data['date']);
$pdf->Ln(10);

// Add Payment Information
$pdf->Cell(100, 10, 'Total Amount: Rs. ' . number_format($data['gtotal'], 2));
$pdf->Ln();
$pdf->Cell(100, 10, 'Receipt No: ' . $data['receiptno']);
$pdf->Ln();
$pdf->Cell(100, 10, 'Payment Status: ' . $data['status']);
$pdf->Ln();
$pdf->Cell(100, 10, 'Razorpay ID: ' . $data['razorpay_id']);
$pdf->Ln(10);

// Line break
$pdf->Ln(10);

// Footer
$pdf->SetFont('Arial', 'I', 10);
$pdf->Cell(190, 10, 'Thank you for booking with us!', 0, 1, 'C');

// Output the PDF
$pdf->Output('I', 'hotel_invoice_' . $data['hbooking_id'] . '.pdf');
?>
