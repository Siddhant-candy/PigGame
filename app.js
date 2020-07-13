/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/
var scores,roundScore,activePlayer,gamePlay;     //state variables tells us condition of a system here stae var is gamePlay

function init()
{
    scores = [0,0]; // as we want the code to becleaner so we just choose to us array
    roundScore = 0;
    activePlayer = 0; // 0 will be the 1st player and 1 is the second player
    
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    gamePlay = true;
}

init();


//document.querySelector('#current-'+activePlayer).textContent = dice // to change the text content we use tectContent which can only put text 

//document.querySelector('#current-'+activePlayer).innerHTML = '<em>'+dice+'</em>'
//it can add some html which must be a string as if not a string then it will be detected as javascript code which will be an error

//var x = document.querySelector('#score-0').textContent; // to store the value of a html element
//console.log(x);



//adding css 
/*function btn(){
    //do something here
}*/               //getElementById is faster then query selector


function nextPlayer()
{
        roundScore = 0;
        document.getElementById('current-'+activePlayer).textContent = 0;
        activePlayer === 0 ? activePlayer =1 : activePlayer=0; //ternary operator
        document.querySelector('.player-0-panel').classList.toggle('active')           //remove or add class to an html tag
        document.querySelector('.player-1-panel').classList.toggle('active');          // three ways are add remove and toggle
        document.querySelector('.dice').style.display= 'none'; 
}







document.querySelector('.btn-roll').addEventListener('click',function()
{   
    if(gamePlay)
    {
    //1 random number
    var dice = Math.floor(Math.random()*6)+1;
    
    // 2. display result
   var diceDOM = document.querySelector('.dice');
    diceDOM.style.display= 'block'
    diceDOM.src ='dice-'+ dice +'.png'
    
    //3. Update the total score and if the score is 1 then loose all the secured things
    if(dice !== 1){
        //Add Score
        roundScore += dice;
        document.querySelector('#current-'+activePlayer).textContent = roundScore;
        document.querySelector('#player-'+activePlayer+'-panel').classList.add('active');
    }
    else{
        //NextPlayer
        nextPlayer();
    }
}
    
    
})                           //always use strings wherever required



document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlay){
    //add the current score to the player's global school
    scores[activePlayer]+=roundScore;
    document.getElementById('score-'+activePlayer).textContent = scores[activePlayer]
    //update the users interface
    document.getElementById('score-'+activePlayer).textContent = scores[activePlayer]
    
    //check if the player won the game 
    
    if(scores[activePlayer] >= 100)
        {
            document.querySelector('#name-'+activePlayer).textContent = 'Winner';
            document.querySelector('.dice').style.display= 'none'; 
            document.querySelector('.player-'+ activePlayer +'-panel').classList.add('winner');
            document.querySelector('.player-'+ activePlayer +'-panel').classList.remove('active');
            gamePlay = false;
            
        }
    else
        {
            nextPlayer();           // why same functions at two places
        }
    }
    
})



document.querySelector('.btn-new').addEventListener('click',init);
