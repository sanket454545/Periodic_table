
function login() {
   
   
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    fetch('login.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        
        if (data.message === 'Login successful') {
            showScreen("startGame")
            loggedInUserId = data.user_id; // Store user ID
            loggedInUserName = data.userName
            

            updateUserDetails(loggedInUserId, loggedInUserName)
            
            startQuiz(data.user_id); // Pass user ID
        } else {
            alert(data.message);
        }
    });
   
}

function updateUserDetails(userID, userName){
    localStorage.setItem("loginID", userID);
    localStorage.setItem("userName", userName);

    
}

function udpateUserNames(){
    var allUserName = document.getElementsByClassName("userName") 
   
    for (i=0; i<allUserName.length; i++){
        allUserName[i].innerText =  localStorage.getItem("userName");
    }
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
            showScreen('loginScreen');
        }
    });
}



function logout() {

    localStorage.setItem("loginID", "");
    localStorage.setItem("userName", "");

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
        //alert(data.message); // Display logout message
        showLoginScreen(); // Show login screen after successful logout
    })
    .catch(error => {
        console.error('Logout failed:', error);
    });

    // Hide all relevant screens and buttons
    showScreen("loginScreen")
}