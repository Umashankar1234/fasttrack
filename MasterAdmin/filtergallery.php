<?php 
include("../app/model/config.php");
  
include_once 'Pagination.class.php';
$baseURL = 'filtergallery.php';
$offset = !empty($_POST['page'])?$_POST['page']:0;
$limit = 20;

$query = $conn->query("SELECT COUNT(*) as rowNum FROM $tbl_gallery");
$resultr  = $query->fetch_assoc();
$rowCount= $resultr['rowNum'];
$pagConfig = array(
	'baseURL' => $baseURL,
	'totalRows' => $rowCount,
	'perPage' => $limit,
	'currentPage' => $offset,
	'contentDiv' => 'contentdiv',
	'link_func' => 'filtergallery'
);
$pagination =  new Pagination($pagConfig);
$ResGallery = $conn->query("SELECT * FROM $tbl_gallery ORDER BY imgid DESC LIMIT $offset,$limit");
?>
<table class="apptbl_area" style="margin-bottom: 15px;">
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
	  <tr>
		<td colspan="4" style="color:red;text-align:center;">No list found !</td>
	  </tr>
  <?php } ?>
</tbody>
</table>
<?php echo $pagination->createLinks();?>