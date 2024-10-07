<?php 
include("../app/model/config.php");
  
include_once 'Pagination.class.php';
$baseURL = 'filtervideogallery.php';
$offset = !empty($_POST['page'])?$_POST['page']:0;
$limit = 20;

$query = $conn->query("SELECT COUNT(*) as rowNum FROM $tbl_video");
$resultr  = $query->fetch_assoc();
$rowCount= $resultr['rowNum'];
$pagConfig = array(
	'baseURL' => $baseURL,
	'totalRows' => $rowCount,
	'perPage' => $limit,
	'currentPage' => $offset,
	'contentDiv' => 'contentdiv',
	'link_func' => 'filtervideogallery'
);
$pagination =  new Pagination($pagConfig);
$ResVideo = $conn->query("SELECT * FROM $tbl_video ORDER BY vidid DESC LIMIT $offset,$limit");
?>
<table class="apptbl_area" style="margin-bottom: 15px;">
	<thead>
	  <tr>
	  <td width="1%">Sl</td>
	  <td width="5%">Date</td>
	  <td width="10%">Odia Title</td>
	  <td width="10%">Eng. Title</td>
	  <td width="10%">Image</td>
	  <td width="5%" align="center">Action</td>
	  </tr>
	</thead>
	<tbody>
	<?php
	if($ResVideo->num_rows > 0)
	{
		while($ResultVideo=$ResVideo->fetch_object())
		{
		?>
		  <tr>
			<td><span><?php echo ++$i;?></span></td>
			<td><span class="blue"><?php echo date('dS M y',strtotime($ResultVideo->created_date));?></span></td>
			<td>
				<p class="nmob"><span><?php echo $ResultVideo->odia_title;?></span></p>
			</td>
			<td>
				<p class="nmob"><span><?php echo $ResultVideo->eng_title;?></span></p>
			</td>
			<td>
				<p class="nmob"><span><img src="../public/images/video-gallery/<?php echo $ResultVideo->thumbnail;?>" style="height:60px;width:100px" alt="edit"></span></p>
			</td>
			<td>
				<div class="cbhs_col act nlnx">
					<div class="action">
						<a class="viewic edit" title="Edit" href="add-video?edited=<?php echo $ResultVideo->vidid;?>">
						<img src="../public/images/das_icons/edit_green.png" alt="edit"> </a>
						<a class="viewic edit" title="Delete" href="#" onclick="deletevideogallery('<?php echo $ResultVideo->vidid;?>','<?php echo $ResultVideo->thumbnail;?>','<?php echo $ResultVideo->video;?>')"> <img src="../public/images/das_icons/del_red.png" alt="delete"></a>
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