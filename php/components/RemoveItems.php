<?php
$itemsList = get_removed_items();
    while ($row = $itemsList->fetch_assoc()) {
    ?>
           <div class="todo removed">
            <li class="todo-item">
                <div class="item-text"><?php echo $row["title"] ?></div>
                <button class="trashButton" name="remove" onclick="seteditAction();" value="<?php echo $row["id"] ?>">
                <div class="trashButton-default"><img src="images/trashButton-default.svg"></div>
                <div class="trashButton-hovered"><img src="images/trashButton-hovered.svg"></div>
            </button>
            </li>
        </div>
    <?php }