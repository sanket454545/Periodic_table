const screens = ["loginScreen","registerScreen","startGame","welcomeScreen","leaderboard","quizScreen","myLeaderboard"]

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


           case 'loginScreen':
                  
                   document.getElementById("logout5").style.display = "none";
                   document.getElementById( "mygamebutton").style.display = "none";
                   document.getElementById("leaderboard5").style.display = "none";

            break;

            case 'registerScreen':

            break;
            
            case 'startGame':
                document.getElementById("logout5").style.display = "block";
                document.getElementById( "mygamebutton").style.display = "none";
            break;

            case 'welcomeScreen':

            break;
            case 'leaderboard':
                document.getElementById("leaderboard5").style.display = "none";
                document.getElementById("logout5").style.display = "block";
                document.getElementById( "mygamebutton").style.display = "block";
               

            break;
            case 'quizScreen':
                document.getElementById("logout5").style.display = "none";

            break;
            case 'myLeaderboard':
               
                  document.getElementById("leaderboard").style.display = "none";
                  document.getElementById("leaderboard5").style.display = "block";
                  document.getElementById("mygamebutton").style.display = "none";

                  
            break;
           
    }

}