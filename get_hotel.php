<?php
//get gotel by destination id and check in checkout date



$getdest_id = '-2106102';
$checkdate = '2024-09-16';
$checkindate = '2024-09-21'; 

$curl = curl_init();

curl_setopt_array($curl, [
CURLOPT_URL => "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels?dest_id=$getdest_id&search_type=CITY&arrival_date=$checkdate&departure_date=$checkindate&adults=1&children_age=0%2C17&room_qty=1&page_number=1&units=metric&temperature_unit=c&languagecode=en-us&currency_code=INR",
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

 $json = $response; 
$json_data = json_decode($json, true); 

foreach($json_data as $key => $value)
{
if(is_array($value))
{
if($key =='data')
{
foreach($value as $key2 => $value2)
{

    if($key2 =='hotels')
    {
        foreach($value2 as $key3 => $value3)
        {
            $gethotelid = '741715';

            foreach($value3 as $key4 => $value4)
            {                 
                if($key4=='property')
                {
                    $value4['checkinDate'];

                     foreach($value4 as $key5 => $value5)
                     {
                        if($key5=='priceBreakdown')
                        {
                            foreach($value5 as $key6 => $value6)
                            {
                                if($key6=='grossPrice')
                                {
                                    $value6['value'];

                                    $curl2 = curl_init();

                                    curl_setopt_array($curl2, [
                                        CURLOPT_URL => "https://booking-com15.p.rapidapi.com/api/v1/hotels/getHotelDetails?hotel_id=$gethotelid&arrival_date=$checkdate&departure_date=$checkindate&adults=1&children_age=0%2C17&room_qty=1&units=metric&temperature_unit=c&languagecode=en-us&currency_code=INR",
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
                                    
                                    $response = curl_exec($curl2);
                                    $err = curl_error($curl2);
                                    curl_close($curl2);

                                    $json2 = $response; 
                                    $json_data2 = json_decode($json2, true); 

                                    foreach($json_data2 as $dkey1 => $dvalue)
                                    {
                                        if(is_array($dvalue))
                                        {
                                            if($dkey1 =='data')
                                            {
                                                foreach($dvalue as $dkey2 => $dvalue2)
                                                {
                                                    if($dkey2=='property_highlight_strip')
                                                    {
                                                        foreach($dvalue2 as $dkey3 => $dvalue3)
                                                        {
                                                            echo $dvalue3['name']."<hr>";
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
            }
        }
    }
}
}
}
}
?>