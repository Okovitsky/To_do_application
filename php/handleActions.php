<?php require 'db/requests.php' ?>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST["add"])) {
        if ($_POST["NewItem-input"] != NULL) {
            add_items($_POST["NewItem-input"]);
        }
    } else if (isset($_POST["complete"])) {
        complete_items($_POST["complete"]);
    } else if (isset($_POST["remove"])) {
        delete_items($_POST["remove"]);
    } else if (isset($_POST["delete"])) {
        remove_items($_POST["delete"]);
    }
    header("location: ../index.php");
}
?>