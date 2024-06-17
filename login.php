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

$input = json_decode(file_get_contents('php://input'), true);
$username = $input['username'];
$password = $input['password'];

$sql = "SELECT * FROM users WHERE username = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();
    if (password_verify($password, $user['password'])) {
        $_SESSION['user_id'] = $user['id']; // Store user ID in session
        echo json_encode(['message' => 'Login successful', 'user_id' => $user['id']]); // Return user ID
    } else {
        echo json_encode(['message' => 'Invalid password']);
    }
} else {
    echo json_encode(['message' => 'Invalid username']);
}

$stmt->close();
$conn->close();
?>
