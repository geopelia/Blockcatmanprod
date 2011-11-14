<div class="acceder">
	<h2>Solo en tres pasos encuentras los productos deseados <span></span></h2>
		<img src="{$img_dir}caja_1.png" width="36" height="36" alt="1">
		{if $categorias}
		<form action="fillManufacturers.php" method="get">		
			<select id="categori_list" name="catg1" onchange="filtrarCat(this.value)" class="round_sb anchop">
			<option value="-1">{l s='Categorias' mod='blockcatprodmod'}</option>
			{foreach from=$categorias item=foo}
				<option value="{$foo.id_category}">{$foo.name}</option>
			{/foreach}
			</select>
		{/if}
		<img src="{$img_dir}caja_2_gris.png" width="36" height="36" alt="2">
		<select name="catg2" class="round_sb anchop" onchange="filtrarFab(this.value)" id="manufacturer_list"  >
			<option value="-1">Todos los Fabricantes</option>				
		</select>
		<img src="{$img_dir}caja_3_gris.png" width="36" height="36" alt="3">
		<select name="catg3" class="round_sb anchop" id="products_list">
			<option value="-1">Todos los Productos</option>
		</select>
		</form>
		
</div>
