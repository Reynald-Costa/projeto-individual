const $startGameButton = document.querySelector(".start-quiz ");
const $verDados = document.querySelector(".ver-dados");
const $questionsContainer = document.querySelector(".questoes-container");
const $answersContainer = document.querySelector(".respostas-container");
const $questionText = document.querySelector(".questao");
const $nextQuestionButton = document.querySelector(".next-question")

$startGameButton.addEventListener("click", startgame);
$nextQuestionButton.addEventListener("click", displayNextQuestion);

let currentQuestionIndex = 0;
let totalCorrect = 0;

function startgame() {
    $startGameButton.classList.add("hide");
    $verDados.classList.add("hide");
    $questionsContainer.classList.remove("hide");
    displayNextQuestion();
}

function displayNextQuestion() {

  resetState()

  if (questions.length == currentQuestionIndex) {
    return finishGame()
  }

    $questionText.textContent = questions[currentQuestionIndex].question;
    questions[currentQuestionIndex].answers.forEach(answer => {
        const newAnswer = document.createElement("button")
        newAnswer.classList.add("button", "resposta")
        newAnswer.textContent = answer.text
        if (answer.correct) {
            newAnswer.dataset.correct = answer.correct
        }
        $answersContainer.appendChild(newAnswer)

        newAnswer.addEventListener("click", selectAnswer)
    })
}

function resetState() {
  while ($answersContainer.firstChild) {
    $answersContainer.removeChild($answersContainer.firstChild)
  } 

  document.body.removeAttribute("class")
  $nextQuestionButton.classList.add("hide")
}


function selectAnswer(event) {
    const answerClicked = event.target

    // if (answerClicked.dataset.correct) {
    //   document.body.classList.add("correct")
    //   totalCorrect++
    // } else {
    //   document.body.classList.add("incorrect")
    // }
    
    document.querySelectorAll(".resposta").forEach(button => {
      if (button.dataset.correct) {
        button.classList.add("correct")
        } else {
            button.classList.add("incorrect")
        }
      
        button.disabled = true
    })
  
  $nextQuestionButton.classList.remove("hide");
  currentQuestionIndex++
}


function finishGame() {
  const totalQuestions = questions.length
  const performance = Math.floor(totalCorrect * 100 / totalQuestions)

  let message = ""

  switch (true) {
    case (performance >= 90):
      message = "Excelente :)"
      break
    case (performance >= 70):
      message = "Muito bom :)"
      break
    case (performance >= 50):
      message = "Bom"
      break
    default:
      message = "Pode melhorar :("
  }

  $questionsContainer.innerHTML = 
  `
    <p class="final-message" style="color: white;">
      Você acertou ${totalCorrect} de ${totalQuestions} questões!
      <span>Resultado: ${message}</span>
    </p>
    <button 
    onclick="window.location = 'dashboard.html'" 
      class="button"
    >
      Ver Dados
    </button>
  `

}


const questions = [
    {
      question: "Qual foi o ano da inauguração do Estádio do Morumbi, casa do São Paulo?",
      answers: [
        { text: "1953", correct: false },
        { text: "1960", correct: false },
        { text: "1970", correct: true },
        { text: "1980", correct: false }
      ]
    },
    {
      question: "Quem é o maior artilheiro da história do São Paulo?",
      answers: [
        { text: "Rogério Ceni", correct: false },
        { text: "Serginho Chulapa", correct: true },
        { text: "França", correct: false },
        { text: "Careca", correct: false }
      ]
    },
    {
      question: 'Quantos títulos brasileiros o São Paulo já conquistou?',
      answers: [
        { text: '6', correct: true},
        { text: '7', correct: false},
        { text: '8', correct: false },
        { text: '9', correct: false }
      ]
    },
    {
      question: 'Quantos títulos da Copa Libertadores da América o São Paulo Futebol Clube possui?',
      answers: [
        { text: "2", correct: false },
        { text: "3", correct: true },
        { text: "4", correct: false },
        { text: "5", correct: false }
      ]
    },
    {
      question: 'Quem é o atual técnico do São Paulo?',
      answers: [
        { text: 'Muricy Ramalho', correct: false },
        { text: 'Fernando Diniz', correct: false },
        { text: 'Luis Zubeldía', correct: true },
        { text: 'Hernán Crespo', correct: false }
      ]
    }
]   