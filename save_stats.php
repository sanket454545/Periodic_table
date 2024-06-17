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

if (isset($_SESSION['username']) && isset($input['username']) && isset($input['score'])) {
    $username = $input['username'];
    $score = $input['score'];
    $matchesPlayed = 0; // Implement logic to fetch matches played from database
    $totalPoints = 0; // Implement logic to fetch total points from database
    $highestPointInOneGame = 0; // Implement logic to fetch highest point from database

    if ($matchesPlayed > 0) {
        $accuracy = ($score / $matchesPlayed) * 100;
    } else {
        $accuracy = 0;
    }

    // Insert or update the stats in the user_stats table
    $stmt = $conn->prepare("INSERT INTO user_stats (username, matches_played, total_points, highest_point_in_one_game, accuracy) VALUES (?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE matches_played = VALUES(matches_played), total_points = VALUES(total_points), highest_point_in_one_game = VALUES(highest_point_in_one_game), accuracy = VALUES(accuracy)");
    $stmt->bind_param("siiid", $username, $matchesPlayed, $totalPoints, $highestPointInOneGame, $accuracy);

    if ($stmt->execute()) {
        echo json_encode(['message' => 'Stats saved successfully']);
    } else {
        echo json_encode(['message' => 'Failed to save stats']);
    }

    $stmt->close();
} else {
    echo json_encode(['message' => 'Invalid input or user not logged in']);
}

$conn->close();
?>
