<?php
global $cookie;
include(dirname(__FILE__).'/blockcatmanprod.php');
$blockcatP = new BlockCatManProd();
$blockcatP->hookAjaxCall();
?>