function numbersonly(e)
{
	var unicode=e.charCode? e.charCode : e.keyCode 
	if (unicode!=8){ //if the key isn't the backspace key (which we should allow)
		if (unicode<48||unicode>57  ) //if not a number  
		return false //disable key press    fetchdeliverycharges
	}
}

$(document).ready(function()
{
	console.clear();
});
function IsEmail(emailid)
{
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!regex.test(emailid))
    {
       return false;
    }else{
       return true;
    }
}

var project_path="https://kadambini.org/webservice/";
var base_path="https://kadambini.org/";

function removeimg(imgid,imgpc)
{
    var pcdd = '';
    var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName, i;
   
    for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');
   
    if (sParameterName[0] === sParam) {
    return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    }
    }
    return false;
    };

	if(pcdd === false)
	{
       pcdd = '';
	}
	else
	{
	   pcdd = getUrlParameter('pcd');
	}
	
	$.ajax({
		type:"POST",
		dataType:"JSON",
		crossDomain: true,
		cache: false,
		url: project_path+"deletetempgall.php",
		data: {imid:imgid,imgg:imgpc,pcd:pcdd},	
		ContentType:"application/json",	
		beforeSend: function()
		{
			$("#lodr").show();
			$("#lodr_layr").show();
		},
		success: function(responsee){
			if(responsee=="1")
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
    				error: function(err)
    				{
    					//alert('Check your internet connection!');
    				}
				});
			}
			loadproductdetail();
			$("#lodr").hide();
			$("#lodr_layr").hide();
			window.location.reload();
		},
		error: function(err){
			//alert('Check your internet connection!');
		}
	});
}

function addproduct()
{
    var pcodd = '';
    var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;
   
    for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');
   
    if (sParameterName[0] === sParam) {
		return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
		}
    }
    return false;
    };

	if(pcodd === false)
	{
        pcodd = '';
	}
	else
	{
	    pcodd = getUrlParameter('pcd');
	}
	var error = 0;
	var checkedValue = $('#actprd').val();
	var cat_id = $("#cat_id").val();
	var pname = $('#pname').val();
	var book_type = $('#book_type').val();
	var writer = $('#writer').val();
	var hidemagazine = $('#hidemagazine').val();
	var hidemagazinegist = $('#hidemagazinegist').val();
	
	var edition_year = $('#edition_year').val();
	var edition_month = $('#edition_month').val();
	var product_shortdesc = CKEDITOR.instances['product_shortdesc'].getData();
	var product_fulldesc = CKEDITOR.instances['product_fulldesc'].getData();
	var imgVal = $('#dfimg').val();
	var magazine = $('#magazine')[0].files[0];
	var gist_magazine = $('#gist_magazine')[0].files[0];
	var book_url = $('#book_url').val();

	var fd = new FormData();
	fd.append('actprd',checkedValue);
	fd.append('catid',cat_id);
	fd.append('booktype',book_type);
	fd.append('writr',writer);
	fd.append('prdname',pname);
	fd.append('editionyear',edition_year);
	fd.append('editionmonth',edition_month);
	fd.append('productshortdesc',product_shortdesc);
	fd.append('productfulldesc',product_fulldesc);
	fd.append('magazin',magazine);
	fd.append('gistmagazine',gist_magazine);
	fd.append('pcdd',pcodd);
	fd.append('hidmagazin',hidemagazine);
	fd.append('hidemagazinegist',hidemagazinegist);
	fd.append('bookurl',book_url);
	
    if(pname =="")
	{
		error += 1;
		$("#pname").css("border", "1px solid red");
		$('#pname').val('');
	}
	else
	{
		$("#pname").css("border", "1px solid #8c9196");
	}
	if(cat_id == '')
	{
		error += 1;
		$("#cat_id").css("border", "1px solid red");
	}
	else
	{
		$("#cat_id").css("border", "1px solid #8c9196");
	}
	if(cat_id ==1)
	{
		if(book_type == '')
		{
			error += 1;
			$("#book_type").css("border", "1px solid red");
		}
		else
		{
			$("#book_type").css("border", "1px solid #8c9196");
		}
		if(writer == '')
		{
			error += 1;
			$("#writer").css("border", "1px solid red");
		}
		else
		{
			$("#writer").css("border", "1px solid #8c9196");
		}
		if(book_url == '')
		{
			error += 1;
			$("#book_url").css("border", "1px solid red");
		}
		else
		{
			$("#book_url").css("border", "1px solid #8c9196");
		}
	}
	else
	{
		if(edition_year == '')
		{
			error += 1;
			$("#edition_year").css("border", "1px solid red");
		}
		else
		{
			$("#edition_year").css("border", "1px solid #8c9196");
		}
		if(edition_month == '')
		{
			error += 1;
			$("#edition_month").css("border", "1px solid red");
		}
		else
		{
			$("#edition_month").css("border", "1px solid #8c9196");
		}
	}
    if(imgVal == "")
	{
		error += 1;
		$(".lbladmp").css("border", "1px dashed red");
	}
	else
	{
		$(".lbladmp").css("border", "1px dashed #8c9196");
	}
	if(error > 0)
	{
	  return false;	
	}
	$.ajax({
		type: "POST",
		data: fd,
		contentType: false,
		processData: false,
		url: project_path+"add-product.php",
		beforeSend: function()
		{
			$("#lodr").show();
			$("#lodr_layr").show();
		},
		success: function(msg)
		{
			if(msg == 1)
			{
				window.location.href="kadambini-products";		
			}
		},
		error: function(err)
		{
			alert(err);
			//alert('Check your internet connection!');
		}
	});
}

function loadproduct(perPageCount, pageNumber)
{
    $('#hidepageNumber').val(pageNumber);
	var prdlst='';
	var prd_nam = $('#prd_nam').val();
	var fltr_sts = $('#fltr_sts').val();
    var catid = $('#catid').val();
    var mgg='';
	$.ajax({
		type:"POST",
		dataType:"JSON",
		crossDomain: true,
		cache: false,
		url: project_path+"sltproductlist.php",
		data:{prdnam:prd_nam, fltrsts:fltr_sts, pageNumberr:pageNumber, ctid:catid},	
		ContentType:"application/json",
		beforeSend: function()
		{
			$("#lodr").show();
			$("#lodr_layr").show();
		},
		success: function(response)
		{
			$.each(response.prdctlst, function()
			{
				if(this.nodt !=0)
				{
					if(this.prdimage !='')
					{
						mgg = this.prdimage;
					}
					else
					{
						mgg = 'nomig.jpg';
					}
					
					if(this.catid !=1)
					{
						if(this.ispopular ==1)
						{
							var ispolar='<a class="viewic edit" onclick="ispopular('+"'"+this.prid+"'"+','+"'"+0+"'"+');" href="javascript:void(0);"> <img src="../public/images/das_icons/cancel.png" alt="Remove From Popular" title="Remove From Popular"></a>';
						}else{
							var ispolar='<a class="viewic edit" onclick="ispopular('+"'"+this.prid+"'"+','+"'"+1+"'"+');" href="javascript:void(0);"> <img src="../public/images/das_icons/addnew.png" alt="Add In Popular" title="Add In Popular"></a>';
						}
					}
					else
					{
						var ispolar='';
					}
					if(this.vrnt != '0')
					{
						if(this.sts ==1)
						{
							prdlst +='<tr><td>'+this.cnt+'</td><td> <p class="nmob"> <span class="">'+this.crtdate+'</span><span class="">'+this.crttime+'</span></p></td><td><div class="mypdx"><div class="figpa"><img src="../public/images/products/'+mgg+'" /></div><p class="nmob"><span>'+this.productname+'</span></p></div></td><td><p class="nmob"><span class="enbls">Enabled</span></p></td><td><div class="cbhs_col act npd"><div class="action"><a class="viewic edit" title="Edit" href="add-kproducts?pcd='+this.prodcode+'"> <img src="../public/images/das_icons/edit_green.png" alt="edit"> </a><a href="addvarients?prdcod='+this.prodcode+'" target="_blank" class="viewic edit" title="More Information"> <img src="../public/images/das_icons/info.png" alt="edit"></a><a class="viewic edit" title="Delete" onclick="return deleteprodt('+"'"+this.prodcode+"'"+');" href="javascript:void(0);"> <img src="../public/images/das_icons/del_red.png" alt="delete"></a>'+ispolar+'</div></div></td></tr>';
						}
						else
						{
							prdlst +='<tr><td>'+this.cnt+'</td><td> <p class="nmob"> <span class="">'+this.crtdate+'</span><span class="">'+this.crttime+'</span></p></td><td><div class="mypdx"><div class="figpa"><img src="../public/images/products/'+mgg+'" /></div><p class="nmob"><span>'+this.productname+'</span></p></div></td><td><p class="nmob"><span class="enbls" style="background:red;">Disabled</span></p></td><td><div class="cbhs_col act npd"><div class="action"><a class="viewic edit" title="Edit" href="add-kproducts?pcd='+this.prodcode+'"> <img src="../public/images/das_icons/edit_green.png" alt="edit"> </a><a href="addvarients?prdcod='+this.prodcode+'" target="_blank" class="viewic edit" title="More Information"> <img src="../public/images/das_icons/info.png" alt="edit"></a><a class="viewic edit" title="Delete" onclick="return deleteprodt('+"'"+this.prodcode+"'"+');" href="javascript:void(0);"> <img src="../public/images/das_icons/del_red.png" alt="ddelete"></a>'+ispolar+'</div></div></td></tr>';
						}
					}
					if(this.vrnt == '0')
					{
						if(this.sts ==1)
						{
							prdlst +='<tr><td>'+this.cnt+'</td><td> <p class="nmob"> <span class="">'+this.crtdate+'</span><span class="">'+this.crttime+'</span></p></td><td><div class="mypdx"><div class="figpa"><img src="../public/images/products/'+mgg+'" /></div><p class="nmob"><span>'+this.productname+'</span></p></div></td><td><p class="nmob"><span class="enbls">Enabled</span></p></td><td><div class="cbhs_col act npd"><div class="action"><a class="viewic edit" title="Edit" href="add-kproducts?pcd='+this.prodcode+'"> <img src="../public/images/das_icons/edit_green.png" alt="edit"> </a><a href="addvarients?prdcod='+this.prodcode+'" target="_blank" class="viewic edit" title="More Information"> <img src="../public/images/das_icons/info.png" alt="edit"></a><a class="viewic edit" title="Delete" onclick="return deleteprodt('+"'"+this.prodcode+"'"+');" href="javascript:void(0);"> <img src="../public/images/das_icons/del_red.png" alt="ddelete"></a>'+ispolar+'</div></div></td></tr>';
						}
						else
						{
							prdlst +='<tr><td>'+this.cnt+'</td><td> <p class="nmob"> <span class="">'+this.crtdate+'</span><span class="">'+this.crttime+'</span></p></td><td><div class="mypdx"><div class="figpa"><img src="../public/images/products/'+mgg+'" /></div><p class="nmob"><span>'+this.productname+'</span></p></div></td><td><p class="nmob"><span class="enbls" style="background:red;">Disabled</span></p></td><td><div class="cbhs_col act npd"><div class="action"><a class="viewic edit" title="Edit" href="add-kproducts?pcd='+this.prodcode+'"> <img src="../public/images/das_icons/edit_green.png" alt="edit"> </a><a href="addvarients?prdcod='+this.prodcode+'" target="_blank" class="viewic edit" title="More Information"> <img src="../public/images/das_icons/info.png" alt="edit"></a><a class="viewic edit" title="Delete" onclick="return deleteprodt('+"'"+this.prodcode+"'"+');" href="javascript:void(0);"> <img src="../public/images/das_icons/del_red.png" alt="ddelete"></a>'+ispolar+'</div></div></td></tr>';
						}
					}
				}
				else
				{
					prdlst +='<tr><td colspan="5" style="color:red;text-align:center;">No Data Found </td></tr>'; 
				}
				$('#hidprdlstid').html(prdlst);
				$('#totprd').html('Total Product : '+this.prdcnt);
				$("#lodr").hide();
				$("#lodr_layr").hide();
			});
		},
		error: function(err){
			//alert('Check your internet connection!');
		}
	});
}

