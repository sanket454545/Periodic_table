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

// Fetch the leaderboard data sorted by max_score descending
$sql = "SELECT u.username, lb.max_score
        FROM users u
        JOIN (
            SELECT user_id, MAX(score) AS max_score
            FROM leaderboard
            GROUP BY user_id
        ) lb ON u.id = lb.user_id
        ORDER BY lb.max_score DESC";
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
