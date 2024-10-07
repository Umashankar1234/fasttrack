<?php
include("config.php");
//fetch.php;

if(isset($_POST["query2"]))  
 {  
      $output2 = '';  
      $query2 = "SELECT airport_name,code FROM tb_airport WHERE airport_name LIKE '%".$_POST["query2"]."%' ORDER BY airport_name ASC LIMIT 6";  
      $result2 = mysqli_query($con, $query2);  
      $output2 = '<ul class="list-unstyled2">';  
        
           while($row = mysqli_fetch_array($result2))  
           {  
                $output2 .= '<li class="fn2">'.$row["airport_name"].'</li>';  
           }  
      
      $output2 .= '</ul>';  
      echo $output2;  
 }
 




?>