function updtvariant()
{	
	var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,i;
   
    for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');
   
    if (sParameterName[0] === sParam) {
    return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    }
    }
    return false;
    };
	var pcod = getUrlParameter('prdcod');
	var vrnt='';
	var vrnet = $('input[name="varient"]:checked').val();
	var nvrnet = $('input[name="nvarient"]:checked').val();
	if(vrnet !='')
	{
		vrnt = vrnet;
		nvrnet='';
	}
	if(nvrnet !='')
	{
		vrnt = nvrnet;
		vrnt='';
	}
	var fstval = $('#hiddev0').val();
	var opval = $('#optvl0').val();
	var errno = 0;
	if(fstval == '')
	{
		errno += 1;
		$('#hiddev0').css('border', '1px solid red');
	}
	else
	{
		$("#hiddev0").css("border", "");
	}
	if(opval == '')
	{
		errno += 1;
		$('#optvl0').css('border', '1px solid red');
	}
	else
	{
		$("#optvl0").css("border", "");
	}
	if(errno > 0)
	{
		return false;
	}
	else
	{
	$.ajax({
	type: "POST",
	crossDomain: true,
	dataType: "json",
	cache: false,
	url: project_path+"update-variant.php",
	data: {prdcode:pcod, variant:vrnt},	
	success: function(msg)
	{	
		if(msg == "1")
		{
			checkvariant();				
			loadvart(pcod);
		}	
	},
	error: function(err)
	{
		//alert('Check your internet connection!');
	}
	});
	}
}

function checkvariant()
{	
	var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;
   
    for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');
   
    if (sParameterName[0] === sParam) {
    return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    }
    }
    return false;
    };
	var pcod = getUrlParameter('prdcod');
	var error = 0;
	$.ajax({
	type: "POST",
	crossDomain: true,
	dataType: "json",
	cache: false,
	url: project_path+"variantcheck.php",
	data: {prdcode:pcod},
	beforeSend: function()
	{
	  $("#lodr").show();
	  $("#lodr_layr").show();
	},
	success: function(msg)
	{
		if(msg.vrt == '1')
		{
			$(".moroph").show();
			$(".novarnt").hide();
			$('input[id=nvarient]').attr("disabled",true);
			$('input[id=varient]').attr("checked",true);
			$('input[id=nvarient]').attr("checked",false);
			$("#havvarnt").html('This Product Set to Variants !');
			$("#notvarnt").html('');
			$("#vatt").css('display','none');
			$("#savevarnt").css('display','none');
		}
		if(msg.vrt == '2')
		{	
			$(".moroph").hide();
			$(".novarnt").show();
			$('input[id=varient]').attr("disabled",true);
			$('input[id=nvarient]').attr("checked",true);
			$('input[id=varient]').attr("checked",false);
			$("#havvarnt").html('');
			$("#notvarnt").html('This Product does not Set to Variants !');
			
		}
		if(msg.vrt == '0')
		{	
			//$('input[name=varient]').attr("checked",false);
			//$('input[name=nvarient]').attr("checked",false);
			$('input[id=varient]').attr("disabled",false);
			$('input[id=nvarient]').attr("disabled",false);
			$("#havvarnt").html('');
			$("#notvarnt").html('');
			$("#vatt").css('display','block');
			$("#savevarnt").css('display','block');
		}
		$("#lodr").hide();
		$("#lodr_layr").hide();
	},
	error: function(err)
	{
		//alert('Check your internet connection!');
	}
	});
}
function updtevariants()
{
	var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;
   
    for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');
   
    if (sParameterName[0] === sParam) {
    return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    }
    }
    return false;
    };
	var pcod = getUrlParameter('prdcod');
	$.ajax({
	type: "POST",
	crossDomain: true,
	dataType: "json",
	cache: false,
	url: project_path+"upvart.php",
	data: {prdcode:pcod},
	beforeSend: function()
	{
	  $("#lodr").show();
	  $("#lodr_layr").show();
	},
	success: function(msg)
	{
		$.each(msg.svrt, function()
		{
			if(this.msgg == "1" || this.msgg == "2" || this.msgg == "3" || this.msgg == "4")
			{
				$("#messg").html('<td colspan="3" style="color:green;">Data Updated !</td>');
				var x = document.getElementById("messg");
				x.className = "show";
				setTimeout(function(){ x.className = x.className.replace("show", "");}, 2500);
				loadallvart(pcod);
				checkvariant();
				$("#updtvarnt").css("display","none");
				$("#cnlvarnt").css("display","none");
			}
		});
		$("#lodr").hide();
		$("#lodr_layr").hide();
	},
	error: function(err)
	{
		alert(JSON.stringify(err));
	}
	});
}
function edtvart()
{
	$("#savevarnt").css("display","none");
	$("#updtvarnt").css("display","block");
	$("#cnlvarnt").css("display","block");
	$("#vatt").css('display','block');
	var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;
   
    for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');
   
    if (sParameterName[0] === sParam) {
    return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    }
    }
    return false;
    };
	var pcod = getUrlParameter('prdcod');
	var op = '';
	var ind=0;
	var opp = '';
	var indxe = $("#vrr").val().split(',');
	var indxee = parseInt(indxe.length)+parseInt(1);
	$.ajax({
	type: "POST",
	crossDomain: true,
	dataType: "json",
	cache: false,
	url: project_path+"loadvart.php",
	data: {prdcode:pcod},
	beforeSend: function()
	{
		$("#lodr").show();
		$("#lodr_layr").show();
	},
	success: function(msg)
	{
		var strr = msg.replaceAll("-", ",");
		var string = strr.split(',');
		
		$.each(string, function(index,valu)
		{			
			op +='<tr class="xxadqlist"><td class="purp"><div class="uid_box education ksp"><h4>OPTION</h4><input name="sdferx" id="optv'+indxee+'" type="text" value="'+valu+'" class="field_style" style="border-color: rgb(225, 225, 225); border-width: 1px; border-style: solid;"></div></td><td class="amt"><div class="uid_box education"><h4 class="closx">OPTION</h4><input type="text" name="DynamicTextBox" class="field_style moretagxx" placeholder=" Separate options with a comma" onkeyup="checkey('+"'"+indxee+"'"+');" id="hiddev'+indxee+'" style="display: none;"><div id="amtdev'+indxee+'"><div class="bootstrap-tagsinput"><div id="ddd'+indxee+'"></div> <input type="text" class="setfocusout" placeholder="Separate options with a comma" style="width: 29em !important;" size="29" onkeyup="kkk('+"'"+indxee+"'"+');" id="vart'+indxee+'"></div></div></div></td></tr>';
			$('#TextBoxContainer2').html(op);
			var opn = valu;			
			var that = indxee;
			var vt = '';
			opp +=opn+',';
			$("#vrr").val(opp);
			$.ajax({
			type: "POST",
			crossDomain: true,
			dataType: "json",
			cache: false,
			url: project_path+"loadallvarient.php",
			data : {prdcode:pcod,optn:opn, opt:opp},			
			success: function(respons)
			{
				$.each(respons.svrt, function(indexx,value)
				{
					//alert(that);
					vt +='<span class="tag label label-info" style="margin-right:4px;" id="sp'+this.tid+'">'+this.vrtnm+'<span data-role="remove" onclick="edtremovedt('+"'"+this.tid+"'"+','+"'"+this.vrtnm+"'"+','+"'"+opn+"'"+');"></span></span>';
					$("#ddd"+that).html(vt);
					
					ind++;
				});
			},
			error: function(err)
			{
				//alert('Check your internet connection!');
			}
			});
			indxee++;
			
		});
		$("#lodr").hide();
		$("#lodr_layr").hide();
	},
	error: function(err)
	{
		//alert(JSON.stringify(err));
	}
	});
}
var numbe = 0;
var mm = 300;
var pp = 0;
var kll="";
function edtremovedt(nm,vl,op)
{
    warnitm();
    $("#nmm").val(nm);
    $("#vllu").val(vl);
    $("#ooop").val(op);
}
function kkk(numk)
{
    var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;
   
    for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');
   
    if (sParameterName[0] === sParam) {
    return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    }
    }
    return false;
    };
	var pcodd = getUrlParameter('prdcod');
	var optnvall = $('#optv'+numk).val();
    if(optnvall != '')
	{
	    $('#optvl'+numk).css({"border-color": "#e1e1e1", "border-width":"1px", "border-style":"solid"});    
        if($("#vart"+numk).val().indexOf(',') !== -1)
        {
        var bnm = ++m;
        var lstval = $("#vart"+numk).val().substr(0, $("#vart"+numk).val().indexOf(','));
        kl="1";
        $.ajax({
    	type: "POST",
    	crossDomain: true,
    	dataType: "json",
    	cache: false,
    	url: project_path+"addvart.php",
    	data: {prdcode:pcodd,itmv:lstval,tp:kl,opn:optnvall},
		beforeSend: function()
		{
			$("#lodr").show();
			$("#lodr_layr").show();
		},		
    	success: function(msg)
    	{	
    		$.each(msg.vrt, function() 
    		{
    		    if(this.vrtnm != '')
    		    {
        			$("#ddd"+numk).append('<span class="tag label label-info" style="margin-right:4px;" id="sp'+bnm+'">'+this.vrtnm+'<span data-role="remove" onclick="removedt('+"'"+bnm+"'"+','+"'"+this.vrtnm+"'"+','+"'"+this.vrt+"'"+');"></span></span>');
                    $('.setfocusout').val('');
    		    }
    		    else
    		    {
    		        $("#ddd"+numk).append('');
                    $('.setfocusout').val('');
    		    }
    		});	
			$("#lodr").hide();
			$("#lodr_layr").hide();
    	},
    	error: function(err)
    	{
    		//alert('Check your internet connection!');
    	}
    	});
        
        }
	}
	else
	{
	    $('#optvl'+numk).css({"border-color": "red", "border-width":"1px", "border-style":"solid"});
	    $('.setfocusout').val('');
	}
}
function savedata()
{
	var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;
   
    for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');
   
    if (sParameterName[0] === sParam) {
    return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    }
    }
    return false;
    };
	var fd = new FormData();
	var pcodd = getUrlParameter('prd');
	var opn = getUrlParameter('op');
	var vart = getUrlParameter('vl');
	
	var pimg = $('#image-file2')[0].files[0];
	var mrp = $('#mrpp').val();
	var slp = $("#slpp").val();
	var sku = $("#skuu").val();
	var sqty = $("#sqtyy").val();
	var stksta = $("#stksts :selected").val();
	var act = $("#onoff").val();
	var prl = $('#primg').val();
	var weightdtl = $('#weightdtl').val();
	if(parseFloat(slp) < parseFloat(mrp))
	{
	    $("#er").html("");
    	fd.append('proimg',pimg);
    	fd.append('pg',prl);
    	fd.append('pcd',pcodd);
    	fd.append('opn',opn);
    	fd.append('vrt',vart);
    	fd.append('mrp',mrp);
    	fd.append('slp',slp);
    	fd.append('sku',sku);
    	fd.append('sqty',sqty);
    	fd.append('stksta',stksta);
    	fd.append('act',act);
    	fd.append('wghtdtl',weightdtl);
        $.ajax({
    	url: project_path+"saveprodtdata.php",
    	type: 'POST',
    	data: fd,
    	contentType: false,
    	processData: false,
    	beforeSend: function()
    	{
    		$("#lodr").show();
    		$("#lodr_layr").show();
    	},
    	success: function(msg)
    	{
    	    if(msg =="1")
    	    {
    		    loaddata();
    	    }
    		$("#lodr").hide();
    		$("#lodr_layr").hide();
    	},
    	error: function(err)
    	{
    		//alert('Check your internet connection!');
    	}
    	});
	}
	else
	{
	    $("#er").html("Sales Price can not be same or greater then MRP");
	    return false;
	}
}
function loadnonvarntdata()
{
	var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;
   
    for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');
   
    if (sParameterName[0] === sParam)
    {
     return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    }
    }
    return false;
    };
	var pcodd = getUrlParameter('prdcod');
	
	
	var igg = '';
	var ig = '';
	var st = '';
	$.ajax({
	type: "POST",
	crossDomain: true,
	dataType: "json",
	cache: false,
	url: project_path+"nonvarntlst.php",
	data: {prdcode:pcodd},	
	success: function(msg)
	{
		$.each(msg.svrt, function() 
		{	
			if(this.mg == "1")
			{
			if(this.ipmg != '' || this.ipmg != null)
			{
				igg = '../public/images/products/'+this.ipmg;
			}
			if(this.ipmg == '' || this.ipmg == null)
			{
				igg = '../public/images/products/nomig.jpg';
			}
			$("#im").html('<img src="'+igg+'" />');
			$("#pnm").html(this.pnem);
			//var str = this.vrtnm.replaceAll("-", "/");
			if(this.actv == "0")
			{
				$("#acc").html('<span>Disabled</span>');
			}
			if(this.actv == "1")
			{
				$("#acc").html('<span>Enabled</span>');
			}
			$("#mrpp").val(this.mrp);
			$("#slpp").val(this.selpric);
			$("#skuu").val(this.sku);
			$("#sqtyy").val(this.sqty);
	        $("#weight").val(this.weght);
	        
			if(this.stkstas == '1')
			{
				st='<option SELECTED value="1">In Stock</option><option value="2">Out of Stock</option>';
			}
			if(this.stkstas == '2')
			{
				st='<option value="1">In Stock</option><option SELECTED value="2">Out of Stock</option>';
			}
			if(this.stkstas == '0')
			{
				st='<option value="0" SELECTED>Select---</option><option value="1">In Stock</option><option value="2">Out of Stock</option>';
			}
			$("#stksts").html(st);
			$("#nvtt").css("display","block");
			}
			if(this.mg == "0")
			{
				st='<option value="0" SELECTED>Select---</option><option value="1">In Stock</option><option value="2">Out of Stock</option>';
				$("#stksts").html(st);
				if(this.ipmg != '' || this.ipmg != null)
    			{
    				igg = '../public/images/products/'+this.ipmg;
    			}
    			if(this.ipmg == '' || this.ipmg == null)
    			{
    				igg = '../public/images/products/nomig.jpg';
    			}
    			$("#im").html('<img src="'+igg+'" />');
				$("#pnm").html(this.pnam);
				$("#nvtt").css("display","none");
			}
		});	
		
	},
	error: function(err)
	{
		//alert('Check your internet connection!');
	}
	});
	
}

