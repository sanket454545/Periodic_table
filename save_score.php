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

// Get the input data
$input = json_decode(file_get_contents('php://input'), true);

if (isset($_SESSION['user_id']) && isset($input['score'])) {
    $user_id = $_SESSION['user_id'];
    $score = $input['score'];

    // Insert the data into the leaderboard table
    $stmt = $conn->prepare("INSERT INTO leaderboard (user_id, score) VALUES (?, ?)");
    $stmt->bind_param("ii", $user_id, $score);

    if ($stmt->execute()) {
        echo json_encode(['message' => 'Score saved successfully']);
    } else {
        echo json_encode(['message' => 'Failed to save score']);
    }

    $stmt->close();
} else {
    echo json_encode(['message' => 'Invalid input or user not logged in']);
}

$conn->close();
?>
