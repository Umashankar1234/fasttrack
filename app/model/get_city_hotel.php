<?php
include("config.php");
//fetch.php;

if(isset($_POST["query3"]))  
 {  
      $output = '';  
      $query = "SELECT * from tb_city c inner join tb_district d on c.district=d.dist_id inner join tb_state s on s.stateid=d.state_id WHERE city_name LIKE '%".$_POST["query3"]."%' ORDER BY city_name ASC LIMIT 10";  
      $result = mysqli_query($con, $query);  
      $output = '<ul class="list-unstyled">';  
        
           while($row = mysqli_fetch_array($result))  
           {  
                $output .= '<li class="fn1">'.$row["city_name"].'</li>';  
           }  
      
      $output .= '</ul>';  
      echo $output;  
 }
 



?>
