<script>
    //Pay Amount
    jQuery(document).ready(function($){
 
jQuery('#PayNow').click(function(e){
 
	var paymentOption='';
let billing_name = $('#billing_name').val();
	let billing_mobile = $('#billing_mobile').val();
	let billing_email = $('#billing_email').val();
  var shipping_name = $('#billing_name').val();
	var shipping_mobile = $('#billing_mobile').val();
	var shipping_email = $('#billing_email').val();
var paymentOption= "netbanking";
var payAmount = $('#payAmount').val();
			
var request_url="submitpayment.php";
		var formData = {
			billing_name:billing_name,
			billing_mobile:billing_mobile,
			billing_email:billing_email,
			shipping_name:shipping_name,
			shipping_mobile:shipping_mobile,
			shipping_email:shipping_email,
			paymentOption:paymentOption,
			payAmount:payAmount,
			action:'payOrder'
		}
		
		$.ajax({
			type: 'POST',
			url:request_url,
			data:formData,
			dataType: 'json',
			encode:true,
		}).done(function(data){
		
		if(data.res=='success'){
				var orderID=data.order_number;
				var orderNumber=data.order_number;
				var options = {
    "key": data.razorpay_key, // Enter the Key ID generated from the Dashboard
    "amount": data.userData.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Tutorialswebsite", //your business name
    "description": data.userData.description,
    "image": "https://www.tutorialswebsite.com/wp-content/uploads/2022/02/cropped-logo-tw.png",
    "order_id": data.userData.rpay_order_id, //This is a sample Order ID. Pass 
    "handler": function (response){
 
    window.location.replace("payment-success.php?oid="+orderID+"&rp_payment_id="+response.razorpay_payment_id+"&rp_signature="+response.razorpay_signature);
 
    },
    "modal": {
    "ondismiss": function(){
         window.location.replace("payment-success.php?oid="+orderID);
     }
},
    "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        "name": data.userData.name, //your customer's name
        "email": data.userData.email,
        "contact": data.userData.mobile //Provide the customer's phone number for better conversion rates 
    },
    "notes": {
        "address": "Tutorialswebsite"
    },
    "config": {
    "display": {
      "blocks": {
        "banks": {
          "name": 'Pay using '+paymentOption,
          "instruments": [
           
            {
                "method": paymentOption
            },
            ],
        },
      },
      "sequence": ['block.banks'],
      "preferences": {
        "show_default_blocks": true,
      },
    },
  },
    "theme": {
        "color": "#3399cc"
    }
};
var rzp1 = new Razorpay(options);
rzp1.on('payment.failed', function (response){
 
    window.location.replace("payment-failed.php?oid="+orderID+"&reason="+response.error.description+"&paymentid="+response.error.metadata.payment_id);
 
         });
      rzp1.open();
     e.preventDefault(); 
}
 
});
 });
    });
</script>