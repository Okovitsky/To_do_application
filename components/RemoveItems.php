<?php
$itemsList = get_removed_items();
    while ($row = $itemsList->fetch_assoc()) {
    ?>
           <div class="todo removed">
            <li class="todo-item">
                <div class="checkedIcon">
                    <img src="images/trashButton-hovered.svg">
                </div>
                <div class="item-text"><?php echo $row["title"] ?></div>
            </li>
        </div>
    <?php }