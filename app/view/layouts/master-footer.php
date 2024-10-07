</section>
<!--CONTENT AREA END-->
<script type="text/javascript" src="<?php echo $projectPath;?>public/js/admin_js/jquery.js"></script>
<script src="<?php echo $projectPath;?>public/js/admin_js/jquery.min.js" type="text/javascript"></script>
<script src="<?php echo $projectPath;?>public/js/admin_js/getajax.js?kadambini=<?php echo rand();?>" type="text/javascript"></script>
<script src="<?php echo $projectPath;?>public/js/admin_js/jquery-1.10.2.js" type="text/javascript"></script>
<script src="<?php echo $projectPath;?>public/js/admin_js/jquery-ui.js" type="text/javascript"></script>
<script src="<?php echo $projectPath;?>public/js/admin_js/jquery-te-1.4.0.min.js" type="text/javascript"></script>
<script src='<?php echo $projectPath;?>public/js/admin_js/multiple_choose.js' type="text/javascript"></script> 
<script src="<?php echo $projectPath;?>public/js/admin_js/bootstrap-tagsinput.min.js" type="text/javascript"></script> 
<script src="<?php echo $projectPath;?>public/js/admin_js/jquery.simplePagination.js" type="text/javascript"></script> 
<!--drop submenu-->

<script>
var project_path="https://kadambini.org/webservice/";
$(document).ready(function()
{
	$('.menu_toggle_icon').click (function() {	
      $('.hmslt_area').toggleClass("dasmenu_close");	  
	  $('.hmso_area').toggleClass("menuoff");
  	  $('.menu_toggle_icon').toggleClass("active");
    });
  
	//drop menu sidebar
	 
    $("ul.hmsmenu_area li:has(ul)").addClass('hassub');	  	
	$("ul.hmsmenu_area li:has(ul)").append( '<span class="drop_icon"></span>'); 	 	
	$("ul.hmsmenu_area .drop_icon" ).click(function(){       
        $(this).toggleClass("act").prev().slideToggle("fast");
        return false;   }); 	
			
	//category drop menu	   
   $(".cat_list_area ul > li:has(.sub_child_area)").append( '<span class="drop_icon"></span>');   
    $(".cat_list_area .drop_icon" ).click(function(){       
        $(this).toggleClass("act").prev().slideToggle("fast");
       return false;   }); 
		
	//multiple file upload

  if (window.File && window.FileList && window.FileReader) {
    $("#files").on("change", function(e)
	{
		var prdpics = $('#files')[0].files[0];
		var geekss = e.target.files[0].name; 
		var files = e.target.files,
		filesLength = files.length;
		for (var i = 0; i < filesLength; i++) {
		var f = files[i];
		var fileReader = new FileReader();
		fileReader.onload = (function(e) {
		  var file = e.target;
		  //$("<div class=\"piprpx\"><div class=\"phoxyd\">" +
			//"<img class=\"imageThumb\" src=\"" + e.target.result + "\" title=\"" + file.name + "\"/>" +
			//"<span class=\"remocve\" onclick=\"removeimg('" + geekss + "');\">Remove image</span>" +
			//"</div></div>").insertAfter("#files");
		  $(".remocve").click(function(){
			$(this).parent(".phoxyd").remove();
		  });
		});
		fileReader.readAsDataURL(f);
		}
		console.log(files);

		var fd = new FormData();
		fd.append('prdimage',prdpics);
		$.ajax({
		url: project_path+"add_temp_prdgalary.php",
		type: 'POST',
		data: fd,
		contentType: false,
		processData: false,	
		success: function(msg)
		{
			if(msg == 1)
			{	
				var sl='';
				$.ajax({
				type:"POST",
				dataType:"JSON",
				crossDomain: true,
				cache: false,
				url: project_path+"slttempgalary.php",		
				ContentType:"application/json",	
				success: function(responsee){				
				$.each(responsee.tpimg, function() 
				{		
					sl+='<div class="piprpx"><div class="phoxyd"><img class="imageThumb" src="../public/images/temp_prd_image/'+ this.pimage+'"title="'+this.pimage+'"/><span class="remocve" onclick="removeimg('+"'"+this.tid+"'"+','+"'"+this.pimage+"'"+');">Remove image</span></div></div>';
				});	
				$("#mulimg").html(sl);
				},
				error: function(err){
					alert('Check your internet connection!');
				}
				});	
			}
		},
		error: function(err)
		{
			alert(err);
			//alert('Check your internet connection!');
		}
		});

    });
  } else {
    alert("Your browser doesn't support to File API")
  }

	//comma separator start
	$('.moretagx').tagsinput({
		
		trimValue: true,
		confirmKeys: [44],
		//13 for enter key, 44 for comma, 32 for space 
		focusClass: 'my-focus-class'
	});
	
	$('.bootstrap-tagsinput input').on('focus', function() {
		$(this).closest('.bootstrap-tagsinput').addClass('has-focus');
	}).on('blur', function() {
		$(this).closest('.bootstrap-tagsinput').removeClass('has-focus');
	});
	

//mobile menu
	$(".main_menu_outer").hide(); 
	$(".menu_toggle_mob").click(function(){$(".main_menu_outer").slideToggle().toggleClass("activi");$(".menu_toggle_mob").toggleClass("active"); return false; });
	
	
//on click on off		
$('.lblonof').click (function() {	
      $('.lblonof').toggleClass("off");
    });
	
//tab		
$('ul.tabs li').click(function(){
	var tab_id = $(this).attr('data-tab');

	$('ul.tabs li').removeClass('current');
	$('.tab-content').removeClass('current');

	$(this).addClass('current');
	$("#"+tab_id).addClass('current');
})
$('.ppmenu').click (function() {	
      $('.submenu').toggleClass("open");	  
	  $('.profa').toggleClass("pactive");
  	  
    });
$('.sapp').click (function() {	
      $('.msarea_res').toggleClass("open");	  
	  $('.sapp').toggleClass("sactive");
  	  
    });	
$('.actbtn').click (function() {	
      $('.actbtn').toggleClass("open");	  
    });
$('.chphoto').click (function() {	
      $('.ppbtwo').toggleClass("open");	
    });
}); 
</script>
  
  
<script>  
  $('.multi-field-wrapper').each(function() {
    var $wrapper = $('.multi-fields', this);
    $(".add-field", $(this)).click(function(e) {
        $('.multi-field:first-child', $wrapper).clone(true).appendTo($wrapper);
    });
    $('.multi-field .remove-field', $wrapper).click(function() {
        if ($('.multi-field', $wrapper).length > 1)
            $(this).parent('.multi-field').remove();
    });
});
</script>
<script>    
    document.getElementById('output').innerHTML = location.search;