function savenonedata()
{
	var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;
   
    for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');
   
    if (sParameterName[0] === sParam) {
    return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    }
    }
    return false;
    };
	var pcodd = getUrlParameter('prdcod');
	var mrpp = $('#mrpp').val();
	var slpp = $("#slpp").val();
	var skup = $("#skuu").val();
	var sqtyp = $("#sqtyy").val();
	var weight = $("#weight").val();
	var stkstap = $("#stksts :selected").val();
	if(parseFloat(slpp) < parseFloat(mrpp))
	{
    	$.ajax({
    	type: "POST",
    	crossDomain: true,
    	dataType: "json",
    	cache: false,
    	url: project_path+"savenonvarntlst.php",
    	data: {prdcode:pcodd,mrp:mrpp,slp:slpp,sku:skup,sqty:sqtyp,stksta:stkstap,wght:weight},
    	beforeSend: function()
    	{
    		$("#lodr").show();
    		$("#lodr_layr").show();
    	},	
    	success: function(msg)
    	{	
    		if(msg =="1")
    	    {
    		    loadnonvarntdata();
    			checkvariant();
    	    }
    		$("#lodr").hide();
    		$("#lodr_layr").hide();
    		$("#er").html("");
    	},
    	error: function(err)
    	{
    		//alert('Check your internet connection!');
    	}
    	});
	}
	else
	{
	    $("#er").html("Sales Price can not be same or greater then MRP");
	    return false;
	}
	
}
function loadproductdetail()
{
    var prdd = '';
    var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;
   
    for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');
   
    if (sParameterName[0] === sParam) {
    return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    }
    }
    return false;
    };
	
	if(prdd === false)
	{
        prdd = '';
	}
	else
	{
	    prdd = getUrlParameter('pcd');
	}
	
    var slt = $("#sub_cat_id :selected").val();
	$.ajax({
	type:"POST",
	dataType:"JSON",
	crossDomain: true,
	cache: false,
	url: project_path+"sltproductdtl.php",
	data:{pcod:prdd},	
	ContentType:"application/json",
	success: function(response)
	{
	   
		$.each(response.prdctlst, function()
		{
		    if(this.is_active == '1')
		    {
		        $('.lblonof').removeClass("off");
		        $("#actprd").val("1");
		    }
		    if(this.is_active == '0')
		    {
		        $('.lblonof').addClass("off");
		        $("#actprd").val("0");
		    }
			$('#pname').val(this.productname);
			CKEDITOR.instances['product_desc'].setData(this.pdesc);
			//$('#product_desc').val(this.pdesc);
		});		
		
	},
	error: function(err){
		//alert('Check your internet connection!');
	}

	});
	

	var sl='';
	$.ajax({
	type:"POST",
	dataType:"JSON",
	crossDomain: true,
	cache: false,
	url: project_path+"sltprdgalry.php",
	data:{pcod:prdd},
	ContentType:"application/json",	
	success: function(responsee){
	//alert(JSON.stringify(responsee));	
	$.each(responsee.tpimg, function() 
	{	
	    if(this.pimage != '')
	    {
	        var that = this.tid;
	        var x = this.pimage.split(",");
	        $.each(x, function(key,val)
	        {
		        sl+='<div class="piprpx"><div class="phoxyd"><img class="imageThumb" src="'+base_path+'public/images/products/'+val+'" title="'+val+'"/><span class="remocve" onclick="removeimg('+"'"+that+"'"+','+"'"+val+"'"+');">Remove image</span></div></div>';
	        });
	        $("#edmulimg").html(sl);
	    }
	    if(this.pimage == '')
	    {
	        $("#edmulimg").html('');
	    }    
    });	
	
	},
	error: function(err){
		//alert('Check your internet connection!');
	}
	});
}
function deleteprodt(pcdd)
{
    var u = confirm("Are you sure!");
    if(u)
    {
        $.ajax({
    	type:"POST",
    	dataType:"JSON",
    	crossDomain: true,
    	cache: false,
    	url: project_path+"deletepdt.php",
    	data:{pcod:pcdd},	
    	ContentType:"application/json",
    	success: function(response)
    	{
    	   if(response == "1")
    	   {
    	       loadproduct();
    	   }
    	},
    	error: function(err){
    		//alert('Check your internet connection!');
    	}
    
    	});
    }
    else
    {
        return false;
    }
}
function dltimg()
{
    var pdc = '';
    var vr='';
    var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;
   
    for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');
   
    if (sParameterName[0] === sParam) {
    return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    }
    }
    return false;
    };
	
	if(pdc === false)
	{
        pdc = '';
	}
	else
	{
	    pdc = getUrlParameter('prd');
	}
	if(vr === false)
	{
        vr = '';
	}
	else
	{
	    vr = getUrlParameter('vl').replaceAll('%20',' ');
	}
	var imgdata = $("#primg").val();
	var u = confirm("Are you sure!");
    if(u)
    {
        $.ajax({
    	type:"POST",
    	dataType:"JSON",
    	crossDomain: true,
    	cache: false,
    	url: project_path+"deletevrtimg.php",
    	data:{pcod:pdc, vrd:vr, imgd:imgdata},	
    	ContentType:"application/json",
    	success: function(response)
    	{
    	   if(response == "1")
    	   {
    	       loaddata();
    	   }
    	},
    	error: function(err){
    		//alert('Check your internet connection!');
    	}
    
    	});
    }
    else
    {
        return false;
    }
}
function loadorder(perPageCount, pageNumber)
{
    var ordlst='';
	var nammob = $('#namemob').val();
	var ordid = $('#orderidd').val();
	var ordsts = $('#ordsts').val();
	$.ajax({
	type:"POST",
    	dataType:"JSON",
    	crossDomain: true,
    	cache: false,
    	url: project_path+"orderlist.php",
    	data:{orderid:ordid, namemobl:nammob, ordrsts:ordsts, pageNumberr:pageNumber},	
    	ContentType:"application/json",
    	beforeSend: function()
    	{
    		$("#lodr").show();
    		$("#lodr_layr").show();
    	},
    	success: function(response)
    	{
    		$.each(response.ordlst, function()
    		{
    			if(this.nodt =="1")
    			{
    			    if(this.canclby != 'USER')
    			    {
        			    if(this.ordersts == 'PENDING')
        			    {
        				    ordlst +='<tr><td>'+this.cnt+'</td><td>'+this.orderdate+'</td><td><p class="nmob"><span class="blue">'+this.uord_id+'</span> <span class="webm"><img class="useric" src="../public/images/das_icons/account.png" />'+this.usrfm+'</span><td><p class="nmob"> <span>'+this.usrname+'</span> <span class="blue">'+this.usrmob+'</span> </p></td><td><p class="nmob"> <span>'+this.qtty+' (Items) </span> <span>'+this.totalamt+'</span> </p></td><td><p class="nmob"> <span style="color:#'+this.colr+'">'+this.ordersts+'</span> </p></td><td><div class="action nomin"> <a class="viewic edit" target="_blank" style="background:transparent;" title="view" href="viewdtls?oid='+this.uord_id+'"> <img src="../public/images/das_icons/view_green.png" alt="view"></a> <a class="viewic edit" style="background:transparent;" title="Delete" href="javascript:void(0)"> <img src="../public/images/das_icons/del_red.png" alt="Delete" onclick="warndeleteorder('+"'"+this.uord_id+"'"+')"></a> </div></td></tr>';
        			    }
        			    if(this.ordersts != 'PENDING')
        			    {
        			        if(this.prodcod ==2 || this.prodcod ==3)
        			        {
        			            if(this.varant =='Soft Copy')
        			            {
        			                var ordsts='SUBSCRIBED';
        			            }
        			            if(this.varant =='Hard Copy')
        			            {
        			                var ordsts='VERIFIED';
        			            }
        			        }
        			        else
        			        {
        			            var ordsts=this.ordersts;
        			        }
        				    ordlst +='<tr><td>'+this.cnt+'</td><td>'+this.orderdate+'</td><td><p class="nmob"><span class="blue">'+this.uord_id+'</span> <span class="webm"><img class="useric" src="../public/images/das_icons/account.png" />'+this.usrfm+'</span><td><p class="nmob"> <span>'+this.usrname+'</span> <span class="blue">'+this.usrmob+'</span> </p></td><td><p class="nmob"> <span>'+this.qtty+' (Items) </span> <span>'+this.totalamt+'</span> </p></td><td><p class="nmob"> <span style="color:#'+this.colr+'">'+ordsts+'</span> </p></td><td><div class="action nomin"> <a class="viewic edit" target="_blank" style="background:transparent;" title="view" href="viewdtls?oid='+this.uord_id+'"> <img src="../public/images/das_icons/view_green.png" alt="view"></a></div></td></tr>';
        			    }
    			    }
    			    if(this.canclby == 'USER')
    			    {
        			    if(this.ordersts == 'PENDING')
        			    {
        				    ordlst +='<tr><td>'+this.cnt+'</td><td>'+this.orderdate+'</td><td><p class="nmob"><span class="blue">'+this.uord_id+'</span> <span class="webm"><img class="useric" src="../public/images/das_icons/account.png" />'+this.usrfm+'</span><td><p class="nmob"> <span>'+this.usrname+'</span> <span class="blue">'+this.usrmob+'</span> </p></td><td><p class="nmob"> <span>'+this.qtty+' (Items) </span> <span>'+this.totalamt+'</span> </p></td><td><p class="nmob"> <span style="color:#'+this.colr+'">User Cancelled</span> </p></td><td><div class="action nomin"> <a class="viewic edit" target="_blank" style="background:transparent;" title="view" href="viewdtls?oid='+this.uord_id+'"> <img src="../public/images/das_icons/view_green.png" alt="view"></a> <a class="viewic edit" style="background:transparent;" title="Delete"  href="javascript:void(0)"> <img src="../public/images/das_icons/del_red.png" alt="Delete" onclick="warndeleteorder('+"'"+this.uord_id+"'"+')"></a> </div></td></tr>';
        			    }
        			    if(this.ordersts != 'PENDING')
        			    {
        				    ordlst +='<tr><td>'+this.cnt+'</td><td>'+this.orderdate+'</td><td><p class="nmob"><span class="blue">'+this.uord_id+'</span> <span class="webm"><img class="useric" src="../public/images/das_icons/account.png" />'+this.usrfm+'</span><td><p class="nmob"> <span>'+this.usrname+'</span> <span class="blue">'+this.usrmob+'</span> </p></td><td><p class="nmob"> <span>'+this.qtty+' (Items) </span> <span>'+this.totalamt+'</span> </p></td><td><p class="nmob"> <span style="color:#'+this.colr+'">User Cancelled</span> </p></td><td><div class="action nomin"> <a class="viewic edit" target="_blank" style="background:transparent;" title="view" href="viewdtls?oid='+this.uord_id+'"> <img src="../public/images/das_icons/view_green.png" alt="view"></a></div></td></tr>';
        			    }
    			    }
    			}
    			else
    			{
    				ordlst +='<tr><td colspan="7" style="color:red;text-align:center;">No list found !</td></tr>'; 
    			}
    		});
    		$('#ordrdata').html(ordlst);
    		$("#lodr").hide();
    		$("#lodr_layr").hide();
    	},
    	error: function(err){
    		//alert('Check your internet connection!');
    	}

	});
}
function loadorderdtl()
{
    var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;
   
    for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');
   
    if (sParameterName[0] === sParam) {
    return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    }
    }
    return false;
    };
	var ordid = getUrlParameter('oid');
	$.ajax({
		type:"POST",
		dataType:"JSON",
		crossDomain: true,
		cache: false,
		url: project_path+"orderdtl.php",
		data:{orderid:ordid},	
		ContentType:"application/json",
		beforeSend: function()
		{
			$("#lodr").show();
			$("#lodr_layr").show();
		},
		success: function(response)
		{
			$.each(response.ordlst, function()
			{
				if(this.nodt =="1")
				{
					if(this.prodcod ==2 || this.prodcod ==3)
                    {
                    	if(this.varant =='Soft Copy')
                    	{
                    		var ordsts='SUBSCRIBED';
                    	}
                    	if(this.varant =='Hard Copy')
                    	{
                    		var ordsts='VERIFIED';
                    	}
                    }
                    else
                    {
                    	var ordsts=this.ordersts;
                    }
					$("#odi").html(this.uord_id);
					$("#odat").html(this.orderdate);
					$("#ostat").html('<p class="ylw" style="color:#'+this.colr+' !important;">'+ordsts+'</p>');
					$("#nam").html('<strong>Customer Name:</strong> '+this.usrname);
					$("#ml").html('<strong>Email Address:</strong> '+this.eml);
					$("#mb").html('<strong>Mobile:</strong> '+this.mob);
					$("#dname").html(this.ordrname);
					if(this.adrid !=0)
					{
					    $("#leftadd").show();
    					$("#dads").html(this.ordrflat+' '+this.ordrads+'<br>'+this.ordrland);
    					$("#dmob").html('<strong> Mobile</strong>: '+this.ordrmob);
    					$("#dsttpin").html('<strong> State</strong>: '+this.dstate+', '+this.dpin);
					}
					else
					{
					    $("#leftadd").hide();
					}
					if(this.ordersts !="PENDING" && this.ordersts !="PROCESSED")
					{
						$(".proadbxz").hide();
						$(".adtsc").hide();
						$("#zzbtnxxedt").hide();
						$("#closexim").hide();
					}
				}
			});
			
			$("#lodr").hide();
			$("#lodr_layr").hide();
		},
		error: function(err){
			//alert('Check your internet connection!');
		}
	});
	
    var cd = '';
	var lst='';
	$.ajax({
		type:"POST",
		dataType:"JSON",
		crossDomain: true,
		cache: false,
		url: project_path+"orderdtllst.php",
		data:{orderid:ordid},	
		ContentType:"application/json",
		success: function(respon)
		{
			$.each(respon.orlst, function()
			{
				if(this.nodt =="1")
				{
					lst +='<tr><td><div class="prothum"><figure> <img src="../public/images/products/'+this.prd_image+'" alt="pro" /> </figure><figcaption><h2>'+this.prd_name+'</h2><h4>'+this.variant+'</h4></figcaption></div></td><td><div class="pric_pro"><h4><img src="../public/images/das_icons/rupl.png" style="height:10px"/>'+this.untprice+'</h4></div></td><td>'+this.qty+'</td><td class="actmttl"><div class="pramou"><h3><img src="../public/images/das_icons/rupl.png" style="height:15px"/>'+this.total_amt+'<input type="hidden" name="tol" value="'+this.total_amt+'" /></h3></div></td></tr>';
				}
				$("#tot").html('<img src="../public/images/das_icons/rupl.png" style="height:15px"/>'+this.netamount);
				$("#pdelchrgs").html('<img src="../public/images/das_icons/rupl.png" style="height:15px"/>'+this.delivrychargs);
				$("#ptot").html('<img src="../public/images/das_icons/rupl.png" style="height:15px"/>'+this.utotal_amount);
				$("#transid").html(this.razorpaymentid);
				$("#ptotamnt").val(this.utotal_amount);
				if(this.cpncde !='')
				{
    				$("#cpncdid").html('<span>Coupon Applied ('+this.cpncde+') :</span>(-)<img src="../public/images/das_icons/rupl.png" style="height:15px"/><h3 class="ppc">'+this.cpamnt+'</h3>');
				}
				$("#pmod").html('Mode of payment: '+this.upaymnt_mode);
				$("#nt").html(this.note);
			});
			$("#oddtl").html(lst);
		},
		error: function(err){
			//alert('Check your internet connection!');
		}
	});
}
function edtordr()
{
    var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;
   
    for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');
   
    if (sParameterName[0] === sParam) {
    return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    }
    }
    return false;
    };
	var ordid = getUrlParameter('oid');
    $("#upbutn").css("display","block");
    var cd = '';
	var lst='';
	$.ajax({
    	type:"POST",
    	dataType:"JSON",
    	crossDomain: true,
    	cache: false,
    	url: project_path+"orderdtllst.php",
    	data:{orderid:ordid},	
    	ContentType:"application/json",
    	beforeSend: function()
    	{
    		$("#lodr").show();
    		$("#lodr_layr").show();
    	},
    	success: function(respon)
    	{
    		$.each(respon.orlst, function()
    		{
    			if(this.nodt =="1")
    			{
    				lst +='<tr><td><div class="prothum"><figure> <img src="../public/images/products/'+this.prd_image+'" alt="pro" /> </figure><figcaption><h2>'+this.prd_name+'</h2><h4>'+this.variant+'</h4></figcaption></div></td><td><div class="pric_pro"><h4>'+this.untprice+'</h4></div></td><td><input type="text" name="qtyy" value="'+this.qty+'" style="width: 80px;height: 30px;" id="q'+this.uoid+'" onkeyup="return upqty('+"'"+this.uoid+"'"+','+"'"+this.uord_id+"'"+','+"'"+this.untprice+"'"+');"><input type="hidden" name="uid" value="'+this.uoid+'" /></td><td class="actmttl"><div class="pramou"><h3 style="float: left;" id="p'+this.uoid+'">'+this.total_amt+'<input type="hidden" name="tol" value="'+this.total_amt+'" /></h3><a class="actcan"  href="javascript:void(0);" onclick="return deletordr('+"'"+this.uoid+"'"+','+"'"+this.untprice+"'"+');"><img src="../public/images/canl.png" class="canbnt"  style="margin-top: 3px;margin-left: 5px;"/></a></div></td></tr>';
    			}
    			$("#tot").html(this.utotal_amount);
    			$("#ptot").html(this.utotal_amount);
    			$("#pdelchrgs").html(this.delivrychargs);
    			if(this.upaymnt_mode == 'COD')
    			{
    			    cd = 'Cash on Delivery';
    			}
    			$("#pmod").html('Mode of payment: '+cd);
    			$("#nt").html(this.note);
    		});
    		$("#oddtl").html(lst);
    		$("#lodr").hide();
    		$("#lodr_layr").hide();
    	},
    	error: function(err){
    		//alert('Check your internet connection!');
    	}
	});
}
function upqty(idd,ordid,uprc)
{
    var qtty = $("#q"+idd).val();
    var prc = parseInt(qtty)*parseInt(uprc);
    $("#p"+idd).html(prc+'<input type="hidden" name="tol" value="'+prc+'" />');
    
    var tl = $("input[name*='tol']");
    var toll = [];
    $.each(tl, function(i, item) {  //i=index, item=element in array
        toll.push($(item).val());
    });
    var totalmt = eval(toll.join("+"));
    
    $("#tot").html(totalmt);
    $("#pcharge").val(totalmt);
    
    $.ajax({
	type:"POST",
	dataType:"JSON",
	crossDomain: true,
	cache: false,
	url: project_path+"uptempordr.php",
	data:{orderid:ordid, qnt:qtty, udd:idd, upc:uprc},	
	ContentType:"application/json",
	success: function(respon)
	{
		
	},
	error: function(err){
		//alert('Check your internet connection!');
	}

	});
}
function saveorder()
{
    var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;
   
    for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');
   
    if (sParameterName[0] === sParam) {
    return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    }
    }
    return false;
    };
	var ordid = getUrlParameter('oid');
	var ud = $("input[name*='uid']");
	var qt = $("input[name*='qtyy']");
	var qy = [];
	var idid = [];
    $.each(qt, function(i, item) {  //i=index, item=element in array
        qy.push($(item).val());
    });
    $.each(ud, function(j, dd) {  //i=index, item=element in array
        idid.push($(dd).val());
    });
    var quantity = qy;
    var oid = idid;
    
    $.ajax({
	type:"POST",
	dataType:"JSON",
	crossDomain: true,
	cache: false,
	url: project_path+"updateorder.php",
	data:{orderid:ordid},	
	ContentType:"application/json",
	success: function(respon)
	{
		if(respon == "1")
		{
		    window.location.href=base_path+"KadambiniAdmin/viewdtls?oid="+ordid;
		}
	},
	error: function(err){
		//alert('Check your internet connection!');
	}

	});
}
function deletordr(idd,uprc)
{
    var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;
   
    for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');
   
    if (sParameterName[0] === sParam) {
    return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    }
    }
    return false;
    };
	var ordid = getUrlParameter('oid');
	var cof = confirm("Are you sure !");
	if(cof)
	{
        $.ajax({
    	type:"POST",
    	dataType:"JSON",
    	crossDomain: true,
    	cache: false,
    	url: project_path+"deleteorder.php",
    	data:{orderid:ordid, uid:idd},	
    	ContentType:"application/json",
    	success: function(respon)
    	{
    		if(respon == "1")
    		{
    		    edtordr();
    		    var qtty = $("#q"+idd).val();
                var tl = $("input[name*='tol']");
                var toll = [];
                $.each(tl, function(i, item)
				{  //i=index, item=element in array
                    toll.push($(item).val());
                });
                var totalmt = eval(toll.join("+"));
                
                $("#tot").html(totalmt);
                $("#ptot").html(totalmt);
                $("#pcharge").val(totalmt);
    		}
    	},
    	error: function(err){
    		//alert('Check your internet connection!');
    	}
    
    	});
	}
	else
	{
	    return false;
	}
}
function cancelupdate()
{
    var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;
   
    for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');
   
    if (sParameterName[0] === sParam) {
    return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    }
    }
    return false;
    };
	var ordid = getUrlParameter('oid');
    window.location.href=base_path+"KadambiniAdmin/viewdtls?oid="+ordid;
}
function ordstusupdt(stat,dt)
{
    var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;
   
    for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');
   
    if (sParameterName[0] === sParam) {
    return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    }
    }
    return false;
    };
	var ordid = getUrlParameter('oid');
	var cf = confirm("Are you sure !");
	if(cf)
	{
        $.ajax({
			type:"POST",
			dataType:"JSON",
			crossDomain: true,
			cache: false,
			url: project_path+"uporderstatsu.php",
			data:{orderid:ordid, osta:stat, whr:dt},
			ContentType:"application/json",
			success: function(respon)
			{
				if(respon == "1")
				{
					loadstat();
				}
			},
			error: function(err){
				//alert('Check your internet connection!');
			}
    	});
	}
	else
	{
	    return false;
	}
}
function loadstat()
{
    var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;
   
    for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');
   
    if (sParameterName[0] === sParam) {
    return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    }
    }
    return false;
    };
	var ordid = getUrlParameter('oid');
    $.ajax({
    	type:"POST",
    	dataType:"JSON",
    	crossDomain: true,
    	cache: false,
    	url: project_path+"loadorderstats.php",
    	data:{orderid:ordid},
    	ContentType:"application/json",
    	beforeSend: function()
    	{
    		$("#lodr").show();
    		$("#lodr_layr").show();
    	},
    	success: function(respon)
    	{
    	    $.each(respon.stat, function()
    		{
    		    if(this.usr_ord_stats == 'PENDING')
    		    {
    		        $("#pend").prop("checked", true);
    		        $("#proce").prop("checked", false);
    		        $("#delv").prop("checked", false);
    		        $("#canc").prop("checked", false);
    		    }
    		    if(this.usr_ord_stats == 'PROCESSED')
    		    {
    		        $("#proce").prop("checked", true);
    		        $("#pend").prop("checked", false);
    		        $("#delv").prop("checked", false);
    		        $("#canc").prop("checked", false);
    		    }
    		    if(this.usr_ord_stats == 'DELIVERED')
    		    {
					if(this.prodcod ==2 || this.prodcod ==3)
                    {
                    	if(this.varant =='Soft Copy')
                    	{
                    		var ordsts='SUBSCRIBED';
                    	}
                    	if(this.varant =='Hard Copy')
                    	{
                    		var ordsts='VERIFIED';
                    	}
                    }
                    else
                    {
                    	var ordsts=this.ordersts;
                    }
                    $('#ordstsid').html(ordsts);
    		        $("#proce").prop("checked", false);
    		        $("#pend").prop("checked", false);
    		        $("#delv").prop("checked", true);
    		        $("#canc").prop("checked", false);
    		    }
    		    if(this.usr_ord_stats == 'CANCELLED')
    		    {
    		        $("#proce").prop("checked", false);
    		        $("#pend").prop("checked", false);
    		        $("#delv").prop("checked", false);
    		        $("#canc").prop("checked", true);
    		        
    		        $("#pen").css("display", "none");
    		        $("#pro").css("display", "none");
    		        $("#del").css("display", "none");
    		    }
    		    if(this.ord_date != '30-Nov--0001')
    		    {
        		    $("#pdate").html(this.ord_date);
        	        $("#ptime").html(this.ord_time);
    		    }
    		    if(this.cnfrm_dat != '30-Nov--0001')
    		    {
        	        $("#prdate").html(this.cnfrm_dat);
        	        $("#prtime").html(this.cnfrm_time);
    		    }
    		    if(this.delvr_date != '30-Nov--0001')
    		    {
        	        $("#ddate").html(this.delvr_date);
        	        $("#dtime").html(this.delvr_time);
    		    }
    		    if(this.cncl_dat != '30-Nov--0001')
    		    {
        	        $("#cdate").html(this.cncl_dat);
        	        $("#ctime").html(this.cncl_time);
    		    }
    		});
    	    $("#lodr").hide();
    		$("#lodr_layr").hide();
    	},
    	error: function(err){
    		//alert('Check your internet connection!');
    	}
	});
}
function loaduser(perPageCount, pageNumber)
{
    var fltr = $("#mobile").val();
    var lst = '';
    $.ajax({
	type:"POST",
	dataType:"JSON",
	crossDomain: true,
	cache: false,
	url: project_path+"userlist.php",
	data:{namemobl:fltr, pageNumberr:pageNumber},	
	ContentType:"application/json",
	beforeSend: function()
	{
		$("#lodr").show();
		$("#lodr_layr").show();
	},
	success: function(response)
	{
		$.each(response.usrlst, function()
		{
			if(this.nodt =="1")
			{
				lst +='<tr><td>'+this.cnt+'</td><td>'+this.cdt+'</td><td><p class="nmob"><span>'+this.fullname+'</span><span class="blue">'+this.mob+'</span></p></td><td>'+this.totalordr+'</td><td><img src="../public/images/das_icons/rupl.png" style="height:15px"/>'+this.totalamt+'</td><td><div class="cbhs_col act"><div class="action"><a class="viewic edit" target="_blank" style="background:transparent;" title="view" href="user_dtl?ac='+this.userid+'"> <img src="../public/images/das_icons/view_green.png" alt="view"></a></div></div></td></tr>';
			}
			else
			{
				lst +='<tr><td colspan="6" style="color:red;text-align:center;">No list found!</td></tr>'; 
			}
		});
		$('#usrdta').html(lst);
		$("#lodr").hide();
		$("#lodr_layr").hide();
	},
	error: function(err){
		//alert('Check your internet connection!');
	}

	});
}
function loaduserdtl(acc)
{
    $.ajax({
		type:"POST",
		dataType:"JSON",
		crossDomain: true,
		cache: false,
		url: project_path+"userdtl.php",
		data:{userid:acc},	
		ContentType:"application/json",
		beforeSend: function()
		{
			$("#lodr").show();
			$("#lodr_layr").show();
		},
		success: function(response)
		{
			$.each(response.usrdtl, function()
			{
				$('#nam').html(this.fullname);
				$('#mo').html(this.mob);
				$('#ml').html(this.email);
				$('#name').val(this.fullname);
				$('#mobile').val(this.mob);
				$('#email').val(this.email);
			});
			
			$("#lodr").hide();
			$("#lodr_layr").hide();
		},
		error: function(err){
			//alert('Check your internet connection!');
		}
	});
}
function usrorder(mbb)
{
    var ls ='';
    $.ajax({
	type:"POST",
	dataType:"JSON",
	crossDomain: true,
	cache: false,
	url: project_path+"userorderdtl.php",
	data:{mobb:mbb},	
	ContentType:"application/json",
	beforeSend: function()
	{
		$("#lodr").show();
		$("#lodr_layr").show();
	},
	success: function(response)
	{
		$.each(response.usrod, function()
		{
			if(this.nodt =="1")
			{
				ls +='<tr><td>'+this.cnt+'</td><td>'+this.odate+'</td><td>'+this.uord_id+'</td><td>'+this.fulnam+'</td><td><p class="nmob"><span>'+this.totalordr+' (Items)</span><span class="red"><img src="../public/images/das_icons/rupl.png" style="height:12px"/>'+this.totalamt+'</span>	</p></td><td style="color:#'+this.colr+'">'+this.orderstat+'</td><td><div class="cbhs_col act"><div class="action"><a class="viewic edit" target="_blank" style="background:transparent;" title="view" href="viewdtls?oid='+this.uord_id+'" target="_blank"> <img src="../public/images/das_icons/view_green.png" alt="view"></a></div></div></td></tr>';
			}
			else
			{
				ls +='<tr><td colspan="7" style="color:red;text-align:center;">No list found!</td></tr>'; 
			}
		});
		$('#usrod').html(ls);
		$("#lodr").hide();
		$("#lodr_layr").hide();
	},
	error: function(err){
		//alert('Check your internet connection!');
	}

	});
}
function loaddash()
{
    $.ajax({
	type:"POST",
	dataType:"JSON",
	crossDomain: true,
	cache: false,
	url: project_path+"dashbod.php",
	ContentType:"application/json",
	success: function(response)
	{
		$.each(response.dash, function()
		{
			$('#newo').html(this.newod);
			$('#totcus').html(this.totusr);
			if(this.totamt !=null)
			{
		    	$('#totm').html(this.totamt);
			}
			else
			{
		    	$('#totm').html('0.00');
			}
			$('#compord').html(this.delordr);
			$('#canod').html(this.calordr);
		});
	},
	error: function(err){
		//alert('Check your internet connection!');
	}

	});
}
function setvart()
{
	var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;
   
    for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');
   
    if (sParameterName[0] === sParam) {
    return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    }
    }
    return false;
    };
	var pcodd = getUrlParameter('prdcod');
	
	$.ajax({
	type:"POST",
	dataType:"JSON",
	crossDomain: true,
	cache: false,
	url: project_path+"setvarit.php",
	data: {pcd:pcodd},
	ContentType:"application/json",
	success: function(response)
	{
		if(response == "1")
		{
			window.location.reload();
		}
	},
	error: function(err){
		//alert('Check your internet connection!');
	}

	});
	
}
function disms()
{
    $('.popupx').hide();
    overlay.appendTo(document.body).remove();
    return false;
}
function dismsss()
{
    $('.popupxx').hide();
    overlay.appendTo(document.body).remove();
    return false;
}
function dismsssi()
{
    $('.popupxi').hide();
    overlay.appendTo(document.body).remove();
    return false;
}
function dismsssitm()
{
    $('.popupxt').hide();
    overlay.appendTo(document.body).remove();
    return false;
}
function deleteinditem(nm,vl,op)
{
    var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;
   
    for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');
   
    if (sParameterName[0] === sParam) {
    return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    }
    }
    return false;
    };
	var pcodd = getUrlParameter('prdcod');
	var nmu = $("#nmm").val();
    var vu = $("#vllu").val();
    var opu = $("#ooop").val();
	$.ajax({
	type: "POST",
	crossDomain: true,
	dataType: "json",
	cache: false,
	url: project_path+"deleteedtvarint.php",
	data : {pcd:pcodd,vll:vu,opp:opu},
	success: function(msg)
	{
		if(msg =="1")
		{
			$("#sp"+nmu).remove();
			loadallvart(pcodd);
			loadvt();
            $('.popupxt').hide();
            overlay.appendTo(document.body).remove();
		}
	},
	error: function(err)
	{
		//alert('Check your internet connection!');
	}
	});
   
}
function copywarnig(pcdd)
{
    $("#product_code").val(pcdd);
    var overlay = $('<div id="overlay"></div>');
    overlay.show();
    overlay.appendTo(document.body);
    $('.popupxc').show();
    $('.closez').click(function(){
    $('.popupxc').hide();
    overlay.appendTo(document.body).remove();
    return false;
    });
    
    $('.x').click(function(){
    $('.popupxc').hide();
    overlay.appendTo(document.body).remove();
    return false;
    });
}
function copyprod()
{
    var prodcd = $("#product_code").val();
    if(prodcd != '')
    {
    	$.ajax({
        	type: "POST",
        	crossDomain: true,
        	dataType: "json",
        	cache: false,
        	url: project_path+"copyprodcd.php",
        	data : {pcd:prodcd},
        	success: function(msg)
        	{
        		if(msg =="1")
        		{
        			loadproduct(15,1);
        			$('.popupxc').hide();
                    overlay.appendTo(document.body).remove();
        		}
        	},
        	error: function(err)
        	{
        		//alert('Check your internet connection!');
        	}
    	});
    }
}

