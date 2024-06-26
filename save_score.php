<?php
session_start(); // Start session if not already started

// Database connection parameters
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

// Assuming your JSON data structure is correctly formatted and contains necessary fields
$jsonData = json_decode(file_get_contents('php://input'), true);

if (!isset($jsonData["user_id"]) || !isset($jsonData["score"]) || !isset($jsonData["start_time"]) || !isset($jsonData["end_time"])  || !isset($jsonData["game_play"])) {
    die(json_encode(['message' => 'Incomplete data provided']));
}

$user_id = $jsonData["user_id"];
$score = $jsonData["score"];
$startTime = $jsonData["start_time"];
$endTime = $jsonData["end_time"];
$gamePlay = $jsonData["game_play"];

// Prepare and execute the INSERT statement
$stmt = $conn->prepare("INSERT INTO leaderboard (user_id, score, start_time, end_time,game_play) VALUES (?, ?, ?, ?,?)");

if ($stmt) {
    $stmt->bind_param("iisss", $user_id, $score, $startTime, $endTime,$gamePlay);

    if ($stmt->execute()) {
        echo json_encode(['message' => 'Score saved successfully']);
    } else {
        echo json_encode(['message' => 'Failed to save score']);
    }
    $stmt->close();
} else {
    echo json_encode(['message' => 'Failed to prepare statement']);
}

$conn->close();
?>
