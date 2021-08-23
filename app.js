const rock = document.querySelector('.img-rock');
const paper = document.querySelector('.img-paper');
const scissor = document.querySelector('.img-scissor');
const btnPlayAgain = document.querySelector('.btn-play-again');
let userOption;



//
//Eventos [INICIO]
//

btnPlayAgain.onclick = () => {
   //Reinicio las imagenes
   rock.setAttribute('src', 'resources/rock.svg');
   paper.setAttribute('src', 'resources/paper.svg');
   scissor.setAttribute('src', 'resources/scissor.svg');
   //Reinicio los point event
   rock.style.pointerEvents = "all";
   paper.style.pointerEvents = "all";
   scissor.style.pointerEvents = "all";
   //Reinicio el mensaje principal
   document.querySelector('h2').textContent = '¿Seras capáz de ganarle a la máquina? Prueba tu suerte...';
   document.querySelector('h2').style.color = '#ffffff';
   //Desaparecer boton de volver a jugar
   btnPlayAgain.style.visibility = "hidden";

}

rock.onclick = () => {
   userOption ="rock";
   rock.setAttribute('src', 'resources/rock_USER.svg');
   rock.style.pointerEvents = "none";
   paper.style.pointerEvents = "none";
   scissor.style.pointerEvents = "none";
   btnPlayAgain.style.visibility = "visible";
   startGame(userOption, npcOption());
   
};
paper.onclick = () => {
   userOption ="paper";
   paper.setAttribute('src', 'resources/paper_USER.svg');
   rock.style.pointerEvents = "none";
   paper.style.pointerEvents = "none";
   scissor.style.pointerEvents = "none";;
   startGame(userOption, npcOption());
   btnPlayAgain.style.visibility = "visible";
};
scissor.onclick = () => {
   userOption ="scissor";
   scissor.setAttribute('src', 'resources/scissor_USER.svg');
   rock.style.pointerEvents = "none";
   paper.style.pointerEvents = "none";
   scissor.style.pointerEvents = "none";
   startGame(userOption, npcOption());
   btnPlayAgain.style.visibility = "visible";
};

//
//Eventos [FIN]
//



//
//Funciones [INICIO]
//

function npcOption(){
   const options = ['rock', 'paper', 'scissor'];
   npc = options[Math.floor(Math.random() * options.length)];
   return npc;
}

function startGame(user, npc){
   if (user != npc){
      if (user == 'rock' && npc == 'scissor'){
         document.querySelector('.img-'+npc).setAttribute('src','resources/'+npc+'_NPC.svg');
         showResult('won');
         refreshScore('won');
      }else if (user == 'paper' && npc == "rock"){
         document.querySelector('.img-'+npc).setAttribute('src','resources/'+npc+'_NPC.svg');
         showResult('won');
         refreshScore('won');
      }else if(user == 'scissor' && npc == "paper"){
         document.querySelector('.img-'+npc).setAttribute('src','resources/'+npc+'_NPC.svg');
         showResult('won');
         refreshScore('won');
      } else {
         document.querySelector('.img-'+npc).setAttribute('src','resources/'+npc+'_NPC.svg');
         showResult('lost')
         refreshScore('lost');
      }
   }else {
      showResult('tie');
      refreshScore('tie');
   }
}

function showResult(userStatus){
   const npcLostMessages = ['Esta vez tuviste suerte ¬_¬', '¡ Juguemos otra vez YA !', '(•ˋ _ ˊ•)', 'ಠ_ಠ', 'La próxima vez no vas a tener tanta suerte'];
   const npcWonMessages = ['No podes conmigo ^_-', 'Suerte para la próxima', 'JAJAJAJAJ', 'No tiene sentido que sigas, soy un el mejor en esto', '¯\_(ツ)_/¯'];
   const textH2 = document.querySelector('h2');

   if(userStatus == 'won'){
      textH2.textContent = npcLostMessages[Math.floor(Math.random() * npcLostMessages.length)];
      textH2.style.color = '#B6C867';
      
   } else if(userStatus == 'lost'){
      textH2.textContent = npcWonMessages[Math.floor(Math.random() * npcWonMessages.length)];
      textH2.style.color = '#FF4848';
   } else {
      textH2.textContent = 'Empatamos. ¡Juguemos otra vez!'
      textH2.style.color = '#FFB830';
   }
}

function refreshScore (userStatus){
    if (userStatus == 'won'){
       document.querySelector('.user-score').textContent = parseInt(document.querySelector('.user-score').textContent) + 1;
    }else if (userStatus == 'lost'){
      document.querySelector('.npc-score').textContent = parseInt(document.querySelector('.npc-score').textContent) + 1;
    }
}

//
//Funciones [FIN]
//



