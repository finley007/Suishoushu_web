<?php 
	$db = mysql_connect("localhost", "root", "root") or die('连接数据库失败: ' . mysql_error());	
	var_dump(mysql_get_server_info());
	var_dump(strpos(mysql_get_server_info(),'MariaDB') > 0);
 ?>