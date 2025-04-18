let loggedInUserId = ''; // Track the logged-in user ID globally
let score = 0;
let timer;
let timeLeft = 300; // 5 minutes (300 seconds)
let isAnswerSelected = false;
let isNextEnabled = false; // Track if 'Next' button should be enabled
let startTime,endTime;
let gamePlay = [];

function showRegisterScreen() {
    showScreen("registerScreen")
}

function showHelp() {
    showScreen("Help")
}


function startQuiz() {
    gamePlay = [];
    showScreen("quizScreen")
    user_id = localStorage.getItem("loginID"); // Assuming user_id is a global variable for the logged-in user
    timer = setInterval(updateTimer, 1000); // Start quiz timer
    enableNextButton(); // Enable 'Next' button initially
    document.addEventListener('keydown', handleEnterKey); // Listen for Enter key
    updateTimerDisplay(); // Initialize timer display
    nextQuestion(); // Start with the first question
    startTime=new Date();
    
    loggedInUserId = localStorage.getItem("loginID");
}

function updateTimer() {
    timeLeft -= 1;
    updateTimerDisplay();

    if (timeLeft <= 0) {
        endQuiz();
    }
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').innerText = `Time left: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function nextQuestion() {
    if (!isNextEnabled) return;
    clearElementInfo();
    disableNextButton();
    const questionType = Math.floor(Math.random() * 3);
    let question = '';
    let correctAnswer = '';
    let options = [];

    switch (questionType) {
        case 0:
            const randomElement1 = elements[Math.floor(Math.random() * elements.length)];
            correctAnswer = randomElement1.name;
            question = `What is the name of the element with symbol?<br><span class="highlight">${randomElement1.symbol}</span>`;
            options = getOptions(correctAnswer, 'name');
            break;
        case 1:
            const randomElement2 = elements[Math.floor(Math.random() * elements.length)];
            correctAnswer = randomElement2.name; // Set correct answer to name instead of symbol
            question = `What is the name of metals  element?<br> <span class="highlight">${randomElement2.metals}</span>`;
            options = getOptions(correctAnswer, 'name'); // Fetch options based on 'name' of the element
            break;
        case 2:
            const randomElement3 = elements[Math.floor(Math.random() * elements.length)];
            correctAnswer = randomElement3.name;
            question = `What is the name of the element with atomic number?<br> <span class="highlight">${randomElement3.atomicNumber}</span>`;
            options = getOptions(correctAnswer, 'name');
            break;
    }

    displayQuestion(question, options, correctAnswer);

    const correctAnsContainer = document.getElementById('correctAnsContainer');
    correctAnsContainer.style.visibility = "hidden";
}

function getOptions(correctAnswer, key) {
    const options = new Set();
    options.add(correctAnswer);
    while (options.size < 4) {
        const randomIndex = Math.floor(Math.random() * elements.length);
        const randomOption = elements[randomIndex][key];
        if (randomOption === correctAnswer) continue; // Skip adding correct option again
        options.add(randomOption);
    }
    return shuffle(Array.from(options));
}

function displayQuestion(question, options, correctAnswer) {

    let obj = {
        "question":question,
        "options":options,
        "correctAnswer": correctAnswer,
        "selectedOption" : ""
    }

    gamePlay.push(obj);

    isAnswerSelected = false;
    const questionText = document.getElementById('question');
    questionText.innerHTML = question;

    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => checkAnswer(button, correctAnswer);
        optionsContainer.appendChild(button);
    });

    //disableOptions();
}

const correctSound = new Audio('assets/sounds/correct-156911.mp3');
const incorrectSound = new Audio('assets/sounds/wronganswer-37702.mp3');

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function checkAnswer(button, correctAnswer) {
    if (isAnswerSelected) return;
    isAnswerSelected = true;

    const buttons = document.querySelectorAll('#options button');
    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.innerText === correctAnswer) {
            btn.classList.add('correct');
        } else if (btn === button) {
            btn.classList.add('incorrect');
        }
    });

    gamePlay[gamePlay.length-1].selectedOption = button.innerText;

    console.log(gamePlay)

    const elementInfo = elements.find(el => el.name === correctAnswer);
    if (elementInfo) {
        displayElementInfo(elementInfo);
    }

    if (button.innerText === correctAnswer) {
        correctSound.play();
        score += 1;
        updateScoreDisplay();
    } else {
        incorrectSound.play();
    }

    updateScoreDisplay();
    enableNextButton();
}

function displayElementInfo(element) {
    clearElementInfo();

    const elementInfoBox = document.getElementById('correctAnswers');
    
    elementInfoBox.innerHTML = `
        <div class="element-info-box">
        <p><strong>Symbol:</strong> ${element.symbol}</p>
        <p><strong>Name:</strong> ${element.name}</p>
        <p><strong>Atomic Number:</strong> ${element.atomicNumber}</p>
        <p><strong>Category:</strong> ${element.metals}</p>
        </div>
    `;

    const correctAnsContainer = document.getElementById('correctAnsContainer');
    correctAnsContainer.style.visibility = "visible";
    
}