function cdisms()
{
    $('.popupxc').hide();
    overlay.appendTo(document.body).remove();
    return false;
}

function updateprofile()
{
	var error=0;
    var name = $("#name").val();
    var mobile = $("#mobile").val();
    var email = $("#email").val();
    var hidemob = $("#hidemob").val();
	var mblexst = $("#mblexst").val();
	var emlexst = $("#emlexst").val();
	$.ajax({
		type: "POST",
		crossDomain: true,
		dataType: "json",
		cache: false,
		url: project_path+"updtprofile.php",
		data : {nam:name,mobil:mobile,emal:email,hidmob:hidemob},
		beforeSend: function()
		{
			if(mblexst !=0 || emlexst !=0)
			{
				error += 1;
			}
			if(name =="")
			{
				error += 1;
				$("#name").css("border", "1px solid red");
				$('#name').val('');
			}
			else
			{
				$("#name").css("border", "1px solid #e1e1e1");
			}
			if(mobile =="")
			{
				error += 1;
				$("#mobile").css("border", "1px solid red");
				$('#mobile').val('');
			}
			else
			{
				$("#mobile").css("border", "1px solid #e1e1e1");
			}
			if(email =="")
			{
				error += 1;
				$("#email").css("border", "1px solid red");
				$('#email').val('');
			}
			else
			{
				if(IsEmail(email)==false)
				{
					error += 1;
					$('#dupeml').html("Invalid Email ID");
					$('#dupeml').show(); 
					var x = document.getElementById("dupeml");
					setTimeout(function(){ $('#dupeml').hide(); }, 2500);
					$("#email").css("border", "1px solid red");
				}
				else
				{
					$("#email").css("border", "1px solid #e1e1e1");
				}
			}

			if(error > 0)
			{
			  return false;	
			}
		  $("#lodr").show();
		  $("#lodr_layr").show();
		},
		success: function(msg)
		{
			if(msg =="1")
			{
				window.location.href=base_path+"KadambiniAdmin/user_dtl?ac="+hidemob;
			}
		  $("#lodr").hide();
		  $("#lodr_layr").hide();
		},
		error: function(err)
		{
			//alert('Check your internet connection!');
		}
	});
}
function updatepaswrd()
{
	var error = 0;
	var pasword = $("#password").val();
	var conf_password = $("#conf_password").val();
	var hidemob = $("#hidemob").val();
	//alert(uniqd);
	$.ajax({
	type: "POST",
	crossDomain: true,
	dataType: "json",
	cache: false,
	url: project_path+"changepaswrd.php",
	data: {paswrd:pasword,hidmob:hidemob},
	beforeSend: function()
	{
		if(pasword =="")
		{
			error += 1;
			$("#password").css("border", "1px solid red");
			$('#password').val('');
		}
		else
		{
			$("#password").css("border", " 1px solid #e1e1e1");
		}
		if(conf_password =="")
		{
			error += 1;
			$("#conf_password").css("border", "1px solid red");
			$('#conf_password').val('');
		}
		else
		{
			if(pasword != conf_password)
			{
				error += 1;
				$("#mtchpwd").html("Confirm password didn't match !");
				$('#conf_password').val('');
			}
			else
			{
				$("#conf_password").css("border", " 1px solid #e1e1e1");
			}
		}
		if(error > 0)
		{
		  return false;	
		}
	  $("#lodr").show();
	  $("#lodr_layr").show();
	},
	success: function(msg)
	{		
		if(msg == 1)
		{
			window.location.reload();
		}
		$("#lodr").hide();
		$("#lodr_layr").hide();
	},
	error: function(err)
	{
		alert(err);
		//alert('Check your internet connection!');
	}
	});
}

