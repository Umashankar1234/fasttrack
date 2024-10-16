<!--RIGHT CONTENT AREA START-->
<section class="mypouter_area proecom">
  <div class="mypinner_area">
    <div class="protitle rtba">
      <h3>All Gallery </h3>
      <div class="newadds">
		<a class="addbtnn" href="add-gallery">
		  <img class="icoplus dflt" src="../public/images/das_icons/addnew.png" alt="ico"> 
		  <img class="icoplus hvr" src="../public/images/das_icons/addnewa.png" alt="ico"> Add Gallery</a>
	  </div>
    </div>
    <div class="pmenuarea_outer gray">
      <div class="table_area_list prolist">
        <div class="itlisths">
          <div class="table_area_list" id="contentdiv">
            <table class="apptbl_area minsto">
              <thead>
                <tr>
                  <td width="1%">Sl</td>
                  <td width="5%">Date</td>
                  <td width="10%">Eng. Title</td>
                  <td width="10%">Odia Title</td>
                  <td width="10%">Image</td>
                  <td width="5%" align="center">Action</td>
                </tr>
              </thead>
              <tbody>
			  <?php 
				include_once 'Pagination.class.php';
				$baseURL = 'filtergallery.php';
				$limit = 20;
				$query = $conn->query("SELECT COUNT(*) as rowNum FROM $tbl_gallery");
				$result  = $query->fetch_assoc();
				$rowCount= $result['rowNum'];

				$pagConfig = array(
					'baseURL' => $baseURL,
					'totalRows' => $rowCount,
					'perPage' => $limit,
					'contentDiv' => 'contentdiv',
					'link_func' => 'filtergallery'
				);
				$pagination =  new Pagination($pagConfig);
			  $ResGallery=$conn->query("SELECT * FROM $tbl_gallery ORDER BY imgid DESC LIMIT $limit");
			  if($ResGallery->num_rows > 0)
			  {
				  while($ResultGallery=$ResGallery->fetch_object())
				  {
				  ?>
					  <tr>
						<td><span><?php echo ++$i;?></span></td>
						<td><span class="blue"><?php echo date('dS M y',strtotime($ResultGallery->created_date));?></span></td>
						<td>
							<p class="nmob"><span><?php echo $ResultGallery->gallery_title;?></span></p>
						</td>
						<td>
							<p class="nmob"><span><?php echo $ResultGallery->odia_title;?></span></p>
						</td>
						<td>
							<p class="nmob"><span><img src="../public/images/photo-gallery/<?php echo $ResultGallery->image;?>" style="height:60px;width:100px" alt="edit"></span></p>
						</td>
						<td>
							<div class="cbhs_col act nlnx">
								<div class="action">
									<a class="viewic edit" title="Edit" href="add-gallery?edited=<?php echo $ResultGallery->imgid;?>">
									<img src="../public/images/das_icons/edit_green.png" alt="edit"> </a>
									<a class="viewic edit" title="Delete" href="#" onclick="deletegallery('<?php echo $ResultGallery->imgid;?>','<?php echo $ResultGallery->image;?>')"> <img src="../public/images/das_icons/del_red.png" alt="delete"></a>
								</div>
							</div>
						</td>
					</tr>
			  <?php } } else { ?>
				<tr><td colspan="6" style="color:red;text-align:center;">No list found!</td></tr>
			  <?php } ?>
              </tbody>
            </table>
			<?php echo $pagination->createLinks();?> 
          </div>
		  <input type="hidden" id="pagenum">
        </div>
      </div>
    </div>
  </div>
</section>
<!--WARNING POPUP DELTVARNT-->
<div id="dltord"></div>
<!--WARNING POPUP DELTVARNT END--> 
<!--RIGHT CONTENT AREA END-->
</section>
<section class="loader_outer" id="lodr">
  <div class="lader_layer" id="lodr_layr">
    <div class="loaderbox">
      <div class="ldio-k08to6a49h">
        <div></div>
      </div>
    </div>
  </div>
</section>
<!--CONTENT AREA END--> 
<script src="<?php echo $projectPath;?>public/js/admin_js/jquery.min.js" type="text/javascript"></script>
<script>  
function filtergallery(page_num)
{
    $('#pagenum').val(page_num);
	page_num = page_num?page_num:0;
	$.ajax({
		type: 'POST',
		url: 'filtergallery.php',
		data:'page='+page_num,
		beforeSend: function () {
			$('.lodr').show();
		},
		success: function (html) {
			$('#contentdiv').html(html);
			$('.lodr').fadeOut("slow");
		}
	});
} 
function deletegallery(imgid,image)
{
	var msg=confirm('Are you sure ?');
	if(msg){
		var page_num=$('#pagenum').val();
		$.ajax({
			type: 'POST',
			url: 'deletegallery.php',
			data:'imgid='+imgid+'&delimage='+image,
			beforeSend: function () {
			},
			success: function (html) {
				filtergallery(page_num);
			}
		});
	}
} 
</script>   
<script>   
    $(document).ready(function(){		
	$('.ccxyszy').click (function() {	
      $('.xyssssx').toggleClass("closebcatx");
  	  $('body').toggleClass("vwbodx");
    });
  });
</script> 

<!--drop submenu--> 

<script>
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


//mobile menu
	$(".main_menu_outer").hide(); 
	$(".menu_toggle_mob").click(function(){$(".main_menu_outer").slideToggle().toggleClass("activi");$(".menu_toggle_mob").toggleClass("active"); return false; });

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
  $(function() {
    $( ".accordion" ).accordion({heightStyle: "content", collapsible: true, active: false, animate: {
        duration: 500
    }});
  });
  
</script>
</body>
</html>