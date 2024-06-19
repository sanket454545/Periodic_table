const elements = [
    { symbol: 'H', name: 'Hydrogen', atomicNumber: 1, metals: "Non-metal" },
    { symbol: 'He', name: 'Helium', atomicNumber: 2, metals: "Noble gas" },
    { symbol: 'Li', name: 'Lithium', atomicNumber: 3, metals: "Alkali metal" },
    { symbol: 'Be', name: 'Beryllium', atomicNumber: 4, metals: "Alkaline earth metal" },
    { symbol: 'B', name: 'Boron', atomicNumber: 5, metals: "Metalloids" },
    { symbol: 'C', name: 'Carbon', atomicNumber: 6, metals: "Reactive non-metals" },
    { symbol: 'N', name: 'Nitrogen', atomicNumber: 7, metals: "Reactive non-metals" },
    { symbol: 'O', name: 'Oxygen', atomicNumber: 8, metals: "Reactive non-metals" },
    { symbol: 'F', name: 'Fluorine', atomicNumber: 9, metals: "Reactive non-metals" },
    { symbol: 'Ne', name: 'Neon', atomicNumber: 10, metals: "Noble gas" },
    { symbol: 'Na', name: 'Sodium', atomicNumber: 11, metals: "Alkali metal" },
    { symbol: 'MG', name: 'Magnesium', atomicNumber: 12, metals: "Alkaline earth metals" },
    { symbol: 'Al', name: 'Aluminium', atomicNumber: 13, metals: "Post-transition metals" },
    { symbol: 'Si', name: 'silicon', atomicNumber: 14, metals: "Metalloids" },
    { symbol: 'P', name: 'Phosphorus', atomicNumber: 15, metals: "Reactive non-metals" },
    { symbol: 'S', name: 'Sulfur', atomicNumber: 16, metals: "Reactive non-metals" },
    { symbol: 'Cl', name: 'chlorine', atomicNumber: 17, metals: "Reactive non-metals" },
    { symbol: 'Ar', name: 'Argon', atomicNumber: 18, metals: "Noble gas" },
    { symbol: 'K', name: 'Potassium', atomicNumber: 19, metals: "Alkali metals" },
    { symbol: 'Ca', name: 'Calcium	', atomicNumber: 20, metals: "Alkaline earth metals" },
    { symbol: 'Sc', name: 'Scandium	', atomicNumber: 21, metals: "Transition metals" },
    { symbol: 'Ti', name: 'Titanium	', atomicNumber: 22, metals: "Transition metals" },
    { symbol: '	V', name: 'Vanadium	', atomicNumber: 23, metals: "Transition metals" },
    { symbol: 'Cr', name: 'Chromium	', atomicNumber: 24, metals: "Transition metals" },
    { symbol: 'Mn', name: 'Manganese', atomicNumber: 25, metals: "Transition metals" },
    { symbol: 'Fe', name: 'Iron	', atomicNumber: 26, metals: "Transition metals" },
    { symbol: 'Co', name: 'Cobalt', atomicNumber: 27, metals: "Transition metals" },
    { symbol: 'Ni', name: 'Nickel', atomicNumber: 28, metals: "Transition metalss" },
    { symbol: 'Cu', name: 'Copper', atomicNumber: 29, metals: "Transition metals" },
    { symbol: 'Zn', name: 'Zinc	', atomicNumber: 30, metals: "Transition metals" },
    { symbol: 'Ga', name: 'Gallium	', atomicNumber: 31, metals: "Post-transition metals" },
    { symbol: 'Ge', name: 'Germanium', atomicNumber: 32, metals: "Metalloids" },
    { symbol: 'As', name: 'Arsenic', atomicNumber: 33, metals: "Metalloids" },
    { symbol: 'Se', name: 'Selenium	', atomicNumber: 34, metals: "Reactive non-metals" },
    { symbol: '	Br', name: 'Bromine', atomicNumber: 35, metals: "Reactive non-metals" },
    { symbol: 'Kr', name: 'Krypton', atomicNumber: 36, metals: "Noble gas" },
    { symbol: 'Rb', name: 'Rubidium	', atomicNumber: 37, metals: "Alkali metals" },
    { symbol: 'Sr', name: 'Strontium', atomicNumber: 38, metals: "Alkaline earth metals" },
    { symbol: 'Y', name: 'Yttrium', atomicNumber: 39, metals: "Transition metals" },
    { symbol: 'Zr', name: 'Zirconium', atomicNumber: 40, metals: "Transition metals" },
    { symbol: 'Nb', name: 'Niobium', atomicNumber: 41, metals: "Transition metals" },
    { symbol: 'Mo', name: 'Molybdenum', atomicNumber: 42, metals: "Transition metals" },
    { symbol: 'Tc	', name: 'Technetium', atomicNumber: 43, metals: "Transition metals" },
    { symbol: 'Ru	', name: 'Ruthenium	', atomicNumber: 44, metals: "Transition metals" },
    { symbol: 'Rh', name: 'Rhodium	', atomicNumber: 45, metals: "Transition metals" },
    { symbol: 'Pd	', name: 'Palladium	', atomicNumber: 46, metals: "Transition metals" },
    { symbol: 'Ag	', name: 'Silver', atomicNumber: 47, metals: "NTransition metals" },
    { symbol: 'Cd	', name: 'Cadmium', atomicNumber: 48, metals: "Transition metals "},
    { symbol: 'In	', name: 'Indium', atomicNumber: 49, metals: "Post-transition metals" },
    { symbol: 'Sn	', name: 'Tin', atomicNumber: 50, metals: "Post-transition metals" },
    { symbol: 'Sb	', name: 'Antimony', atomicNumber: 51, metals: "Metalloids" },
    { symbol: 'Te', name: 'Tellurium', atomicNumber: 52, metals: "Metalloids" },
    { symbol: 'I', name: 'Iodine', atomicNumber: 53, metals: "Reactive non-metals" },
    { symbol: 'Xe	', name: 'Xenon	', atomicNumber: 54, metals: "Noble gas" },
    { symbol: 'Cs	', name: 'Cesium', atomicNumber: 55, metals: "Alkali metals" },
    { symbol: 'Ba	', name: 'Barium', atomicNumber: 56, metals: "Alkaline earth metals" },
    { symbol: 'La	', name: 'Lanthanum', atomicNumber: 57, metals: "Lanthanides" },
    { symbol: 'Ce	', name: 'Cerium', atomicNumber: 58, metals: "Lanthanides" },
    { symbol: 'Pr		', name: 'Praseodymium', atomicNumber: 59, metals: "Lanthanides" },
    { symbol: 'Nd	', name: 'Neodymium	', atomicNumber: 60, metals: "Lanthanides" },
    { symbol: 'Pm	', name: 'Promethium', atomicNumber: 61, metals: "Lanthanides" },
    { symbol: 'Sm	', name: 'Samarium', atomicNumber: 62, metals: "Lanthanides" },
    { symbol: 'Eu	', name: 'Europium', atomicNumber: 63, metals: "Lanthanides" },
    { symbol: 'Gd	', name: 'Gadolinium', atomicNumber: 64, metals: "Lanthanides" },
    { symbol: 'Tb', name: 'Terbium', atomicNumber: 65, metals: "Lanthanides" },
    { symbol: 'Dy', name: 'Dysprosium', atomicNumber: 66, metals: "Lanthanides" },
    { symbol: 'Ho', name: 'Holmium', atomicNumber: 67, metals: "Lanthanides" },
    { symbol: 'Er', name: 'Erbium', atomicNumber: 68, metals: "Lanthanides" },
    { symbol: 'Tm', name: 'Thulium', atomicNumber: 69, metals: "Lanthanides" },
    { symbol: 'Yb	',name:'Ytterbium', atomicNumber: 70, metals: "Lanthanides" },
    { symbol: 'Lu		', name: 'Lutetium', name: 'Ytterbium		', atomicNumber: 71, metals: "Lanthanides" },
    { symbol: 'Hf', name: 'Hafnium	', atomicNumber: 72, metals: "Transition metals" },
    { symbol: 'Ta		', name: 'Tantalum', atomicNumber: 73, metals: "Transition metals" },
    { symbol: 'W	', name: 'Tungsten', atomicNumber: 74, metals: "Transition metals" },
    { symbol: 'Re		', name: 'Rhenium', atomicNumber: 75, metals: "Transition metals" },
    { symbol: 'Os', name: 'Osmium', atomicNumber: 76, metals: "Transition metals" },
    { symbol: 'Ir	', name: 'Iridium', atomicNumber: 77, metals: "Transition metals" },
    { symbol: 'Pt		', name: 'Platinum', atomicNumber: 78, metals: "Transition metals" },
    { symbol: 'Au	', name: 'Gold', atomicNumber: 79, metals: "Transition metals" },
    { symbol: 'Hg	', name: 'Mercury', atomicNumber: 80, metals: "Transition metals" },
    { symbol: 'Tl', name: 'Thallium	', atomicNumber: 81, metals: "Post-transition metals" },
    { symbol: 'Pb	', name: 'Lead	', atomicNumber: 82, metals: "Post-transition metals" },
    { symbol: 'Bi	', name: 'Bismuth', atomicNumber: 83, metals: "Post-transition metals" },
    { symbol: 'Po', name: 'Polonium	', atomicNumber: 84, metals: "Post-transition metals" },
    { symbol: 'At', name: 'Astatine	', atomicNumber: 85, metals: "Post-transition metals" },
    { symbol: 'Rn', name: 'Radon', atomicNumber: 86, metals: "Noble gas" },
    { symbol: '	Fr', name: 'Francium', atomicNumber: 87, metals: "Alkali metals" },
    { symbol: 'Ra', name: 'Radium', atomicNumber: 88, metals: "Alkaline earth metals" },
    { symbol: 'Ac	', name: 'Actinium', atomicNumber: 89, metals: "Actinides" },
    { symbol: 'Th', name: 'Thorium	', atomicNumber: 90, metals: "Actinides" },
    { symbol: 'Pa', name: 'Protactinium	', atomicNumber: 91, metals: "Actinides" },
    { symbol: '	U	', name: 'Uranium', atomicNumber: 92, metals: "Actinides" },
    { symbol: 'Np', name: 'Neptunium', atomicNumber: 93, metals: "Actinides" },
    { symbol: 'Pu', name: 'Plutonium', atomicNumber: 94, metals: "Actinides" },
    { symbol: 'Am	', name: 'Americium	', atomicNumber: 95, metals: "Actinides" },
    { symbol: 'Cm', name: 'Curium', atomicNumber: 96, metals: "Actinides" },
    { symbol: 'Bk', name: 'Berkelium', atomicNumber: 97, metals: "Actinides" },
    { symbol: 'Cf', name: 'Californium', atomicNumber: 98, metals: "Actinides" },
    { symbol: 'Es	', name: 'Einsteinium', atomicNumber: 99, metals: "Actinides" },
    { symbol: 'Fm', name: 'Fermium', atomicNumber: 100, metals: "Actinides" },
    { symbol: '	Md', name: 'Mendelevium', atomicNumber: 101, metals: "Actinides" },
    { symbol: 'No	', name: 'Nobelium', atomicNumber: 102, metals: "Actinides" },
    { symbol: 'Lr', name: 'Lawrencium', atomicNumber: 103, metals: "Actinides" },
    { symbol: 'Rf', name: 'Rutherfordium', atomicNumber: 104, metals: "Transition metals" },
    { symbol: 'Db', name: 'Dubnium', atomicNumber: 105, metals: "Transition metals" },
    { symbol: 'Sg', name: 'Seaborgium', atomicNumber: 106, metals: "Transition metals" },
    { symbol: 'Bh', name: 'Bohrium', atomicNumber: 107, metals: "Transition metals" },
    { symbol: 'Hs', name: 'Hassium', atomicNumber: 108, metals: "Transition metals" },
    { symbol: '	Mt	', name: 'Meitnerium', atomicNumber: 109, metals: "Unknown properties" },
    { symbol: 'Ds', name: 'Darmstadtium	', atomicNumber: 110, metals: "Unknown properties" },
    { symbol: '	Rg', name: 'Roentgenium	', atomicNumber: 111, metals: "Unknown properties" },
    { symbol: 'Cn', name: 'Copernicium	', atomicNumber: 112, metals: "Unknown properties" },
    { symbol: '	Nh', name: 'Nihonium', atomicNumber: 113, metals: "Unknown properties" },
    { symbol: 'Fl', name: 'Flerovium', atomicNumber: 114, metals: "Unknown properties" },
    { symbol: 'Mc', name: 'Moscovium', atomicNumber: 115, metals: "Unknown properties" },
    { symbol: 'Lv	', name: 'Livermorium', atomicNumber: 116, metals: "Unknown properties" },
    { symbol: 'Ts	', name: 'Tennessine', atomicNumber: 117, metals: "Unknown properties" },
    { symbol: 'Og	', name: 'Oganesson	', atomicNumber: 118, metals: "Unknown properties" },
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
    }, 1000);
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
