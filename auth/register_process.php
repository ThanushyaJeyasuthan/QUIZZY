<?php
session_start();
// connect the database
require_once '../includes/db.php';

if (isset($_POST['register_btn'])) {
    // Capture the data from your HTML form while register
	
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = $_POST['password']; 
    $name = mysqli_real_escape_string($conn, $_POST['reg_name']);

    // Check if email already exists
    $check_email = "SELECT email FROM users WHERE email = '$email' LIMIT 1";
    $result = mysqli_query($conn, $check_email);

    if (mysqli_num_rows($result) > 0) {
        header("Location: login_register.php?error=Email already registered!");
        exit();
    } else {
        // Insert data into the 'users' table
        $query = "INSERT INTO users (user_name, email, password, created_at) VALUES (?, ?, ?, CURRENT_TIMESTAMP)";
        $stmt = $conn->prepare($query);
        
       
        $stmt->bind_param("sss", $name, $email, $password);

        if ($stmt->execute()) {
            //Get the ID of the user we just created
            $new_user_id = $conn->insert_id; 

            //SUCCESS
            $_SESSION['user_id'] = $new_user_id;
            $_SESSION['user_name'] = $name; // This is the $name variable from your POST data

            //go  to category page
            header("Location: ../category.php?success=Account created! Welcome, " . $name);
            exit();
        } else {
            header("Location: login_register.php?error=Incorrect password.");
            exit();
        }
    }
} else {
   
    header("Location: index.php");
    exit();
}
?>