$(".chosen-select").chosen();
</script>
<!--add new field-->
<script>
$(function ()
{
    $("#btnAddq").bind("click", function () {
        var div = $("<tr class='xxadqlist'>");
        div.html(GetDynamicTextBox2(""));
        $("#TextBoxContainer2").append(div);
    });
    $("body").on("click", ".ccx", function () {

        $(this).closest("tr").remove();
    });
});
function GetDynamicTextBox2(value) {
return '<td class="purp"><div class="uid_box education ksp"><h4>Option</h4><input name = "sdferx" type="text" value = "' + value + '"class="field_style" /></div></td>'	
	+ '<td class="amt"><div class="uid_box education"><h4 class="closx">Option</h4><input type="text" name="DynamicTextBox" class="field_style moretagx" placeholder=" Separate options with a comma" /><button type="button" class="ccx">Remove</button></div></td>'
	}
</script>
<!--check box checked show hide-->
<script>
$(function () {
	$(".chkVariant").click(function () {
		if ($(this).is(":checked")) {
			$(".moroph").show();
			$(".novarnt").hide();
			
		} else {
			$(".moroph").hide();
			$(".novarnt").show();

		}
	});
});
</script>  
<!--.chkVariantnone-->  
<script>
$(function () {
	$(".chkVariantnone").click(function () {
		if ($(this).is(":checked")) {
			$(".moroph").hide();
			$(".novarnt").show();
			
		} else {
			$(".moroph").show();
			$(".novarnt").hide();
		   
		}
	});
});
</script>  
<!--add tag by comma separator-->


