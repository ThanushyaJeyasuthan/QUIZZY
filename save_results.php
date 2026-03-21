<?php
session_start();
// connect with the databse
include 'includes/db.php'; 


header('Content-Type: application/json');

// 1. Check if the user is already logged in
if (!isset($_SESSION['user_id'])) {
    echo json_encode(['status' => 'error', 'message' => 'User session not found']);
    exit;
}

$user_id = $_SESSION['user_id'];


$score = $_POST['score'] ?? 0;
$category = $_POST['category'] ?? 'General';

//insert into 'results' table
$sql = "INSERT INTO results (user_id, score, catergory, date_taken) VALUES (?, ?, ?, CURRENT_TIMESTAMP)";

$stmt = $conn->prepare($sql);

if ($stmt) {
    
    $stmt->bind_param("iis", $user_id, $score, $category);
    
    if ($stmt->execute()) {
        echo json_encode([
            'status' => 'success', 
            'message' => 'Data saved successfully',
            'debug_user' => $user_id,
            'debug_score' => $score
        ]);
    } else {
        echo json_encode(['status' => 'error', 'message' => $stmt->error]);
    }
    $stmt->close();
} else {
    echo json_encode(['status' => 'error', 'message' => $conn->error]);
}

$conn->close();
?>