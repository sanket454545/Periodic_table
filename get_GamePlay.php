<?php
session_start(); // Start session if not already started

// Check if the user is logged in or redirect to login page if not logged in
if (!isset($_SESSION['user_id'])) {
    header("Location: login.php"); // Redirect to your login page
    exit;
}

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

$user_id = $_SESSION['user_id']; // Get user ID from session
// Get input data from JSON request
$input = json_decode(file_get_contents('php://input'), true);
$id = $input['id'];

// Fetch the leaderboard data sorted by score descending for the specific user
$sql = "SELECT id,score, start_time, end_time ,game_play
        FROM leaderboard 
        WHERE user_id = ? and id= ? 
        ORDER BY score DESC";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ii", $user_id,$id);
$stmt->execute();
$result = $stmt->get_result();

$myLeaderboard = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $myLeaderboard[] = $row;
    }
    echo json_encode($myLeaderboard);
} else {
    echo json_encode(['message' => 'No leaderboard data found']);
}

// Close statement and connection
$stmt->close();
$conn->close();
?>
