// AJAX call for autocomplete 
$(document).ready(function() {
	$("#flyingFrom").keyup(function() {
		$.ajax({
			type: "POST",
			url: "readCountry.php",
			data: 'keyword=' + $(this).val(),
			beforeSend: function() {
				$("#flyingFrom").css("background", "#FFF url(LoaderIcon.gif) no-repeat 165px");
			},
			success: function(data) {
				$("#suggesstion-box").show();
				$("#suggesstion-box").html(data);
				$("#flyingFrom").css("background", "#FFF");
			}
		});
	});
});
//To select a country name
function selectCountry(val) {
	$("#flyingFrom").val(val);
	$("#suggesstion-box").hide();
}