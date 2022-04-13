<?php
$itemsList = get_completed_items();
    while ($row = $itemsList->fetch_assoc()) {
?>
        <div class="todo completed">
            <li class="todo-item">
                <div class="checkedIcon">
                    <img src="images/completeButton-hovered.svg">
                </div>
                <div class="item-text"><?php echo $row["title"] ?></div>
            </li>
        </div>
    <?php }