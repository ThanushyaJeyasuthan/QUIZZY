<?php
session_start(); 

$servername = "localhost"; 
$username = "root";
$password = ""; 
$database = "QUIZZY";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_POST['login_btn'])) {
    
    // Get data from the Login form
    $email = mysqli_real_escape_string($conn, $_POST['user_id']);
    $pass  = $_POST['password'];

    // Search for the user by email
    $sql = "SELECT * FROM users WHERE email = '$email' LIMIT 1";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $user_data = $result->fetch_assoc();
        
        // Check the password
        if ($pass == $user_data['password']) {
            
            // SUCCESS: Create Session Variables
            $_SESSION['user_id'] = $user_data['id'];
            $_SESSION['user_name'] = $user_data['user_name'];
            
            // Redirect to category page
            header("Location: ../category.php?success=Welcome back, " . $user_data['user_name']);
            exit();

        } else {
            // Wrong password
            header("Location: login_register.php?error=Incorrect password.");
            exit();
        }
    } else {
        // Email not found
        header("Location: login_register.php?error=No account found with that email.");
        exit();
    }
}

$conn->close();
?>
