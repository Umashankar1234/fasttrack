<?php
 
$getfrmflightcode = 'BOM';
$gettoflightcode = 'DEL';
$checkdate = date('Y-m-d');
    $departdate = date('Y-m-d', strtotime($checkdate. ' + 10 days'));
    $returningdate = date('Y-m-d', strtotime($checkdate. ' + 15 days'));

    $curl = curl_init();

curl_setopt_array($curl, [
	CURLOPT_URL => "https://booking-com15.p.rapidapi.com/api/v1/flights/searchFlights?fromId=$getfrmflightcode.AIRPORT&toId=$gettoflightcode.AIRPORT&departDate=$departdate&returnDate=$returningdate&pageNo=1&adults=1&children=0%2C17&sort=BEST&cabinClass=ECONOMY&currency_code=INR",
	CURLOPT_RETURNTRANSFER => true,
	CURLOPT_ENCODING => "",
	CURLOPT_MAXREDIRS => 10,
	CURLOPT_TIMEOUT => 30,
	CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	CURLOPT_CUSTOMREQUEST => "GET",
	CURLOPT_HTTPHEADER => [
		"x-rapidapi-host: booking-com15.p.rapidapi.com",
		"x-rapidapi-key: 88fd5b4aecmsh134935a8622c85bp1a6054jsn0ac77dc37163"
	],
]);

$response = curl_exec($curl);
$err = curl_error($curl);
curl_close($curl);
 
$json4 = $response; 
$json_data4 = json_decode($json4, true); 
foreach($json_data4 as $flightkey => $flightvalue)
                                {
                                if(is_array($flightvalue))
                                {
                                if($flightkey =='data')
                                {
                                foreach($flightvalue as $flightkey2 => $flightvalue2)
                                {
                                    if($flightkey2=='flightOffers')
                                    {
                                        foreach($flightvalue2 as $detailstkey3 => $detailstvalue3)
                                        {
                                             
                                              foreach($detailstvalue3 as $detailstkey4 => $detailstvalue4)
                                                {
                                                    if($detailstkey4=='segments')  {    
                                                         
                                                        
                                                        foreach($detailstvalue4 as $detailstkey5 => $detailstvalue5)
                                                        {
                                                            if($detailstkey5=='segments') 
                                                            {
                                                                
                                                                echo $detailstvalue5['arrivalTime']."<hr>";
                                                                
                                                                 
                                                            }
                                                             
                                                        }
                                                    }
                                                    }
                                                }
                                            
                                        }
                                    }
                                    if($flightkey2=='aggregation')
                                    {
                                        foreach($flightvalue2 as $flightkey3 => $flightvalue3)
                                        {
                                            if($flightkey3 =='airlines') 
                                            {
                                                foreach($flightvalue3 as $flightkey4 => $flightvalue4)
                                                {
                                                    $flightname = $flightvalue4['name'];
                                                    $flightlogo = $flightvalue4['logoUrl'];
                                                      $flightcode = $flightvalue4['iataCode'];
                                                      $count = $flightvalue4['count'];

        
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                                }
                                  
                

?>

