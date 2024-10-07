<?php
echo "hi";

$curl = curl_init();

curl_setopt_array($curl, [
	CURLOPT_URL => "https://booking-com15.p.rapidapi.com/api/v1/flights/searchFlights?fromId=BOM.AIRPORT&toId=DEL.AIRPORT&departDate=2024-09-11&pageNo=1&adults=1&children=0%2C17&sort=BEST&cabinClass=ECONOMY&currency_code=INR",
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

 echo $json5 = $response; 
 $json_data5 = json_decode($json5, true); 

foreach($json_data5 as $flightkey => $flightvalue)
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
              
            if($detailstkey3=='segments')
            {
                foreach($detailstvalue3 as $detailstkey4 => $detailstvalue4)
                {
                    if($detailstkey4=='segments')
                    {
                        foreach($detailstvalue4 as $detailstkey5 => $detailstvalue5)
                        {
                            echo $detailstvalue5['arrivalTime']."<hr>";
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

