<?php 
include("../app/model/config.php");
  
include_once 'Pagination.class.php';
$baseURL = 'filteraward.php';
$offset = !empty($_POST['page'])?$_POST['page']:0;
$limit = 20;

$query = $conn->query("SELECT COUNT(*) as rowNum FROM $tbl_award");
$resultr  = $query->fetch_assoc();
$rowCount= $resultr['rowNum'];
$pagConfig = array(
	'baseURL' => $baseURL,
	'totalRows' => $rowCount,
	'perPage' => $limit,
	'currentPage' => $offset,
	'contentDiv' => 'contentdiv',
	'link_func' => 'filteraward'
);
$pagination =  new Pagination($pagConfig);
$Resaward = $conn->query("SELECT * FROM $tbl_award ORDER BY awrdid DESC LIMIT $offset,$limit");
?>
<table class="apptbl_area" style="margin-bottom: 15px;">
	<thead>
	  <tr>
	  <td width="5%">Sl/Date</td>
	  <td width="5%">Award</td>
	  <td width="10%">Awardee</td>
	  <td width="10%">DOB</td>
	  <td width="10%">Award Year</td>
	  <td width="10%">Image</td>
	  <td width="5%" align="center">Action</td>
	  </tr>
	</thead>
	<tbody>
	<?php
	if($Resaward->num_rows > 0)
	{
		while($Resultaward=$Resaward->fetch_object())
		{
		?>
		  <tr>
			<td><p class="nmob"><span><?php echo ++$i;?></span><span class="blue"><?php echo date('dS M y',strtotime($Resultaward->created_date));?></span></p></td>
			<td>
				<p class="nmob"><span><?php echo $Resultaward->award_id;?></span></p>
			</td>
			<td>
				<p class="nmob"><span><?php echo $Resultaward->awardee_name_eng;?></span></p>
			</td>
			<td>
				<p class="nmob"><span><?php echo $Resultaward->dob;?></span></p>
			</td>
			<td>
				<p class="nmob"><span><?php echo $Resultaward->award_year;?></span></p>
			</td>
			<td>
				<p class="nmob">
					<span><img src="../public/images/award-profile/<?php echo $Resultaward->image;?>" style="height:60px;width:100px" ></span>
				</p>
			</td>
			<td>
				<div class="cbhs_col act nlnx">
					<div class="action">
						<a class="viewic edit" title="Edit" href="add-award?edited=<?php echo $Resultaward->awrdid;?>">
						<img src="../public/images/das_icons/edit_green.png" alt="edit"> </a>
						<a class="viewic edit" title="Delete" href="#" onclick="deleteaward('<?php echo $Resultaward->awrdid;?>','<?php echo $Resultaward->image;?>')"> <img src="../public/images/das_icons/del_red.png" alt="delete"></a>
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