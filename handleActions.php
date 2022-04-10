<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST["add"])) {
        echo "Inside add";
    } else if (isset($_POST["complete"])) {
        echo "Inside complete";
    } else if (isset($_POST["delete"])) {
        echo "Inside delete";
    }
}