function clearElementInfo() {
    const existingElementInfo = document.querySelector('.element-info-box');
    if (existingElementInfo) {
        existingElementInfo.remove();
    }
}

function updateScoreDisplay() {
    document.getElementById('score').innerText = `Score: ${score}`;
}

function endQuiz() {
    console.log("endQuiz called"); // Debugging log
    clearInterval(timer); // Assuming 'timer' is defined elsewhere to track quiz time
    endTime=new Date();
   
    
    
    console.log(gamePlay)

    const scoreData = { score: score }; // Assuming 'score' is defined elsewhere

    // Send score data to save_score.php
    fetch('save_score.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            user_id: loggedInUserId,
            score:score,
            start_time: startTime.toISOString(),
            end_time: endTime.toISOString(),
            game_play:JSON.stringify(gamePlay)
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse JSON only if response is OK
    })
    .then(data => {
        // Handle JSON data here
        console.log(data.message);
        if (data.message === 'Score saved successfully') {
            showScreen("leaderboard");
            displayLeaderboard(); // After saving score, update leaderboard
        } else {
            alert(data.message); // Handle error if score couldn't be saved
        }
    })
    .catch(error => {
        console.error('Error saving score:', error);
    });
    showScreen("leaderboard");
   
  
    
}

function updateScoreDisplay() {
    document.getElementById('score').innerText = `Score: ${score}`;
}
async function updateLeaderboard(user_id,score,startTime,endTime) {
 
    try {
        const response = await fetch('save_score.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                user_id:user_id,
                score: score ,
            start_time:startTime.toISOString(),
        end_time:endTime.toISOString})
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Failed to save score');
        }

        console.log(data.message); // Log success message
        displayLeaderboard();
      
        showScreen('logout1');// Update leaderboard after saving score
    } catch (error) {
        console.error('Error saving score:', error);
    }
    
}


async function displayLeaderboard() {
    showScreen("leaderboard");
    console.log("displayLeaderboard called"); // Debugging log
    try {
        const response = await fetch('get_leaderboard.php');
        if (!response.ok) {
            throw new Error('Failed to fetch leaderboard');
        }

        const leaderboard = await response.json();
        console.log(leaderboard); // Check if data is received correctly

        const leaderboardTable = document.getElementById('leaderboardTable');
        leaderboardTable.innerHTML = '<tr><th>Name</th><th>Score</th></tr>'; // Clear existing rows

        leaderboard.forEach(entry => {
            const newRow = leaderboardTable.insertRow();
            const nameCell = newRow.insertCell(0);
            const scoreCell = newRow.insertCell(1);

            nameCell.textContent = entry.username;
            scoreCell.textContent = entry.max_score;
           
        });
   

    } catch (error) {
        console.error('Error fetching leaderboard:', error);
    }
  showScreen("leaderboard");
}

// Call displayLeaderboard() when the leaderboard screen is shown or when scores are updated
async function displayMyLeaderboard() {
    console.log("displayMyLeaderboard called"); // Debugging log
    try {
        const response = await fetch('get_myLeaderboard.php');
        if (!response.ok) {
            throw new Error('Failed to fetch my leaderboard');
        }

        const myLeaderboard = await response.json();
        console.log('Fetched my leaderboard data:', myLeaderboard); // Debugging: Check if data is received correctly

        const myLeaderboardTable = document.getElementById('myLeaderboardTable');
        if (!myLeaderboardTable) {
            throw new Error('myLeaderboardTable not found in HTML');
        }
        
        // Clear existing rows except the header row
        while (myLeaderboardTable.rows.length > 1) {
            myLeaderboardTable.deleteRow(1);
        }

        if (myLeaderboard.length === 0) {
            const messageRow = myLeaderboardTable.insertRow();
            const messageCell = messageRow.insertCell();
         
            messageCell.colSpan = 4; // Span across all columns
            messageCell.textContent = 'No leaderboard data found';
        } else {
            let count=0;
            myLeaderboard.forEach(entry => {
                const newRow = myLeaderboardTable.insertRow();
                const scoreCell = newRow.insertCell(0);
                const startTimeCell = newRow.insertCell(1);
                const endTimeCell = newRow.insertCell(2);
                const totalTime = newRow.insertCell(3);
                const gamePlayCell = newRow.insertCell(4);
             

                scoreCell.textContent = entry.score;
                startTimeCell.textContent = new Date(entry.start_time).toLocaleString();
                endTimeCell.textContent = new Date(entry.end_time).toLocaleString();
                
                var startDate = new Date(entry.start_time);
                // Do your operations
                var endDate   = new Date(entry.end_time);
                var seconds = (endDate.getTime() - startDate.getTime()) / 1000;

                totalTime.textContent = String(seconds)

                var evt = document.createEvent("Event");
                evt.data = entry

                gamePlayCell.innerHTML = "<button id='"+entry.id+"' onClick='onShowGamePlayClick(event)'>View Game Play</button>";
                
                //document.getElementById(entry.id).addEventListener("onGamePlayClick",document.getElementById(entry.id).dispatchEvent(evt))

                count++;
            });
        }

       // Show the leaderboard screen after populating data

    } catch (error) {
        console.error('Error fetching or displaying my leaderboard:', error);
    }
    showScreen("myLeaderboard"); 
}



