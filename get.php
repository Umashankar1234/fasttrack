<?php


// $curl = curl_init();

// curl_setopt_array($curl, [
// 	CURLOPT_URL => "https://booking-com15.p.rapidapi.com/api/v1/flights/searchFlights?fromId=BOM.AIRPORT&toId=DEL.AIRPORT&departDate=2024-09-01&pageNo=1&adults=1&children=0%2C17&cabinClass=ECONOMY&currency_code=INR",
// 	CURLOPT_RETURNTRANSFER => true,
// 	CURLOPT_ENCODING => "",
// 	CURLOPT_MAXREDIRS => 10,
// 	CURLOPT_TIMEOUT => 30,
// 	CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
// 	CURLOPT_CUSTOMREQUEST => "GET",
// 	CURLOPT_HTTPHEADER => [
// 		"x-rapidapi-host: booking-com15.p.rapidapi.com",
// 		"x-rapidapi-key: 575c179f83msh9046a103985a1b0p1d0bcfjsned59d9117b16"
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

// Read the JSON file
$json = file_get_contents('data.json'); 
// $json = $response; 
// Decode the JSON file
$json_data = json_decode($json, true); 
// print_r($json_data);
// echo $json_data["data"]["aggregation"]["airlines"][0];
$count = 0;
foreach($json_data as $key => $value)
{
    // $key . ":".$value."HR";
    if(is_array($value))
    {
        foreach($value['aggregation'] as $key2 => $value2)
        {
            
            if(is_array($value2))
            {   
                 if($key2 =='airlines') 
                 {
                    $json_data2 = json_encode($value2, true);

                    $array = json_decode($json_data2, true);
                    foreach($array as $item)
                    {  
                       $count++; 
                       echo $flightname = $item['name'];

                    }
                 }
                 if($key2 =='flightTimes') 
                {
                    $json_data2 = json_encode($value2, true);

                    if(is_array($value2))
                    {
                        foreach($value2 as $key3 => $value3)
                        {
                            $array2 = json_encode($value3, true);
                            if(is_array($value3))
                            {
                                
                                    foreach($value3 as $key4 => $arrivals){

                                         if($key4 == 'arrival')
                                         {
                                            foreach($arrivals as $time1){
                                                $time1['start'].' '.$time1['end'].'<br/>';
                                             }
                                         }
                                        
                                         if($key4 == 'departure')
                                         {
                                            foreach($arrivals as $time2){
                                                 $time2['start'].' '.$time2['end'].'<br/>';
                                                 

                                             }
                                         }
                                         
                                     }
                                    
                                     
                            }
                            
                        }
                    } 
                    
                }
            }
        }

    }
}
?>