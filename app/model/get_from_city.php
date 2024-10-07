<?php
include("config.php");
//fetch.php;

if(isset($_POST["query"]))  
 {  
      $output = '';  
      $query = "SELECT airport_name,code FROM tb_airport WHERE airport_name LIKE '%".$_POST["query"]."%' ORDER BY airport_name ASC LIMIT 6";  
      $result = mysqli_query($con, $query);  
      $output = '<ul class="list-unstyled">';  
        
           while($row = mysqli_fetch_array($result))  
           {  
                $output .= '<li class="fn1">'.$row["airport_name"].'</li>';  
           }  
      
      $output .= '</ul>';  
      echo $output;  
 }
 



?>
