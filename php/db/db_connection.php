<?php
function make_connection()
{
  $host = "localhost";
  $userName = "root";
  $password = "";
  $db_name = "to_do_list";
  $con = new mysqli($host, $userName, $password, $db_name);
  if ($con->connect_error) {
    echo "Ошибка подключения!";
  }
  return $con;
}
