const screens = ["myLederboardGamePlay","loginScreen","registerScreen","startGame","welcomeScreen","leaderboard","quizScreen","myLeaderboard"]
const buttons =["logout5","mygamebutton","leaderboard5"]

function hideAllScreens(){
    screens.forEach(element => {
        document.getElementById(element).style.display="none"
    });
}

function hideAllButtons(){
    buttons.forEach(element => {
        document.getElementById(element).style.display="none"
    });
}

function showScreen(screenName){
    hideAllScreens()
    hideAllButtons()
    document.getElementById(screenName).style.display = "block";
    udpateUserNames()

       switch(screenName){


            case 'loginScreen':

            break;

            case 'registerScreen':

            break;
            
            case 'startGame':
                document.getElementById("logout5").style.display = "block";
                document.getElementById( "mygamebutton").style.display = "block";
            break;

            case 'welcomeScreen':

            break;
            case 'leaderboard':
                document.getElementById("logout5").style.display = "block";
                document.getElementById( "mygamebutton").style.display = "block";
               

            break;
            case 'quizScreen':

            break;
            case 'myLeaderboard':
                  document.getElementById("leaderboard5").style.display = "block";
            break;
           
    }

}