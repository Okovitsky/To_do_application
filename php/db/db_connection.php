<?php
function make_connection()
{
  //local connection
  /*$host = "localhost";
  $userName = "root";
  $password = "";
  $db_name = "to_do_list";*/

  //remote db
  $host = "sql11.freesqldatabase.com";
  $userName = "sql11485689";
  $password = "klZd7xyZLk";
  $db_name = "sql11485689";

  $con = new mysqli($host, $userName, $password, $db_name);
  if ($con->connect_error) {
    echo "Ошибка подключения!";
  }
  return $con;
}
