const screens = ["loginScreen","registerScreen","startGame","help","welcomeScreen","leaderboard","quizScreen","myLeaderboard"]

function hideAllScreens(){
    screens.forEach(element => {
        document.getElementById(element).style.display="none"
      
    });
  
}

function showScreen(screenName){
    hideAllScreens()
    document.getElementById(screenName).style.display = "block";
    udpateUserNames()

    switch(screenName){
      
           
}