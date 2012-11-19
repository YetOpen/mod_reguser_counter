<?php defined('_JEXEC') or die('Restricted access'); // no direct access 
$posttext= $params->get('posttext');
$speed= $params->get('speed');
$db	=& JFactory::getDBO();
$result	= null;

//$q="select count(*) as count from #__users where usertype='Registered'";
$q="select count(*) as count from #__users where usertype!='Super Administrator'";
$db->setQuery($q);
$result = $db->loadObject();
foreach ($result as $count) {$total=$count;}

echo "<script language=\"javascript\" type=\"text/javascript\" src=\"".JURI::Base()."modules/mod_reguser_counter/js/reguser_counter.js\"></script>";
echo "<link rel=\"stylesheet\" type=\"text/css\" href=\"".JURI::Base()."modules/mod_reguser_counter/counter_style.css\">";
?>

<script>
startCount(<?=$speed?>, <?=$total?>);
</script>

<div id="reguser_counter">0</div> 
<?php
if ($params->get('posttext')!="") {echo "<div id=\"reguser_counter_text\">".$params->get('posttext')."</div>";}
?>