function getmobile(mobl)
{
	var hidemob=$('#hidemob').val();
	$.ajax({
	type: "POST",
	crossDomain: true,
	dataType: "json",
	cache: false,
	url: project_path+"getusrmobile.php",
	data: {mobil:mobl,hidemobl:hidemob},
	beforeSend: function()
	{
	},
	success: function(msg)
	{
		if(msg == 1)
		{
			$('#dupmbl').html("Mobile Number Already Exist !");
			$('#mblexst').val(1);
		}
		else
		{
			$('#dupmbl').html(" ");
			$('#mblexst').val(0);
		}
	},
	error: function(err)
	{
		alert(err);
		//alert('Check your internet connection!');
	}
	});
}
function getemail(email)
{
	var hidemob=$('#hidemob').val();
	$.ajax({
	type: "POST",
	crossDomain: true,
	dataType: "json",
	cache: false,
	url: project_path+"getusremail.php",
	data: {emailid:email,hidemobl:hidemob},
	beforeSend: function()
	{
	},
	success: function(msg)
	{
		if(msg == 1)
		{
			$('#dupeml').html("Email ID Already Exist !");
			$('#emlexst').val(1);
		}
		else
		{
			$('#dupeml').html(" ");
			$('#emlexst').val(0);
		}
	},
	error: function(err)
	{
		alert(err);
		//alert('Check your internet connection!');
	}
	});
}


