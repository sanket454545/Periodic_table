<?php
session_start();

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "leaderboard_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_SESSION['username'])) {
    $username = $_SESSION['username'];

    // Query to fetch user stats
    $stmt = $conn->prepare("SELECT COUNT(*) as matchesPlayed, SUM(score) as totalScore FROM leaderboard WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $matchesPlayed = $row['matchesPlayed'];
        $totalScore = $row['totalScore'];
        $accuracy = ($matchesPlayed > 0) ? round(($totalScore / ($matchesPlayed * 10)) * 100, 2) : 0;

        echo json_encode([
            'username' => $username,
            'matchesPlayed' => $matchesPlayed,
            'totalScore' => $totalScore,
            'accuracy' => $accuracy
        ]);
    } else {
        echo json_encode([
            'username' => $username,
            'matchesPlayed' => 0,
            'totalScore' => 0,
            'accuracy' => 0
        ]);
    }

    $stmt->close();
} else {
    echo json_encode(['error' => 'User not logged in']);
}

$conn->close();
?>
