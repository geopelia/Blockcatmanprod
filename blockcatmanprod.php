<?php
class BlockCatManProd extends Module{

function __construct()
{ 
$this->name ='blockcatmanprod';
$this->tab = 'front_office_features';
$this->version = 0.2;
$this->author = 'atilio';
$this->need_instance = 0;
parent::__construct();
$this->displayName = $this->l('Dinamic products filter ');
$this->description = $this->l('Add a module to search a product by category and manufacturer');
}

function install(){
	if(parent::install() == false OR !$this->registerHook('home'))
		return false;
	return true;
}

function hookHome($params)
{
	global $smarty,$cookie;
	$id_lang = (int)($cookie->id_lang);
	$smarty->assign('categorias',Category::getCategories($id_lang));
	return $this->display(__FILE__, 'blockcatmanprod.tpl');
}

public function hookAjaxCall($params)
{
	global $smarty;
//	$this->smartyAssigns($smarty, $params);
//	$res = $this->display(__FILE__, 'blockcart-json.tpl');
//	return $res;
}

}
?>