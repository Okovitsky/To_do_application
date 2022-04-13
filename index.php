<?php require "db_connection.php" ?>
<!DOCTYPE html>
<html lang="en">
<link rel="stylesheet" href="css/style.css" />

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>To Do List</title>
</head>

<body>
  <div class="container">
    <div class="Calendar">
      <div class="Calendar-icon">
        <div id="month" class="Calendar-icon-month"></div>
        <div id="date" class="Calendar-icon-date"></div>
        <script>
          const now = new Date();
          var month = now.toLocaleDateString("en-US", {
            month: "short"
          });
          var day = now.getDate();
          document.getElementById("month").innerHTML = month;
          document.getElementById("date").innerHTML = day;
        </script>
      </div>
      <div class="Calendar-label">Today</div>
    </div>
    <form name="toDoForm" action="" method="POST">
      <div class="ListNavigation">
        <div class="ListNavigation-ellipsis-rectangle">
          <div class="ListNavigation-ellipsis">
            <div class="Listnavigation-ellipsis--default"><img src="images/ellipsis-default.svg"></div>
            <div class="Listnavigation-ellipsis--hovered"><img src="images/ellipsis-hovered.svg"></div>
          </div>
        </div>
        <ul class="ListNavigation-items">
          <li class="ListNavigation-items-name"><button class="ListNavigationButton" name="InProgress" type ="sumbmit">In Progress</button></li>
          <li class="ListNavigation-items-name"><button class="ListNavigationButton" name="Completed" type ="sumbmit" >Completed</button></li>
          <li class="ListNavigation-items-name"><button class="ListNavigationButton" name="Removed" type ="sumbmit" >Removed</button></li>
        </ul>
      </div>
      <div class="todo-container">
        <ul class="todo-list">
          <?php
          require "todoList.php";
          ?>
        </ul>
      </div>
    </form>
  </div>
  <script src="js/app.js"></script>
</body>

</html>