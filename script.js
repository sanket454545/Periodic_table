const elements = [
    { symbol: 'H', name: 'Hydrogen', atomicNumber: 1, metals: "Non-metal" },
    { symbol: 'He', name: 'Helium', atomicNumber: 2, metals: "Noble gas" },
    { symbol: 'Li', name: 'Lithium', atomicNumber: 3, metals: "Alkali metal" },
    { symbol: 'Be', name: 'Beryllium', atomicNumber: 4, metals: "Alkaline earth metal" },
    { symbol: 'B', name: 'Boron', atomicNumber: 5, metals: "Metalloid" },
    { symbol: 'C', name: 'Carbon', atomicNumber: 6, metals: "Non-metal" },
    { symbol: 'N', name: 'Nitrogen', atomicNumber: 7, metals: "Non-metal" },
    { symbol: 'O', name: 'Oxygen', atomicNumber: 8, metals: "Non-metal" },
    { symbol: 'F', name: 'Fluorine', atomicNumber: 9, metals: "Non-metal" },
    { symbol: 'Ne', name: 'Neon', atomicNumber: 10, metals: "Noble gas" }
];
let loggedInUserId = ''; // Track the logged-in user ID globally

let score = 0;
let username = '';
let timer;
let timeLeft = 20;

function showRegisterScreen() {
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('registerScreen').style.display = 'block';
}

function showLoginScreen() {
    document.getElementById('registerScreen').style.display = 'none';
    document.getElementById('loginScreen').style.display = 'block';
}

function register() {
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    fetch('register.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === 'Registration successful') {
            alert('Registration successful! Please log in.');
            document.getElementById('registerScreen').style.display = 'none';
            document.getElementById('loginScreen').style.display = 'block';
        } else {
            alert(data.message);
        }
    });
}



// Update the login function to store the user ID
function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    fetch('login.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === 'Login successful') {
            alert('Login successful!');
            loggedInUserId = data.user_id; // Store user ID
            startQuiz(data.user_id); // Pass user ID
        } else {
            alert(data.message);
        }
    });
}


function startQuiz(loggedInUserId) {
    user_id = loggedInUserId;
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('welcomeScreen').style.display = 'none';
    document.getElementById('quizScreen').style.display = 'block';
    timer = setInterval(updateTimer, 1000);
    nextQuestion();
}

function updateTimer() {
    timeLeft -= 1;
    document.getElementById('timer').innerText = `Time left: ${timeLeft}s`;
    if (timeLeft <= 0) {
        endQuiz();
    }
}

function nextQuestion() {
    const questionType = Math.floor(Math.random() * 3);
    let question = '';
    let correctAnswer = '';
    let options = [];

    switch (questionType) {
        case 0:
            const randomElement1 = elements[Math.floor(Math.random() * elements.length)];
            correctAnswer = randomElement1.name;
            question = `What is the name of the element with symbol ${randomElement1.symbol}?`;
            options = getOptions(correctAnswer, 'name');
            break;
        case 1:
            const randomElement2 = elements[Math.floor(Math.random() * elements.length)];
            correctAnswer = randomElement2.metals;
            question = `What is the category of metals for the element ${randomElement2.name}?`;
            options = getOptions(correctAnswer, 'metals');
            break;
        case 2:
            const randomElement3 = elements[Math.floor(Math.random() * elements.length)];
            correctAnswer = randomElement3.name;
            question = `What is the name of the element with atomic number ${randomElement3.atomicNumber}?`;
            options = getOptions(correctAnswer, 'name');
            break;
    }

    displayQuestion(question, options, correctAnswer);
}

