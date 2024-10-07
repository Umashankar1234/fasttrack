<?php
$curl = curl_init();

curl_setopt_array($curl, [
	CURLOPT_URL => "https://booking-com.p.rapidapi.com/v1/hotels/search?page_number=0&adults_number=1&room_number=1&include_adjacency=true&units=metric&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1&checkout_date=2024-09-21&dest_id=-2106102&filter_by_currency=INR&dest_type=city&checkin_date=2024-09-16&order_by=popularity&locale=en-us",
	CURLOPT_RETURNTRANSFER => true,
	CURLOPT_ENCODING => "",
	CURLOPT_MAXREDIRS => 10,
	CURLOPT_TIMEOUT => 30,
	CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	CURLOPT_CUSTOMREQUEST => "GET",
	CURLOPT_HTTPHEADER => [
		"x-rapidapi-host: booking-com.p.rapidapi.com",
		"x-rapidapi-key: 88fd5b4aecmsh134935a8622c85bp1a6054jsn0ac77dc37163"
	],
]);

$response = curl_exec($curl);
$err = curl_error($curl);
curl_close($curl);

$json = $response; 
$json_data = json_decode($json, true); 

foreach($json_data as $key => $value)
{
    if(is_array($value))
    {
        if($key =='result')
        {
            foreach($value as $key2 => $value2)
            {

             $gethotelid = $value2['hotel_id'];
            

$curl2 = curl_init();
curl_setopt_array($curl2, [
	CURLOPT_URL => "https://booking-com.p.rapidapi.com/v1/hotels/facilities?hotel_id=$gethotelid&locale=en-us",
	CURLOPT_RETURNTRANSFER => true,
	CURLOPT_ENCODING => "",
	CURLOPT_MAXREDIRS => 10,
	CURLOPT_TIMEOUT => 30,
	CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	CURLOPT_CUSTOMREQUEST => "GET",
	CURLOPT_HTTPHEADER => [
		"x-rapidapi-host: booking-com.p.rapidapi.com",
		"x-rapidapi-key: 88fd5b4aecmsh134935a8622c85bp1a6054jsn0ac77dc37163"
	],
]);

$response2 = curl_exec($curl2);
$err = curl_error($curl2);
curl_close($curl2);

$json1 = $response2; 
$json_data1 = json_decode($json1, true); 

foreach($json_data1 as $key5 => $value5)
{
     if(is_array($value5))
        {
            
            echo $value5["facility_name"]."<hr>";
        }
}

}
}
}
}
?>