function onShowGamePlayClick(e){

    const id = e.target.id;

    fetch('get_GamePlay.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
    })
    .then(response => response.json())
    .then(data => {
            console.log(data)
            displayMyGamePlayDetails(data[0].game_play)        
    });

}

function displayMyGamePlayDetails(gamePlayData){
    gamePlayData = gamePlayData.replace("<br>"," ")
    
    gamePlayData= JSON.parse(gamePlayData);

    let tableData = "<table class='gamePlay'><thead><tr><th>Q.No.</th><th>Question</th><th>Correct Ans</th><th>Wrong Ans</th></tr></thead><tbody>";

    for (var i=0;i<gamePlayData.length;i++){
        let isCorrect ="myGamePlay_inCorrect"
        if(gamePlayData[i].correctAnswer == gamePlayData[i].selectedOption){
            isCorrect = "myGamePlay_correct"
        }
        tableData +="<tr class='"+isCorrect+"'><td>"
        tableData += JSON.stringify((i+1))
        tableData +="</td><td>"
        strQuestion = gamePlayData[i].question.replace('"',"")
        tableData += strQuestion
        tableData +="</td><td>"
        strcorrectAnswer = gamePlayData[i].correctAnswer.replace('"',"")
        tableData += strcorrectAnswer
        tableData +="</td><td>"
        strselectedOption = gamePlayData[i].selectedOption.replace('"',"")
        tableData += strselectedOption
        tableData +="</td></tr>"
    }
    
    tableData +="</tbody></table>"

    let myGamePlay = document.getElementById("myLederboardGamePlay")
    myGamePlay.innerHTML = tableData;
    myGamePlay.style.display = "block";


}


function playAgain() {
    clearInterval(timer);
    score = 0;
    timeLeft = 300; // Reset timer to 5 minutes (300 seconds)
    document.getElementById('leaderboard').style.display = 'none';
    document.getElementById('quizScreen').style.display = 'block';
    timer = setInterval(updateTimer, 1000);
    enableNextButton(); // Ensure 'Next' button is enabled when playing again
    nextQuestion();
    endQuiz()
}

function handleEnterKey(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent form submission or other default Enter key behavior
        handleNext();
    }
}




// Function to update the timer display
function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').innerText = `Time left: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}


function showQuizScreen(){
        //document.getElementById('endQuizButton').style.display = 'block'; // Show end quiz button     
    }


// Function to handle showing the login screen
function showLoginScreen() {
    showScreen("loginScreen")
    const correctAnsContainerr = document.getElementsByClassName('main-header');
    correctAnsContainerr.style.display = "none";
}

// Function to show the leaderboard screen
function showLeaderboardScreen() {

    showScreen("leaderboard")
    //document.getElementById('endQuizButton').style.display = 'none'; // Show end quiz button
}


// Function to start a new game (play again)
function playAgain() {
    clearInterval(timer);
    score = 0;
    timeLeft = 300; // Reset timer to 5 minutes (300 seconds)

    showScreen("startGame")

    timer = setInterval(updateTimer, 1000);
    enableNextButton(); // Ensure 'Next' button is enabled when playing again
    nextQuestion();
}



// Function to handle the 'Next' button click
function handleNext() {
    if (isNextEnabled) {
        nextQuestion();
    }
}

// Function to enable the 'Next' button
function enableNextButton() {
    isNextEnabled = true;
    document.getElementById('nextButton').style.display = 'block';
}

// Function to disable the 'Next' button
function disableNextButton() {
    isNextEnabled = false;
    document.getElementById('nextButton').style.display = 'none';
}

// Elements array (assuming it's defined elsewhere)


// Other functions (e.g., displayQuestion, checkAnswer, etc.) remain unchanged



function onLeaderBoardClose(e){
    if(e.target.id == "myLederboardGamePlay")
        e.target.style.display = "none"
}



window.onload = function(){
    var loggedInUserID = localStorage.getItem("loginID");
    if(loggedInUserID){
        displayMyLeaderboard()
    }
}