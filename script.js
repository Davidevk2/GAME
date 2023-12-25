const btnSend = document.querySelector("#btnSend");
const btnChoose = document.querySelector("#btnChoose");
let volunteers = [];
const colors = ["tomato", "pink", "cyan", "coral", "cornflowerblue", "mediumslateblue"];

function fillContent(){
    
    let amount =  document.getElementById("amount").value;
   if(amount >= 10 && amount <= 150){
        let i = 1;
        while(i <= amount){
            volunteers.push(i);
            i++;
        }
        createCards()
        console.log(volunteers);

   }else{
        message = "The amount of volunteers must be greater or iqual to ten!";
        typeMessage = 1;
        showMessage(message, typeMessage);
        console.log(message);
        //showMessage(message);
   }
}

function createCards(){
    const divVolunteers = document.getElementById("volunteers");
    volunteers.forEach((num) =>{
        let card = document.createElement("div");
        card.classList = "item";
        card.style.backgroundColor = chooseColor();
        card.innerText = num; 
        divVolunteers.appendChild(card);
    });

    console.log(divVolunteers);
}

function chooseColor(){
    let index = Math.floor(Math.random() * colors.length);
    let color = colors[index];
    return color;
}

const modalWinner = document.getElementById("modalWinner");
const boxWinner = document.querySelector(".winner-Info");
const btnClose = document.getElementById("btn-Close");

function chooseWinner(){
    let index = Math.floor(Math.random() * volunteers.length);
    let winner = volunteers[index];

    const sound1 = new Audio('./sounds/choosing.mp3');
    
    sound1.play();
    setTimeout(()=>{
        sound1.pause();
        const sound2 = new Audio('./sounds/drums.mp3');
        const sound3 = new Audio('./sounds/winner.mp3');
        sound2.play();
        sound3.play();

        modalWinner.classList.add("fade-in");
        modalWinner.style.display = "block";
        boxWinner.textContent = winner ;

        volunteers.pop(winner);

        console.log(volunteers);
        //removeChild;
    }, 7000);
    return winner;
}

const modal = document.querySelector(".modal-dialog");
function showMessage(message, typeMessage){
    const txtMessage = document.querySelector("#txtMessage");

    txtMessage.innerText = message;
    modal.style.display = ("block");
    txtMessage.style.color = "red";
    
}


//cations with buttons
btnSend.onclick =  fillContent;
btnChoose.onclick = chooseWinner;

//close modal
btnClose.onclick = function () {
    modalWinner.style.display = "none";
}


//shorcuts funcionality or controls
document.addEventListener("keypress", (event)=>{
    if(event.code == "Space" || event.key== " "){
        let amount = document.getElementById("amount");
        if(amount.value != ""){
            chooseWinner();
        }else{
            message = "the amount is empty";
            typeMessage = 1;
            showMessage(message, type);
        }
    }else if(event.key == "Enter"){    
        fillContent();
    }else if(event.key == "R" || event.key == "r"){
        if(confirm("Sure that you want to reload the page ?")){
            window.location.reload();
        }

    }else if(event.key == "F"|| event.key == "f"){
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
});