<script>
window.setTimeout(function() {
    $(".alert").fadeTo(500, 0).slideUp(500, function(){
        $(this).remove(); 
    });
}, 4000);
</script>
<!--doctor list click menu-->
<script>
$('.jqte-test').jqte();
</script>
<script>
jQuery(document).ready(function (e) {
    e(".actanc").click(function () {
		
        var t = e(this).parents(".actpop").children(".doctlac_area").is(":hidden");
		
        e(".actpop .doctlac_area").hide();
		
        e(".actpop .actanc").removeClass("active");
        if (t) {
            e(this).parents(".actpop").children(".doctlac_area").toggle().parents(".actpop").children(".actanc").addClass("active")
        }
    });
	
    e(document).bind("click", function (t) {
        var n = e(t.target);
        if (!n.parents().hasClass("actpop")) e(".actpop .doctlac_area").hide();
    });
	
    e(document).bind("click", function (t) {
        var n = e(t.target);
        if (!n.parents().hasClass("actpop")) e(".actpop .actanc").removeClass("active");
    })


	var sl='';
	$.ajax({
	type:"POST",
	dataType:"JSON",
	crossDomain: true,
	cache: false,
	url: project_path+"slttempgalary.php",		
	ContentType:"application/json",	
	success: function(responsee){
	//alert(JSON.stringify(responsee));	
	$.each(responsee.tpimg, function() 
	{		
		sl+='<div class="piprpx"><div class="phoxyd"><img class="imageThumb" src="../public/images/temp_prd_image/'+ this.pimage+'"title="'+this.pimage+'"/><span class="remocve" onclick="removeimg('+"'"+this.tid+"'"+','+"'"+this.pimage+"'"+');">Remove image</span></div></div>';
	});	
	$("#mulimg").html(sl);
	},
	error: function(err){
		alert('Check your internet connection!');
	}
	});
});
</script>
<!--LEFT MENU JS-->
<script>
  $(function() {
    $( ".accordion" ).accordion({heightStyle: "content", collapsible: true, active: false, animate: {
        duration: 500
    }});
  });
</script>
<script>
 function readURL(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();

		reader.onload = function (e) {
			$('#blah')
				.attr('src', e.target.result)
				.width(150)
			   ;
			   $(".ppbtwo").addClass("activi");
		};

		reader.readAsDataURL(input.files[0]);
	}
}
</script>
<!--featured image js-->
<script>
var _PREVIEW_URL;
/* Show Select File dialog */
document.querySelector("#upload-dialog3").addEventListener('click', function() {
    document.querySelector("#image-file2").click();
});

/* Selected File has changed */
document.querySelector("#image-file2").addEventListener('change', function() {
    // user selected file
    var file = this.files[0];

    // allowed MIME types
    var mime_types = [ 'image/jpeg', 'image/png' ];
    
    // validate MIME
    if(mime_types.indexOf(file.type) == -1) {
        alert('Error : Incorrect file type');
        return;
    }
    // hide upload dialog button
    document.querySelector("#upload-dialog3").style.display = 'none';
    
    // set name of the file
    document.querySelector("#image-name2").innerText = file.name;
    document.querySelector("#image-name2").style.display = 'inline-block';

    // local url
    _PREVIEW_URL = URL.createObjectURL(file);

    // set src of image and show
    document.querySelector("#preview-image2").setAttribute('src', _PREVIEW_URL);
    document.querySelector("#preview-image2").style.display = 'inline-block';

    
    // show cancel and upload buttons now
    document.querySelector("#cancel-image2").style.display = 'inline-block';
    document.querySelector("#upload-button3").style.display = 'inline-block';
});

/* Reset file input */
document.querySelector("#cancel-image2").addEventListener('click', function() {
    // destroy previous local url
    URL.revokeObjectURL(_PREVIEW_URL);

    // show upload dialog button
    document.querySelector("#upload-dialog3").style.display = 'inline-block';

    // reset to no selection
    document.querySelector("#image-file2").value = '';

    // hide elements that are not required
    document.querySelector("#image-name2").style.display = 'none';
    document.querySelector("#preview-image2").style.display = 'none';
    document.querySelector("#cancel-image2").style.display = 'none';
    document.querySelector("#upload-button3").style.display = 'none';
});

/* Upload file to server */
document.querySelector("#upload-button3").addEventListener('click', function() {
    // AJAX request to server
    alert('This will upload file to server');
});
</script>
<!--featured image js end-->
<script>
$(document).ready(function()
{
	console.clear();
});
</script>
</body>
</html>