<?php
$itemsList = get_items();
while ($row = $itemsList->fetch_assoc()) {
?>
    <div class="todo">
        <li class="todo-item">
            <button class="completeButton" name="complete" onclick="seteditAction();" value="<?php echo $row["id"] ?>">
                <div class="completeButton-default"><img src="images/completeButton-default.svg"></div>
                <div class="completeButton-hovered"><img src="images/completeButton-hovered.svg"></div>
            </button>
            <div class="item-text"><?php echo $row["title"] ?></div>
            <button class="trashButton" name="delete" onclick="seteditAction();" value="<?php echo $row["id"] ?>">
                <div class="trashButton-default"><img src="images/trashButton-default.svg"></div>
                <div class="trashButton-hovered"><img src="images/trashButton-hovered.svg"></div>
            </button>
        </li>
    </div>
<?php } ?>
    <div class="List">
    <div class="NewItem">
      <div class="NewItem-create">
        <button class="NewItem-create-icon" onclick="seteditAction();" name="add">
          <div class="NewItem-create-icon--default"><img src="images/create-icon-default.svg"></div>
          <div class="NewItem-create-icon--hovered"><img src="images/create-icon-hovered.svg"></div>
        </button>
      </div>
      <div class="NewItem-input">
        <input type="text" class="NewItem-input--input" placeholder="Create New Item" name="NewItem-input" />
      </div>
    </div>
  </div> 