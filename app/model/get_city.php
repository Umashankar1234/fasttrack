<?php
include("config.php");
//fetch.php;

$data = array();

if(isset($_GET["query"]))
{
 $query = "SELECT  airport_name FROM tb_airport WHERE airport_name LIKE '".$_GET["query"]."%' ORDER BY airport_name ASC LIMIT 6";
 $statement = $pdocon->prepare($query);
 $statement->execute();

 while($row = $statement->fetch(PDO::FETCH_ASSOC))
 {
  $data[] = $row["airport_name"];
 }
}

echo json_encode($data);

?>
