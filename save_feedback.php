<?php
session_start();
// connect with the databse
include 'includes/db.php';

header('Content-Type: application/json');

// Check if user is logged in
if (!isset($_SESSION['user_id'])) {
    echo json_encode(['status' => 'error', 'message' => 'User not logged in']);
    exit;
}

$user_id = $_SESSION['user_id'];
$stars = isset($_POST['stars']) ? intval($_POST['stars']) : 0;
$useful = isset($_POST['useful']) ? intval($_POST['useful']) : null;
$suggestion = isset($_POST['suggestion']) ? $_POST['suggestion'] : '';

// Insert into the 'feedback' table
$sql = "INSERT INTO feedback (user_id, stars, is_useful, suggestion) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);

if ($stmt) {
    $stmt->bind_param("iiis", $user_id, $stars, $useful, $suggestion);
    if ($stmt->execute()) {
        echo json_encode(['status' => 'success']);
    } else {
        echo json_encode(['status' => 'error', 'message' => $stmt->error]);
    }
    $stmt->close();
}
$conn->close();
?>