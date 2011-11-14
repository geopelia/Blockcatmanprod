<script type="text/javascript">
//<![CDATA[
$(document).ready(function(){
});
function filtrarCat(qStr)  
{
var aler='cat=' + qStr;
$.ajax({  
	type: "GET",  
	url: baseDir + 'category.php',
	async: true,
	cache: false,
	data: aler,  
	dataType: "text/html",
	success: function(resultado) {
		//alert(resultado);		
		$('#manufacturer_list').html(resultado);
		$('#products_list').html('<option value="-1">Todos los Productos</option>');
	},
	error: function(XMLHttpRequest, textStatus, errorThrown) {alert("ERROR: no se puede determinar fabricantes \n\nDetails:\nError thrown: " + XMLHttpRequest + "\n" + 'Text status: ' + textStatus);} 	  
});
}
function filtrarFab(qStr)  
{
var aler='fab=' + qStr + '&catg=' + $("#categori_list").val();
//alert(aler);
$.ajax({  
	type: "GET",  
	url: baseDir + 'manufacturer.php',
	async: true,
	cache: false,
	data: aler,  
	dataType: "text/html",
	success: function(resultado) {
		//alert(resultado);
		$('#products_list').html(resultado);
	},
	error: function(XMLHttpRequest, textStatus, errorThrown) {alert("ERROR: no se puede determinar productos \n\nDetails:\nError thrown: " + XMLHttpRequest + "\n" + 'Text status: ' + textStatus);} 	  
});
}
//]]>
</script>