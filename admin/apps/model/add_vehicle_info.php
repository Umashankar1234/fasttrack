<?php
include("../control/config.php");
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Collecting form data
$title = $_POST['title'];
$brand_id = $_POST['brand_id'];
$model_id = $_POST['model_id'];
$facilities = $_POST['facilities'];
$localtrips1 = $_POST['localtrips1'];
$cost1 = $_POST['cost1'];
$localtrips2 = $_POST['localtrips2'];
$cost2 = $_POST['cost2'];
$localtrips3 = $_POST['localtrips3'];
$cost3 = $_POST['cost3'];
$localtrips4 = $_POST['localtrips4'];
$cost4 = $_POST['cost4'];
$outstation = $_POST['outstation'];
$outstation_cost = $_POST['outstation_cost'];
$description = $_POST['description'];
$notes = $_POST['notes'];
$fuel_type = $_POST['fuel_type']; // New field
$transmission_type = $_POST['transmission_type']; // New field
$seating_capacity = $_POST['seating_capacity']; // New field
$category = $_POST['category']; // New field
$date = date("Y-m-d"); // Using Y-m-d for SQL date format

// Insert query for vehicle details
$sql = "INSERT INTO tb_vehicle (title, brand_id, model_id, facilities, localtrips1, cost1, localtrips2, cost2, localtrips3, cost3, localtrips4, cost4, outstation, outstation_cost, description, notes, fuel_type, transmission_type, seating_capacity,category, date, status) 
        VALUES ('$title', '$brand_id', '$model_id', '$facilities', '$localtrips1', '$cost1', '$localtrips2', '$cost2', '$localtrips3', '$cost3', '$localtrips4', '$cost4', '$outstation', '$outstation_cost', '$description', '$notes', '$fuel_type', '$transmission_type', '$seating_capacity','$category', '$date', 'active')";

// Execute vehicle insert query
if (mysqli_query($con, $sql)) {
    $car_id = mysqli_insert_id($con); // Get the last inserted vehicle ID

    // Handling multiple file uploads
    $target_dir = "../../../public/images/vehicles/";
    $photo_ids = []; // Array to store photo IDs for batch insert

    // Loop through all uploaded files
    foreach ($_FILES['images']['name'] as $key => $name) {
        // Get the file path
        $target_file = $target_dir . basename($_FILES['images']['name'][$key]);
        $uploadOk = 1;
        $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

        // Check if image file is an actual image or fake image
        $check = getimagesize($_FILES['images']['tmp_name'][$key]);
        if ($check === false) {
            echo "File " . $name . " is not an image.<br>";
            $uploadOk = 0;
        }

        // Check file size (optional)
        if ($_FILES['images']['size'][$key] > 5000000) { // Limit to 5MB
            echo "Sorry, your file " . $name . " is too large.<br>";
            $uploadOk = 0;
        }

        // Allow certain file formats
        if (!in_array($imageFileType, ['jpg', 'png', 'jpeg', 'gif'])) {
            echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed for " . $name . ".<br>";
            $uploadOk = 0;
        }

        // Check if $uploadOk is set to 0 by an error
        if ($uploadOk == 0) {
            echo "Sorry, your file " . $name . " was not uploaded.<br>";
            continue; // Skip this file and go to the next one
        } else {
            // Try to upload file
            if (move_uploaded_file($_FILES['images']['tmp_name'][$key], $target_file)) {
                echo "The file " . $name . " has been uploaded successfully.<br>";

                // Get only the filename without the path
                $file_name = basename($_FILES['images']['name'][$key]);

                // Prepare to insert photo info into the database
                $photo_sql = "INSERT INTO tb_vehiclephoto (car_id, brand_id, model_id, car_photo, date, status) 
                              VALUES ('$car_id', '$brand_id', '$model_id', '$file_name', '$date', '1')"; // Save only the filename
                if (!mysqli_query($con, $photo_sql)) {
                    echo "ERROR: Could not execute $photo_sql. " . mysqli_error($con) . "<br>";
                }
            } else {
                // Provide error information
                echo "Sorry, there was an error uploading the file " . $name . ".<br>";
                echo "Temporary file: " . $_FILES['images']['tmp_name'][$key] . "<br>";
                echo "Target file: " . $target_file . "<br>";
            }
        }
    }
    echo "<script> alert('Vehicle added successfully with photos');
    window.location.href='../../add_vehicle';</script>";
} else {
    echo "ERROR: Could not execute $sql. " . mysqli_error($con);
}

// Close the connection
mysqli_close($con);
?>
