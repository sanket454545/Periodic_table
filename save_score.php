<?php
session_start(); // Start session if not already started

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "leaderboard_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get input data from JSON request
$input = json_decode(file_get_contents('php://input'), true);

// Check if user is logged in and score is valid
if (isset($_SESSION['user_id']) && isset($input['score']) && is_numeric($input['score'])) {
    $user_id = $_SESSION['user_id'];
    $score = intval($input['score']);

    // Insert score into leaderboard table
    $stmt = $conn->prepare("INSERT INTO leaderboard (user_id, score) VALUES (?, ?)");
    if ($stmt) {
        $stmt->bind_param("ii", $user_id, $score);
        if ($stmt->execute()) {
            echo json_encode(['message' => 'Score saved successfully']);
        } else {
            echo json_encode(['message' => 'Failed to save score']);
        }
        $stmt->close();
    } else {
        echo json_encode(['message' => 'Failed to prepare statement']);
    }
} else {
    echo json_encode(['message' => 'Invalid input or user not logged in']);
}

$conn->close();
?>
