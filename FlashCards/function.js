const flashCards = document.getElementsByClassName("Flashcards")[0];
const newBox = document.getElementsByClassName("create-box")[0];
const question = document.getElementById('question');
const answer = document.getElementById('answer');
let array = [];

function divCreation(text){
    let div = document.createElement("Div");
    let question = document.createElement("H2");
    let answer = document.createElement("H2");
    let click = document.createElement("H2")

    div.className = 'flashcard';

    question.setAttribute('style',"border-top: 1px #8E0B0B; padding: 15px; margin-top: 30px");
    question.innerHTML = text.theeQuestion

    answer.setAttribute('style', "text-align:center; display:none; color: #8E0B0B")
    answer.innerHTML = text.theeAnswer

    click.setAttribute('style', "text-align:center; color: #8E0B0B")
    //
    click.innerHTML = "Click for Answer"

    div.appendChild(question);
    div.appendChild(answer);
    div.appendChild(click)

    div.addEventListener("click", function(){
        if(answer.style.display == "none"){
            click.style.display = "none"
            answer.style.display = "block";
        }else{
            click.style.display = "block"
            answer.style.display = "none";
        }
    })

    flashCards.appendChild(div);
}

function addFlashcard(){
   let flashcardResult = {
        'theeQuestion' : question.value,
        'theeAnswer' : answer.value
    }
    array.push(flashcardResult);

    divCreation(array[array.length - 1]);
    question.value = ''
    answer.value = ''
}

function delFlashcardBox(){
    flashCards.innerHTML = '';
    array = [];
}

function showCreateCardBox(){
    newBox.style.display = "block";
}

function hideCreateBox(){
    newBox.style.display = "none";
}
