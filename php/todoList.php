<?php
if (isset($_POST["Completed"])) {
    require "php/components/CompletedItem.php";
?>
    <script>
        const filterOption = document.querySelectorAll(".ListNavigation-items-name");
        filterOption[1].classList.add("selected");
        filterOption[0].classList.remove("selected");
        filterOption[2].classList.remove("selected");
    </script>
<?
} else if (isset($_POST["Removed"])) {
    require "php/components/RemoveItems.php"; ?>
    <script>
        const filterOption = document.querySelectorAll(".ListNavigation-items-name");
        filterOption[2].classList.add("selected");
        filterOption[0].classList.remove("selected");
        filterOption[1].classList.remove("selected");
    </script>
<?
} else {
    require "php/components/InProgressItem.php"; ?>
    <script>
        const filterOption = document.querySelectorAll(".ListNavigation-items-name");
        filterOption[0].classList.add("selected");
        filterOption[2].classList.remove("selected");
        filterOption[1].classList.remove("selected");
    </script>
<?
}
?>