function getOptions(correctAnswer, key) {
    const options = new Set();
    options.add(correctAnswer);
    while (options.size < 4) {
        const randomOption = elements[Math.floor(Math.random() * elements.length)][key];
        options.add(randomOption);
    }
    return shuffle(Array.from(options));
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function displayQuestion(question, options, correctAnswer) {
    document.getElementById('question').innerText = question;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => checkAnswer(option, correctAnswer);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedAnswer, correctAnswer) {
    const buttons = document.querySelectorAll('#options button');
    buttons.forEach(button => {
        button.disabled = true;
        if (button.innerText === correctAnswer) {
            button.classList.add('correct');
        } else if (button.innerText === selectedAnswer) {
            button.classList.add('incorrect');
        }
    });

    // Find the correct button and add message next to it
    const correctButton = Array.from(buttons).find(button => button.innerText === correctAnswer);
    if (correctButton) {
        correctButton.classList.add('correct-message');
        const correctElement = elements.find(element => element.name === correctAnswer);
        if (correctElement) {
            const message = document.createElement('div');
            message.classList.add('message');
            message.innerHTML = `
                Correct answer: ${correctAnswer}<br>
                Symbol: ${correctElement.symbol}<br>
                Atomic Number: ${correctElement.atomicNumber}<br>
                Metals: ${correctElement.metals}
            `;
            correctButton.parentNode.appendChild(message);
        }
    }

    setTimeout(() => {
        buttons.forEach(button => {
            button.disabled = false;
            button.classList.remove('correct', 'incorrect', 'correct-message');
            // Remove previous message
            const prevMessage = button.parentNode.querySelector('.message');
            if (prevMessage) {
                prevMessage.remove();
            }
        });

        if (selectedAnswer === correctAnswer) {
            score += 1;
        }

        nextQuestion();
    }, 5000);
}


function endQuiz() {
    clearInterval(timer);
    document.getElementById('quizScreen').style.display = 'none';
    document.getElementById('leaderboard').style.display = 'block';
    updateLeaderboard(loggedInUserId, score); // Pass user ID and score to updateLeaderboard
}

async function updateLeaderboard(user_id, score) {
    try {
        const response = await fetch('save_score.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id: user_id,
                score: score,
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to save score');
        }

        const data = await response.json();
        console.log(data.message);
        displayLeaderboard();
    } catch (error) {
        console.error('Error saving score:', error);
    }
}

async function displayLeaderboard() {
    try {
        const response = await fetch('get_leaderboard.php');
        if (!response.ok) {
            throw new Error('Failed to fetch leaderboard');
        }

        const leaderboard = await response.json();
        const leaderboardTable = document.getElementById('leaderboardTable');
        leaderboardTable.innerHTML = `
            <tr>
                <th>Name</th>
                <th>Score</th>
                <th>Stats</th>
            </tr>
        `;

        leaderboard.slice(0, 10).forEach(entry => {
            const newRow = leaderboardTable.insertRow();
            const nameCell = newRow.insertCell(0);
            const scoreCell = newRow.insertCell(1);
            const statsCell = newRow.insertCell(2); // Cell for stats button

            nameCell.innerText = entry.username;
            scoreCell.innerText = entry.score;

            const statsButton = document.createElement('button'); // Create stats button
            statsButton.innerText = 'Stats';
            statsButton.onclick = () => showStats(entry.username); // Show stats onclick
            statsCell.appendChild(statsButton); // Append button to cell
        });

        const loggedInUsername = document.getElementById('loggedInUsername');
        loggedInUsername.innerText = loggedInUsername; // Update displayed username
    } catch (error) {
        console.error('Error fetching leaderboard:', error);
    }
}

function showStats(username) {
    // Fetch and display stats for the selected username
    console.log(`Fetching stats for ${username}`);
    // Implement fetching and displaying stats from database
}


// Function to handle logout
function logout() {
    fetch('logout.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Logout request failed');
        }
        return response.json();
    })
    .then(data => {
        alert(data.message); // Optional: Show logout message
        showLoginScreen(); // After logout, show the login screen
    })
    .catch(error => {
        console.error('Logout failed:', error);
    });

    // Hide other screens
    document.getElementById('welcomeScreen').style.display = 'none';
    document.getElementById('quizScreen').style.display = 'none';
    document.getElementById('leaderboard').style.display = 'none';
}

// Function to show the login screen
function showLoginScreen() {
    document.getElementById('loginScreen').style.display = 'block';
    document.getElementById('registerScreen').style.display = 'none';
    document.getElementById('welcomeScreen').style.display = 'none';
    document.getElementById('quizScreen').style.display = 'none';
    document.getElementById('leaderboard').style.display = 'none';
}

// Function to show the leaderboard screen
function showLeaderboardScreen() {
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('registerScreen').style.display = 'none';
    document.getElementById('welcomeScreen').style.display = 'none';
    document.getElementById('quizScreen').style.display = 'none';
    document.getElementById('leaderboard').style.display = 'block';
}


function playAgain() {
    clearInterval(timer);
    score = 0;
    timeLeft = 20;
    document.getElementById('leaderboard').style.display = 'none';
    document.getElementById('quizScreen').style.display = 'block';
    timer = setInterval(updateTimer, 1000);
    nextQuestion();
}
async function updateLeaderboard(username, score) {
    try {
        const response = await fetch('save_score.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                score: score,
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to save score');
        }

        const data = await response.json();
        console.log(data.message);
        saveStats(username, score); // Save game stats after saving score
        displayLeaderboard();
    } catch (error) {
        console.error('Error saving score:', error);
    }
}

async function saveStats(username, score) {
    try {
        const response = await fetch('save_stats.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                score: score,
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to save stats');
        }

        const data = await response.json();
        console.log(data.message);
    } catch (error) {
        console.error('Error saving stats:', error);
    }
}
function showUserStats() {
    fetch('get_user_stats.php')
        .then(response => response.json())
        .then(data => {
            const statsContainer = document.getElementById('userStats');
            statsContainer.innerHTML = `
                <h3>${data.username}'s Stats</h3>
                <p>Matches Played: ${data.matchesPlayed}</p>
                <p>Total Score: ${data.totalScore}</p>
                <p>Accuracy: ${data.accuracy}%</p>
            `;
            statsContainer.style.display = 'block';
        })
        .catch(error => {
            console.error('Error fetching user stats:', error);
        });
}
