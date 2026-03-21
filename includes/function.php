<?php

function sanitize($conn, $data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return mysqli_real_escape_string($conn, $data);
}


function check_login() {
    if (!isset($_SESSION['user_id'])) {
      
        header("Location: auth/login_register.php");
        exit();
    }
}


function redirect($url) {
    header("Location: " . $url);
    exit();
}
?>