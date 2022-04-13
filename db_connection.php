<?php
function make_connection()
{
  $host = "localhost";
  $userName = "root";
  $password = "";
  $db_name = "to_do_list";
  $con = new mysqli($host, $userName, $password, $db_name);
  if ($con->connect_error) {
    echo "Ошибка подключения";
  }
  return $con;
}
function add_items($value)
{
  $con = make_connection();
  $query = "INSERT INTO `todos`(`id`, `title`, `status`) VALUES (NULL,'$value','0')";
  $con->query($query);
}

function get_items()
{
  $con = make_connection();
  $query = "SELECT id,title from todos WHERE status = '0' ";
  $result = $con->query($query);
  return $result;
}

function complete_items($id)
{
  $con = make_connection();
  $query = "UPDATE todos set status='1' WHERE id='$id'";
  $con->query($query);
}

function remove_items($id)
{
  $con = make_connection();
  $query = "UPDATE todos set status='2' WHERE id='$id'";
  $con->query($query);
}

function get_completed_items()
{
  $con = make_connection();
  $query = "SELECT id,title from todos WHERE status = '1' ";
  $result = $con->query($query);
  return $result;
}
function get_removed_items()
{
  $con = make_connection();
  $query = "SELECT id,title from todos WHERE status = '2' ";
  $result = $con->query($query);
  return $result;
}

function delete_items($id)
{
  $con = make_connection();
  $query = "DELETE FROM `todos` WHERE id='$id'";
  $con->query($query);
}