function loadstockproduct(perPageCount, pageNumber)
{
	var stckprdlst='';
	var prd_nam = $('#prd_nam').val();
    var mgg='';
	$.ajax({
	type:"POST",
	dataType:"JSON",
	crossDomain: true,
	cache: false,
	url: project_path+"sltstockproductlist.php",
	data:{prdnam:prd_nam,pageNumberr:pageNumber},	
	ContentType:"application/json",
	beforeSend: function()
	{
		$("#lodr").show();
		$("#lodr_layr").show();
	},
	success: function(response)
	{
		$.each(response.stckprdctlst, function()
		{
			if(this.nodt !=0)
			{
			    if(this.prdimage !='')
			    {
			        mgg = this.prdimage;
			    }
			    else
			    {
			        mgg = 'nomig.jpg';
			    }
			    if(this.vrnt != '0')
			    {
				if(this.isact ==1)
				{
					stckprdlst +='<tr><td>'+this.cnt+'</td><td><div class="mypdx"><div class="figpa"><img src="../public/images/products/'+mgg+'" /></div><p class="nmob"><span>'+this.productname+'</span></p></div></td><td> <p class="nmob"> <span class="qtycon">'+this.qty+' </span> in Stock for '+this.vrnt+' variants </p><p class="nmob ysz">Total Sale <span class="ttshz">'+this.tosale+'</span></p></td><td><p class="nmob"><span class="enbls">Enabled</span></p></td><td><div class="cbhs_col act npd"><div class="action"><a href="addvarients?prdcod='+this.prodcode+'" target="_blank" class="viewic edit" title="More Information"> <img src="../public/images/das_icons/view_green.png" alt="edit"></a></div></div></td></tr>';
				}
				else
				{
					stckprdlst +='<tr><td>'+this.cnt+'</td><td><div class="mypdx"><div class="figpa"><img src="../public/images/products/'+mgg+'" /></div><p class="nmob"><span>'+this.productname+'</span></p></div></td><td> <p class="nmob"> <span class="qtycon">'+this.qty+' </span> in Stock for '+this.vrnt+' variants </p><p class="nmob ysz">Total Sale <span class="ttshz">'+this.tosale+'</span></p></td><td><p class="nmob"><span class="enbls" style="background:red;">Disabled</span></p></td><td><div class="cbhs_col act npd"><div class="action"><a href="addvarients?prdcod='+this.prodcode+'" target="_blank" class="viewic edit" title="More Information"> <img src="../public/images/das_icons/view_green.png" alt="edit"></a></div></div></td></tr>';
				}
			    }
			    if(this.vrnt == '0')
			    {
    				if(this.isact ==1)
    				{
    					stckprdlst +='<tr><td>'+this.cnt+'</td><td><div class="mypdx"><div class="figpa"><img src="../public/images/products/'+mgg+'" /></div><p class="nmob"><span>'+this.productname+'</span></p></div></td><td> <p class="nmob"> <span class="qtycon">'+this.qty+' </span> in Stock </p><p class="nmob ysz">Total Sale <span class="ttshz">'+this.tosale+'</span></p></td><td><p class="nmob"><span class="enbls">Enabled</span></p></td><td><div class="cbhs_col act npd"><div class="action"><a href="addvarients?prdcod='+this.prodcode+'" target="_blank" class="viewic edit" title="More Information"> <img src="../public/images/das_icons/view_green.png" alt="edit"></a></div></div></td></tr>';
    				}
    				else
    				{
    					stckprdlst +='<tr><td>'+this.cnt+'</td><td><div class="mypdx"><div class="figpa"><img src="../public/images/products/'+mgg+'" /></div><p class="nmob"><span>'+this.productname+'</span></p></div></td><td> <p class="nmob"> <span class="qtycon">'+this.qty+' </span> in Stock </p><p class="nmob ysz">Total Sale <span class="ttshz">'+this.tosale+'</span></p></td><td><p class="nmob"><span class="enbls" style="background:red;">Disabled</span></p></td><td><div class="cbhs_col act npd"><div class="action"><a href="addvarients?prdcod='+this.prodcode+'" target="_blank" class="viewic edit" title="More Information"> <img src="../public/images/das_icons/view_green.png" alt="edit"></a><a class="viewic edit" title="Delete" onclick="return deleteprodt('+"'"+this.prodcode+"'"+');" href="javascript:void(0);"> <img src="../public/images/das_icons/del_red.png" alt="ddelete"></a></div></div></td></tr>';
    				}
			    }
			}
			else
			{
				stckprdlst +='<tr><td colspan="5" style="color:red;text-align:center;">No Data Found </td></tr>'; 
			}
			$('#hidstckprdlstid').html(stckprdlst);
			$('#totstckprd').html('Total Product : '+this.prdcnt);
			$("#lodr").hide();
			$("#lodr_layr").hide();
		});
	},
	error: function(err){
		//alert('Check your internet connection!');
	}

	});
}


function addcoupon()
{
	var error = 0;
	var cmpgnname = $('#cmpgnname').val();
	var cpncode = $("#cpncode").val();
	var cat_id = $('#cat_id').val();
	var cpn_amnt = $('#cpn_amnt').val();
	var minamnt = $('#minamnt').val();
	var actcpn = $('#actcpn').val();
	var hidecpnid = $('#hidecpnid').val();
    if(cmpgnname =="")
	{
		error += 1;
		$("#cmpgnname").css("border", "1px solid red");
		$('#cmpgnname').val('');
	}
	else
	{
		$("#cmpgnname").css("border", "1px solid #8c9196");
	}
	if(cpncode == "")
	{
		error += 1;
		$("#cpncode").css("border", "1px solid red");
	}
	else
	{
		$("#cpncode").css("border", "1px solid #8c9196");
	}
    if(cat_id == "")
	{
		error += 1;
		$("#cat_id").css("border", "1px solid red");
	}
	else
	{
		$("#cat_id").css("border", "1px solid #8c9196");
	}
    if(cpn_amnt == "")
	{
		error += 1;
		$("#cpn_amnt").css("border", "1px solid red");
	}
	else
	{
		$("#cpn_amnt").css("border", "1px solid #8c9196");
	}
    if(minamnt == "")
	{
		error += 1;
		$("#minamnt").css("border", "1px solid red");
	}
	else
	{
		$("#minamnt").css("border", "1px solid #8c9196");
	}
	if(error > 0)
	{
	  return false;	
	}
	else
	{
    	$.ajax({
        	type: "POST",
        	crossDomain: true,
        	dataType: "json",
        	cache: false,
        	url: project_path+"add-coupon.php",
        	data: {cmpgnname:cmpgnname, cpncode:cpncode, cat_id:cat_id, cpn_amnt:cpn_amnt, minamnt:minamnt, actcpn:actcpn, hidecpnid:hidecpnid},
    		beforeSend: function()
    		{
    			$("#lodr").show();
    			$("#lodr_layr").show();
    		},
        	success: function(msg)
        	{
        		if(msg == 1)
        		{
    				$("#lodr").hide();
    				$("#lodr_layr").hide();
        			window.location.href="manage-coupon";		
        		}
        		if(msg == 2)
        		{
        		    if(hidecpnid !='')
        		    {
        		    	window.location.href="add-coupon?err=1&cpnid="+hidecpnid;	
        		    }
        		    else
        		    {
        		    	window.location.href="add-coupon?err=1";
        		    }
        		}
        	},
        	error: function(err)
        	{
        		alert(err);
        		//alert('Check your internet connection!');
        	}
    	});
	}
}

