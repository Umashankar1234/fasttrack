<?php
require_once("../control/dbcontroller.php");
$db_handle = new DBController();

// if (!empty($_GET['brand_id'])) {
//     $state = $_GET["brand_id"];

//     $query = "SELECT * FROM tb_model WHERE brand_id ='$state'";
//     $results = $db_handle->runQuery($query);

//     if (!empty($results)) {
//         echo "<option value=''>-Select-</option>";
//         foreach ($results as $dist) {
//             echo "<option value='{$dist['model_name']}'>{$dist['model_id']}</option>";
//         }
//     } else {
//         echo "<option value=''>-No districts found-</option>";
//     }
// } else {
//     echo "<option value=''>-Select a state-</option>";
//  }
echo "hello";
?>
 
