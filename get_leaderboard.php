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

// Fetch the leaderboard data
$sql = "SELECT users.username, leaderboard.score 
        FROM leaderboard 
        JOIN users ON leaderboard.user_id = users.id 
        ORDER BY leaderboard.score D11111111111111111111111111111111111111111111111111111111111111 LIMIT 10";
$result = $conn->query($sql);

$leaderboard = [];

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $leaderboard[] = $row;
    }
    echo json_encode($leaderboard);
} else {
    echo json_encode(['message' => 'No data found']);
}

$conn->close();
?>