function loadcoupon(perPageCount, pageNumber)
{
	var cpnlst='';
	$.ajax({
    	type:"POST",
    	dataType:"JSON",
    	crossDomain: true,
    	cache: false,
    	url: project_path+"sltcouponlist.php",
    	data:{pageNumberr:pageNumber},	
    	ContentType:"application/json",
    	beforeSend: function()
    	{
    		$("#lodr").show();
    		$("#lodr_layr").show();
    	},
    	success: function(response)
    	{
    		$.each(response.cpnlist, function()
    		{
    			if(this.nodt !=0)
    			{
    			    if(this.cpnsts ==1)
    				{
    					cpnlst +='<tr><td><p class="nmob">'+this.cnt+'<span>'+this.createddate+'</span></p></td><td>'+this.cmpgn_name+'</td><td> <p class="nmob">'+this.cpn_code+'<span style="color:red;">'+this.cpnamnt+'</span></p></td><td>'+this.minamont+'</td><td>'+this.catid+'</td><td><span style="color:red;">'+this.cpncont+'</span></td><td><p class="nmob"><span class="enbls">Active</span></p></td><td><div class="cbhs_col act npd"><div class="action"><a class="viewic edit" title="Edit" href="add-coupon?cpnid='+this.cpn_id+'"> <img src="../public/images/das_icons/edit_green.png" alt="edit"> </a><a class="viewic edit" title="Delete" onclick="return  deleteprodt('+"'"+this.cpn_id+"'"+');" href="javascript:void(0);"> <img src="../public/images/das_icons/del_red.png" alt="ddelete"></a></div></div></td></tr>';
    				}
    				else
    				{
    					cpnlst +='<tr><td><p class="nmob">'+this.cnt+'<span>'+this.createddate+'</span></p></td><td>'+this.cmpgn_name+'</td><td> <p class="nmob">'+this.cpn_code+'<span style="color:red;">'+this.cpnamnt+'</span></p></td><td>'+this.minamont+'</td><td>'+this.catid+'</td><td><span style="color:red;">'+this.cpncont+'</span></td><td><p class="nmob"><span class="enbls"  style="background:red;">Inactive</span></p></td><td><div class="cbhs_col act npd"><div class="action"><a class="viewic edit" title="Edit" href="add-coupon?cpnid='+this.cpn_id+'"> <img src="../public/images/das_icons/edit_green.png" alt="edit"> </a><a class="viewic edit" title="Delete" onclick="return  deleteprodt('+"'"+this.cpn_id+"'"+');" href="javascript:void(0);"> <img src="../public/images/das_icons/del_red.png" alt="ddelete"></a></div></div></td></tr>';
    				}
    			}
    			else
    			{
    				cpnlst +='<tr><td colspan="5" style="color:red;text-align:center;">No Data Found </td></tr>'; 
    			}
    			$('#hidcpnlstid').html(cpnlst);
    			$("#lodr").hide();
    			$("#lodr_layr").hide();
    		});
    	},
    	error: function(err){
    		//alert('Check your internet connection!');
    	}

	});
}

function loadState(){
	var lst='';
	$.ajax({		
	type:"POST",
	dataType:"JSON",
	crossDomain: true,
	cache: false,
	url:project_path+"selectstate.php",
	ContentType:"application/json",			
	success: function(response){	
	$.each(response.arslctstate, function() {		
		lst +='<option value="'+this.state+'">'+this.state+'</option>';
		$('#state').html('<option value="">Select State---</option>'+lst);			
	});	
	},
	error: function(err){
		//alert('Check your internet connection!');
	}
	});
}
function adddeliverycharges()
{
	var state = $("#state :selected").val();
	var unit = $("#unt :selected").val();
	var price = $("#price").val();
	var error = 0;
	if($("#state :selected").val()=="")
	{
		error += 1;
		$("#state").css("border", "1px solid red");
		$('#state').val('');
	}
	else
	{
		$("#state").css("border", "1px solid #dce0eb");
	}
	if($("#unt :selected").val()=="")
	{
		error += 1;
		$("#unt").css("border", "1px solid red");
		$('#unt').val('');
	}
	else
	{
		$("#unt").css("border", "1px solid #dce0eb");
	}
	if($("#price").val()=="")
	{
		error += 1;
		$("#price").css("border", "1px solid red");
		$('#price').val('');
	}
	else
	{
		$("#price").css("border", "1px solid #dce0eb");
	}
	if(error >0)
	{
		return false;
	}
	else
	{
		$.ajax({		
		type:"POST",
		dataType:"JSON",
		crossDomain: true,
		cache: false,
		url: project_path+"adddeliverycharges.php",
		data:{stat:state,unite:unit,prc:price},
		ContentType:"application/json",
		success: function(response){	
			if(response == "1")
			{
				$('#delcharg').html('Delivery charges added successfully!');
				$("#state").prop("selectedIndex",0);
				$("#unt").prop("selectedIndex",0);
    			$("#price").val('');
    			setTimeout(function(){ $('#delcharg').hide();$('.dtlxleadax').toggleClass("instclosex");}, 1500);
			}
			if(response == "2")
			{
				$('#delcharg').html('<span style="color:red;">Duplicate Entry!</span>');
				setTimeout(function(){ $('#delcharg').hide();$('.dtlxleadax').toggleClass("instclosex");}, 1500);
			}	
           fetchdeliverycharges();
        	
		},
		error: function(err){
			//alert('Check your internet connection!');
		}
		});
	}
}

function fetchdeliverycharges(perPageCount, pageNumber)
{
	//alert("aaa");
	var a=1;
	//var usrname = $("#usretype").val();
	var delcharglist='';
	$.ajax({
	type:"POST",
	dataType:"JSON",
	crossDomain: true,
	cache: false,
	url: project_path+"selectdeliverychrges.php",
	data:{pageNumberr:pageNumber},
	ContentType:"application/json",
	beforeSend: function()
	{
	  $("#lodr").show();
	  $("#lodr_layr").show();
	},
	success: function(response)
	{
		 $.each(response.arslctdelchargs, function() 
		 { 
            if(this.nodtdelchargs == "1")
		   { 
		       if(this.mxunitt ==50000)
		       {
		           var fnlwgt='above';
		       }
		       else
		       {
		           var fnlwgt=this.mxunitt;
		       }
			    delcharglist +='<tr><td>'+a+'</td><td><p class="nmob">'+this.sttate+'</p></td><td><p class="nmob">'+this.mnunitt+' - '+fnlwgt+'</p></td><td><p class="nmob"><span>'+this.pricee+'</span></p></td><td><div class="action"><a class="viewic edit" title="Delete"  href="Javascript:void(0);" onclick="deletedelivrychrgs('+"'"+this.dcidd+"'"+');"> <img src="../public/images/das_icons/del_red.png" alt="ddelete"></a></div></td></tr>';
				a++;
		   }
           if(this.nodtdelchargs == "0")
		   {
			  delcharglist +='<tr><td colspan="7">No data found...</td></tr>';
		   } 	   
			$('#delcharglistid').html(delcharglist);
		 }); 
		$("#lodr").hide();
		$("#lodr_layr").hide();
	},
	error: function(err)
	{
	//	alert('Check your internet connection!');
	}
	});
}

function countdeliverycharges()
{
	$.ajax({
	type:"POST",
	dataType:"JSON",
	crossDomain: true,
	cache: false,
	url: project_path+"countdelchargs.php",
	ContentType:"application/json",
	success: function(responsee){
	$('#delchargesidlist').pagination({
        items: parseInt(responsee.msg),
        itemsOnPage: 15,
        cssStyle: 'light-theme'
        });
	},
	error: function(err){
	//	alert('Check your internet connection!');
	}
	});
}

function deletedelivrychrgs(dlchrg)
{
	var x = confirm("Are you sure!");
	if(x)
	{
		$.ajax({
			type:"POST",
			dataType:"JSON",
			crossDomain: true,
			cache: false,
			url: project_path+"deletedeliverychrgs.php",	
			data: {dlchrgs:dlchrg},
			ContentType:"application/json",
			beforeSend: function()
			{
			  $("#lodr").show();
			  $("#lodr_layr").show();
			},		
			success: function(response)
			{
				if(response == "1")
				{				
					fetchdeliverycharges(15,1);
				}
				$("#lodr").hide();
			$("#lodr_layr").hide();
			},
			error: function(err){
				//alert('Check your internet connection!');
			}
		});
	}
	else
	{
		return false;
	}
}

function clkdelchargs()
{
	$("#state").prop("selectedIndex",0);
	$("#unt").prop("selectedIndex",0);
    $("#price").val('');
}
function ispopular(prdid,ispop)
{
    var hidepage=$('#hidepageNumber').val();
	var x = confirm("Are you sure!");
	if(x)
	{
		$.ajax({
			type:"POST",
			dataType:"JSON",
			crossDomain: true,
			cache: false,
			url: project_path+"ispopular.php",	
			data: {prodid:prdid,ispoplar:ispop},
			ContentType:"application/json",
			beforeSend: function()
			{
			  $("#lodr").show();
			  $("#lodr_layr").show();
			},		
			success: function(response)
			{
				if(response == "1")
				{				
					loadproduct(15,hidepage);
				}
				$("#lodr").hide();
				$("#lodr_layr").hide();
			},
			error: function(err){
				//alert('Check your internet connection!');
			}
		});
	}
	else
	{
		return false;
	}
}

function loadevent(perPageCount, pageNumber)
{
	var filter_year = $('#filter_year').val();
	var filter_month = $('#filter_month').val();
    var lst = '';
	var cnt=1;
    $.ajax({
		type:"POST",
		dataType:"JSON",
		crossDomain: true,
		cache: false,
		url: project_path+"loadevent.php",
		data:{pageNumberr:pageNumber,filtermonth:filter_month, filteryear:filter_year},	
		ContentType:"application/json",
		beforeSend: function()
		{
			$("#lodr").show();
			$("#lodr_layr").show();
		},
		success: function(response)
		{
			$.each(response.araeventlist, function()
			{
				if(this.nodt =="1")
				{
					if(this.eventtype==1)
					{
						var evntyp='Foundation Fest';
					}
					else if(this.eventtype==2)
					{
						var evntyp='Kadambini Literary Fest';
					}
					else
					{
					   var evntyp=''; 
					}
					lst +='<tr><td><span>'+cnt+'</span></td><td><span class="blue">'+this.createddate+'</span></td><td><p class="nmob"><span>'+evntyp+'</span></p></td><td><p class="nmob"><span>'+this.eventtitle+'</span></p></td><td><div class="cbhs_col act nlnx"><div class="action"><a class="viewic edit" title="Edit" href="edit-events?eventid='+this.evnt_id+'"> <img src="../public/images/das_icons/edit_green.png" alt="edit"> </a><a class="viewic edit" title="Delete" href="#" onclick="deleteevent('+"'"+this.evnt_id+"'"+')"> <img src="../public/images/das_icons/del_red.png" alt="delete"></a></div></div></td></tr>';
				}
				else
				{
					lst +='<tr><td colspan="6" style="color:red;text-align:center;">No list found!</td></tr>'; 
				}
				++cnt;
			});
			$('#eventlistid').html(lst);
			$("#lodr").hide();
			$("#lodr_layr").hide();
		},
		error: function(err){
			//alert('Check your internet connection!');
		}
	});
}

