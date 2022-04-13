<?php
if (isset($_POST["Completed"])) {
    require "components/CompletedItem.php";
?>
    <script>
        const filterOption = document.querySelectorAll(".ListNavigation-items-name");
        filterOption[1].classList.add("selected1");
        filterOption[0].classList.remove("selected1");
        filterOption[2].classList.remove("selected1");
    </script>
<?
} else if (isset($_POST["Removed"])) {
    require "components/RemoveItems.php";?>
    <script>
    const filterOption = document.querySelectorAll(".ListNavigation-items-name");
    filterOption[2].classList.add("selected1");
    filterOption[0].classList.remove("selected1");
    filterOption[1].classList.remove("selected1");
</script>
<?
} else {
    require "components/InProgressItem.php";?>
    <script>
    const filterOption = document.querySelectorAll(".ListNavigation-items-name");
    filterOption[0].classList.add("selected1");
    filterOption[2].classList.remove("selected1");
    filterOption[1].classList.remove("selected1");
</script>
<?
}
?>