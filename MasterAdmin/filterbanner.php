<?php 
include("../app/model/config.php");
  
include_once 'Pagination.class.php';
$baseURL = 'filterbanner.php';
$offset = !empty($_POST['page'])?$_POST['page']:0;
$limit = 20;

$query = $conn->query("SELECT COUNT(*) as rowNum FROM $tbl_banner");
$resultr  = $query->fetch_assoc();
$rowCount= $resultr['rowNum'];
$pagConfig = array(
	'baseURL' => $baseURL,
	'totalRows' => $rowCount,
	'perPage' => $limit,
	'currentPage' => $offset,
	'contentDiv' => 'contentdiv',
	'link_func' => 'filterbanner'
);
$pagination =  new Pagination($pagConfig);
$Resbanner = $conn->query("SELECT * FROM $tbl_banner ORDER BY bnrid DESC LIMIT $offset,$limit");
?>
<table class="apptbl_area" style="margin-bottom: 15px;">
	<thead>
	  <tr>
	  <td width="1%">Sl</td>
	  <td width="5%">Date</td>
	  <td width="10%">Banner</td>
	  <td width="5%" align="center">Action</td>
	  </tr>
	</thead>
	<tbody>
	<?php
	if($Resbanner->num_rows > 0)
	{
		while($Resultbanner=$Resbanner->fetch_object())
		{
		?>
		  <tr>
			<td><span><?php echo ++$i;?></span></td>
			<td><span class="blue"><?php echo date('dS M y',strtotime($Resultbanner->created_date));?></span></td>
			<td>
				<p class="nmob"><span><img src="../public/images/banner/<?php echo $Resultbanner->banner;?>" style="height:60px;width:100px" alt="banner"></span></p>
			</td>
			<td>
				<div class="cbhs_col act nlnx">
					<div class="action">
						<a class="viewic edit" title="Edit" href="manage-banner?edited=<?php echo $Resultbanner->bnrid;?>">
						<img src="../public/images/das_icons/edit_green.png" alt="edit"> </a>
						<a class="viewic edit" title="Delete" href="#" onclick="deletebanner('<?php echo $Resultbanner->bnrid;?>','<?php echo $Resultbanner->banner;?>')"> <img src="../public/images/das_icons/del_red.png" alt="delete"></a>
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