function deleteevent(eventid)
{
	var msg=confirm('Are you sure?');
	if(msg)
	{
		$.ajax({
			type: "POST",
			crossDomain: true,
			dataType: "json",
			cache: false,
			url: project_path+"deleteevent.php",
			data: {evntid:eventid},	
			success: function(msg)
			{
				if(msg == "1")
				{
					loadevent(15,1);
				}
			},
			error: function(err)
			{
				alert(JSON.stringify(err));
			}
		});
	}
}


function loadsubscription(perPageCount, pageNumber)
{
	var prdlst='';
    var mgg='';
    var cnt=1;
	$.ajax({
		type:"POST",
		dataType:"JSON",
		crossDomain: true,
		cache: false,
		url: project_path+"sltsubscriptionlist.php",
		data:{pageNumberr:pageNumber},	
		ContentType:"application/json",
		beforeSend: function()
		{
			$("#lodr").show();
			$("#lodr_layr").show();
		},
		success: function(response)
		{
			$.each(response.sbscrptnlist, function()
			{
				if(this.nodt !=0)
				{
					if(this.prdimage !='')
					{
						mgg = this.prdimage;
					}
					else
					{
						mgg = 'nomig.jpg';
					}
					prdlst +='<tr><td>'+cnt+' <br><span>'+this.crtdat+'</span></p></td><td><div class="mypdx"><div class="figpa"><img src="../public/images/products/'+mgg+'" /></div><p class="nmob"><span style="color:#0241cf;">'+this.subscrptntitle+'</span><span>'+this.catid+'</span></p></div></td><td> <p class="nmob"> <span class="">'+this.planfor+'</span></p></td><td> <p class="nmob"> <span class="">'+this.dration+' Year</span></p></td><td> <p class="nmob"> <span class="">'+this.softprice+'</span></p></td><td> <p class="nmob"> <span class="">'+this.hardprice+'</span></p></td><td><div class="cbhs_col act npd"><div class="action"><a class="viewic edit" title="Edit" href="add-subscription?edited='+this.sbscid+'"> <img src="../public/images/das_icons/edit_green.png" alt="edit"> </a><a class="viewic edit" title="Delete" onclick="deletesubscription('+"'"+this.sbscid+"'"+');" href="javascript:void(0);"> <img src="../public/images/das_icons/del_red.png" alt="ddelete"></a></div></div></td></tr>';
				}
				else
				{
					prdlst +='<tr><td colspan="5" style="color:red;text-align:center;">No Data Found !</td></tr>'; 
				}
				$('#hidprdlstid').html(prdlst);
				$("#lodr").hide();
				$("#lodr_layr").hide();
			    cnt++;
			});
		},
		error: function(err){
			//alert('Check your internet connection!');
		}
	});
}
function countsubscription()
{
	$.ajax({
	type:"POST",
	dataType:"JSON",
	crossDomain: true,
	cache: false,
	url: project_path+"countsubscription.php",
	ContentType:"application/json",
	success: function(responsee){
	$('#pagprdlst').pagination({
        items: parseInt(responsee.msg),
        itemsOnPage: 15,
        cssStyle: 'light-theme'
        });
	},
	error: function(err){
		//alert('Check your internet connection!');
	}
	});
}
function deletesubscription(pcdd)
{
    var u = confirm("Are you sure!");
    if(u)
    {
        $.ajax({
        	type:"POST",
        	dataType:"JSON",
        	crossDomain: true,
        	cache: false,
        	url: project_path+"deletesubscription.php",
        	data:{subscid:pcdd},	
        	ContentType:"application/json",
        	success: function(response)
        	{
        	   if(response == "1")
        	   {
        	       loadsubscription();
        	   }
        	},
        	error: function(err){
        		//alert('Check your internet connection!');
        	}
    	});
    }
    else
    {
        return false;
    }
}

function loadstorycomment(perPageCount, pageNumber)
{
    var cmntlst = '';
    $.ajax({
    	type:"POST",
    	dataType:"JSON",
    	crossDomain: true,
    	cache: false,
    	url: project_path+"loadstorycomment.php",
    	data:{pageNumberr:pageNumber},	
    	ContentType:"application/json",
    	beforeSend: function()
    	{
    		$("#lodr").show();
    		$("#lodr_layr").show();
    	},
    	success: function(response)
    	{
    		$.each(response.cmntstorylist, function()
    		{
    			if(this.nodt =="1")
    			{
    				cmntlst +='<tr><td><span>'+this.cnt+'</span><br><span class="blue">'+this.created_date+'</span></td><td><p class="nmob"><span>'+this.storynam+'</span></p></td><td><p class="nmob"><span>'+this.fulnam+'</span><span class="blue">'+this.mobl+'</span></p></td><td class="nmob"><span class="enbls" style="background: '+this.stscolor+';">'+this.sts+'</span></td><td><div class="cbhs_col act"><div class="action"><a class="viewic edit" style="background:transparent;" title="view" onclick="loadcomntdtl('+"'"+this.cmntid+"'"+');" href="javascript:void(0)"> <img src="../public/images/das_icons/view_green.png" alt="view"></a><a class="viewic edit" title="Delete" onclick="deletecomntstory('+"'"+this.cmntid+"'"+');" href="javascript:void(0);"> <img src="../public/images/das_icons/del_red.png" alt="ddelete"></a><a class="viewic edit" style="background:transparent;" title="view" href="edit-story-comment?strcmntid='+this.cmntid+'"> <img src="../public/images/das_icons/edit_green.png" alt="view"></a></div></div></td></tr>';
    			}
    			else
    			{
    				cmntlst +='<tr><td colspan="6" style="color:red;text-align:center;">No list found!</td></tr>'; 
    			}
    		});
    		$('#comntlistid').html(cmntlst);
    		$("#lodr").hide();
    		$("#lodr_layr").hide();
    	},
    	error: function(err){
    		//alert('Check your internet connection!');
    	}
	});
}


function loadcomntdtl(cmntid)
{
	$('.xyssssx').toggleClass("closebcatx");
	$('body').toggleClass("vwbodx");
    $.ajax({
	type:"POST",
	dataType:"JSON",
	crossDomain: true,
	cache: false,
	url: project_path+"loadcomntdtl.php",
	data:{comntid:cmntid},	
	ContentType:"application/json",
	beforeSend: function()
	{
		$("#lodr").show();
		$("#lodr_layr").show();
	},
	success: function(response)
	{
		$.each(response.cmntstorydtl, function()
		{
			$("#strnam").html('<strong>Story: </strong>'+this.storynam);
			$("#nam").html('<strong>Name: </strong>'+this.fulnam);
			$("#myqmob").html('<strong>Mobile: </strong>'+this.mobl);
		    $("#Comment").html('<strong>Comment: </strong>'+this.coment);
		});
		
		$("#lodr").hide();
		$("#lodr_layr").hide();
	},
	error: function(err){
		//alert('Check your internet connection!');
	}

	});
}
function deletecomntstory(comnt_id)
{
	var u = confirm("Are you sure!");
    if(u)
    {
        $.ajax({
    	type:"POST",
    	dataType:"JSON",
    	crossDomain: true,
    	cache: false,
    	url: project_path+"deletecomntstory.php",
    	data:{comnntid:comnt_id},	
    	ContentType:"application/json",
    	success: function(response)
    	{
    	   if(response == "1")
    	   {
    	       loadstorycomment();
    	   }
    	},
    	error: function(err){
    		//alert('Check your internet connection!');
    	}
    
    	});
    }
    else
    {
        return false;
    }
}

function loadapanankamancha(perPageCount, pageNumber)
{
    var lst = '';
    $.ajax({
    	type:"POST",
    	dataType:"JSON",
    	crossDomain: true,
    	cache: false,
    	url: project_path+"loadapanankamancha.php",
    	data:{pageNumberr:pageNumber},	
    	ContentType:"application/json",
    	beforeSend: function()
    	{
    		$("#lodr").show();
    		$("#lodr_layr").show();
    	},
    	success: function(response)
    	{
    		$.each(response.manchalist, function()
    		{
    			if(this.nodt =="1")
    			{
    				lst +='<tr><td><span>'+this.cnt+'</span><br><span class="blue">'+this.created_date+'</span></td><td><p class="nmob"><span>'+this.ful_name+'</span><span class="blue">'+this.email+'</span></p></td><td><span>'+this.purpose+'</span></td><td class="nmob"><span class="enbls" style="background: '+this.stscolor+';">'+this.sts+'</span></td><td><div class="cbhs_col act"><div class="action"><a class="viewic edit" style="background:transparent;" title="view" onclick="loadmanchadtl('+"'"+this.cont_id+"'"+');" href="javascript:void(0)"> <img src="../public/images/das_icons/view_green.png" alt="view"></a><a class="viewic edit" title="Delete" onclick="deletemanchadtl('+"'"+this.cont_id+"'"+');" href="javascript:void(0);"> <img src="../public/images/das_icons/del_red.png" alt="delete"></a></div></div></td></tr>';
    			}
    			else
    			{
    				lst +='<tr><td colspan="6" style="color:red;text-align:center;">No list found!</td></tr>'; 
    			}
    		});
    		$('#manchlistid').html(lst);
    		$("#lodr").hide();
    		$("#lodr_layr").hide();
    	},
    	error: function(err){
    		//alert('Check your internet connection!');
    	}
	});
}

function loadmanchadtl(cont_id)
{
	$('.xyssssx').toggleClass("closebcatx");
	$('body').toggleClass("vwbodx");
    $.ajax({
		type:"POST",
		dataType:"JSON",
		crossDomain: true,
		cache: false,
		url: project_path+"loadmanchadtl.php",
		data:{contid:cont_id},	
		ContentType:"application/json",
		beforeSend: function()
		{
			$("#lodr").show();
			$("#lodr_layr").show();
		},
		success: function(response)
		{
			$.each(response.contactusdtl, function()
			{
				$("#dtlpnam").html('Details of '+this.ful_name);
				$("#nam").html('<strong>Name: </strong>'+this.ful_name);
				$("#myemail").html('<strong>User Email: </strong>'+this.email);
				$("#myqmob").html('<strong>User Purpose: </strong>'+this.purpose);
				$("#Message").html('<strong>Message: </strong>'+this.Message);
				if(this.fil !='')
				{
					$("#fileid").html('<strong>File: </strong><a href="../public/images/uploads/'+this.fil+'" target="_blank">View</a>');
				}
				$('#Contact_Id').val(this.cont_id);
				$("#stsid").val(this.is_sts);
			
			});
			
			$("#lodr").hide();
			$("#lodr_layr").hide();
		},
		error: function(err){
			//alert('Check your internet connection!');
		}
	});
}

function updatemanchastatus()
{
	var statusid = $("#stsid").val();
	var Contact_Id = $("#Contact_Id").val();
	$.ajax({		
		type:"POST",
		dataType:"JSON",
		crossDomain: true,
		cache: false,
		url: project_path+"updatemanchastatus.php",
		data:{statusid:statusid,Contact_Id:Contact_Id},
		ContentType:"application/json",
		beforeSend: function()
    	{
    	  $("#lod").show();
    	  $("#lodr_lay").show();
    	},
		success: function(response){
			if(response == "1")
			{
		    	$('#succmsg').show();
				setTimeout(function(){ $('#succmsg').hide();$('.dtlxleadax').toggleClass("instclosex");}, 1200);
				loadapanankamancha();
			}
			
			$("#lod").hide();
    	    $("#lodr_lay").hide();
		},
		error: function(err){
			//alert('Check your internet connection!');
		}
	});
}

function deletemanchadtl(cont_id)
{
	var u = confirm("Are you sure!");
    if(u)
    {
        $.ajax({
    	type:"POST",
    	dataType:"JSON",
    	crossDomain: true,
    	cache: false,
    	url: project_path+"deletemanchadtl.php",
    	data:{contid:cont_id},	
    	ContentType:"application/json",
    	success: function(response)
    	{
    	   if(response == "1")
    	   {
    	      loadapanankamancha();
    	   }
    	},
    	error: function(err){
    		//alert('Check your internet connection!');
    	}
    
    	});
    }
    else
    {
        return false;
    }
}