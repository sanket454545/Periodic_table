<?php
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
$username = $input['username'];
$email = $input['email'];
$password = password_hash($input['password'], PASSWORD_DEFAULT); // Hash password

// Check if email already exists
$sql = "SELECT * FROM users WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    echo json_encode(['message' => 'Email already exists']);
} else {
    // Insert new user into database
    $sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $username, $email, $password);
    
    if ($stmt->execute()) {
        echo json_encode(['message' => 'Registration successful']);
    } else {
        echo json_encode(['message' => 'Registration failed']);
    }
}

$stmt->close();
$conn->close();
?>
