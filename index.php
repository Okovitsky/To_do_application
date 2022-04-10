<?php require "db_connection.php" ?>
<!DOCTYPE html>
<html lang="en">
<link rel="stylesheet" href="css/style.css"/>

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
    <div class="ListNavigation">
      <div class="ListNavigation-ellipsis-rectangle">
        <div class="ListNavigation-ellipsis">
          <div class="Listnavigation-ellipsis--default"><img src="images/ellipsis-default.svg"></div>
          <div class="Listnavigation-ellipsis--hovered"><img src="images/ellipsis-hovered.svg"></div>
        </div>
      </div>
      <ul class="ListNavigation-items">
        <li class="ListNavigation-items-name" value="1">In Progress</li>
        <li class="ListNavigation-items-name" value="2">Completed</li>
        <li class="ListNavigation-items-name" value="3">Removed</li>
      </ul>
    </div>
    <form action="handleActions.php" method="POST">
      <div class="todo-container">
        <ul class="todo-list">
          <div class="todo">
            <li class="todo-item">
              <button class="completeButton" name="complete" type="submit">
                <div class="completeButton-default"><img src="images/completeButton-default.svg"></div>
                <div class="completeButton-hovered"><img src="images/completeButton-hovered.svg"></div>
              </button>
              <div class="checkedIcon">
                <img src="images/completeButton-hovered.svg">
              </div>
              <div class="deletedIcon">
                <img src="images/trashButton-hovered.svg">
              </div>
              <div>do homework</div>
              <button class="trashButton" name="delete" type="submit">
                <div class="trashButton-default"><img src="images/trashButton-default.svg"></div>
                <div class="trashButton-hovered"><img src="images/trashButton-hovered.svg"></div>
              </button>
            </li>
          </div>
        </ul>
        <div class="List">
          <div class="NewItem">
            <div class="NewItem-create">
              <button class="NewItem-create-icon" type="submit" name="add">
                <div class="NewItem-create-icon--default"><img src="images/create-icon-default.svg"></div>
                <div class="NewItem-create-icon--hovered"><img src="images/create-icon-hovered.svg"></div>
        </button>
            </div>
            <div class="NewItem-input">
              <input type="text" class="NewItem-input--input" placeholder="Create New Item" />
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
  <script src="app.js"></script>
</body>

</html>