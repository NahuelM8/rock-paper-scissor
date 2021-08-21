const rock = document.querySelector('.img-rock');
const paper = document.querySelector('.img-paper');
const scissor = document.querySelector('.img-scissor');
let userOption;

rock.onclick = () => {
   userOption ="rock";
   rock.setAttribute('src', 'resources/rock_USER.svg');
   rock.style.pointerEvents = "none";
   paper.style.pointerEvents = "none";
   scissor.style.pointerEvents = "none";
   startGame(userOption, npcOption());
};
paper.onclick = () => {
   userOption ="paper";
   paper.setAttribute('src', 'resources/paper_USER.svg');
   rock.style.pointerEvents = "none";
   paper.style.pointerEvents = "none";
   scissor.style.pointerEvents = "none";;
   startGame(userOption, npcOption());
};
scissor.onclick = () => {
   userOption ="scissor";
   scissor.setAttribute('src', 'resources/scissor_USER.svg');
   rock.style.pointerEvents = "none";
   paper.style.pointerEvents = "none";
   scissor.style.pointerEvents = "none";
   startGame(userOption, npcOption());
};

function npcOption(){
   const options = ['rock', 'paper', 'scissor'];
   npc = options[Math.floor(Math.random() * options.length)];
   return npc;
}

function startGame(user, npc){
   if (user != npc){
      if (user == 'rock' && npc == 'scissor'){
         document.querySelector('.img-'+npc).setAttribute('src','resources/'+npc+'_NPC.svg');
         showResult(true);
      }else if (user == 'paper' && npc == "rock"){
         document.querySelector('.img-'+npc).setAttribute('src','resources/'+npc+'_NPC.svg');
         showResult(true);
      }else if(user == 'scissor' && npc == "paper"){
         document.querySelector('.img-'+npc).setAttribute('src','resources/'+npc+'_NPC.svg');
         showResult(true);
      } else {
         document.querySelector('.img-'+npc).setAttribute('src','resources/'+npc+'_NPC.svg');
         showResult(false)
      }
   }else {
      showResult(false, true);
   }
}

function showResult(userWon, tie){
   if (userWon == true){
      document.querySelector('.result').textContent = "¡Has ganado!";
      document.querySelector('.result').style.color = "#B6C867"
   } else{
      if (tie == true){
         document.querySelector('.result').textContent = "Empate";
         document.querySelector('.result').style.color = "#F6D167"
      }else{
         document.querySelector('.result').textContent = "¡Has Perdido!";
         document.querySelector('.result').style.color = "#FF4848";
      }
   }
}



