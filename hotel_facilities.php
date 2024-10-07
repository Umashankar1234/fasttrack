<?php
// $curl = curl_init();

// curl_setopt_array($curl, [
// 	CURLOPT_URL => "https://booking-com.p.rapidapi.com/v1/hotels/facilities?hotel_id=12537121&locale=en-us",
// 	CURLOPT_RETURNTRANSFER => true,
// 	CURLOPT_ENCODING => "",
// 	CURLOPT_MAXREDIRS => 10,
// 	CURLOPT_TIMEOUT => 30,
// 	CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
// 	CURLOPT_CUSTOMREQUEST => "GET",
// 	CURLOPT_HTTPHEADER => [
// 		"x-rapidapi-host: booking-com.p.rapidapi.com",
// 		"x-rapidapi-key: 88fd5b4aecmsh134935a8622c85bp1a6054jsn0ac77dc37163"
// 	],
// ]);

// $response = curl_exec($curl);
// $err = curl_error($curl);

// curl_close($curl);

// if ($err) {
// 	echo "cURL Error #:" . $err;
// } else {
// 	echo $response;
// }

$json = file_get_contents('datafacility.json'); 
$json_data = json_decode($json, true); 
// print_r($json_data);
// echo $json_data["data"]["aggregation"]["airlines"][0];
$count = 0;
// $json_data["result"][0]["hotel_name"];
foreach($json_data as $key => $value)
{
    
     if(is_array($value))
        {
            
            echo $value["facility_name"]."<hr>";
    //     if($key =='result')
    //     {
    //         foreach($value as $key2 => $value2)
    //         {
    //             // $key2 . ":".$value2."<hr>";
    //             if(is_array($value2))
    //             {
    //                 foreach($value2 as $key3 => $value3)
    //                 {
    //                     // $key3 . ":".$value3."<hr>";
                        
    //                     if($key3=='hotel_name')
    //                     {
    //                          $value3."<hr>";
    //                     }
                      
                        
    //                 }
    //                 echo $value2["hotel_name"]."<hr>";
                     
    //             }
    //         }
    //     }
    }

}

?>