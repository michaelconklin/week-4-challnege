var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

var timerEl = document.getElementById('time');
var startBtn = document.getElementById('start');
var submit = document.getElementById('submit');
var questionsEl = document.getElementById('questions');
var choicesEl = document.getElementById('choices');
var feedbackEl = document.getElementById('feedback');


function startQuiz() {
  var startScreenEl = document.getElementById('start-screen');
  startScreenEl.removeAttribute('class');
  
    questionsEl.removeAttribute('class')
    
    timerId = setInterval(clock, 1000);
    timerEl.textContent = time;

    getQuestion();
}

function getQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    var titleEl = document.getElementById('question-title');
    titleEl.textContent = currentQuestion.title;

    choicesEl.innerHTML = '';

    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var choice = currentQuestion.choices[i];
        var choiceNode = document.createElement('button');
        choiceNode.setAttribute('class', 'choice');
        choiceNode.setAttribute('value', choice);

        choiceNode.textContent = i + 1 + '. ' + choice;

        choicesEl.appendChild(choiceNode);
    }
}

function questionClick(event) {
  var buttonEl = event.target;

  if (!buttonEl.matches('.choices')) {
    return;
  }

  if (buttonEl.value !== questions[currentQuestionIndex].answer) {
    time -= 15;

    if (time < 0) {
      time = 0;
    }

    timerEl.textContent = time;

    feedbackEl.textContent = 'Incorrect!';
  } else {
    feedbackEl.textContent = 'Correct!';
  }

  feedbackEl.setAttribute('class', 'feedback');
  setTimeout(function () {
    feedbackEl.setAttribute('class', 'feedback hide');
  }, 1000);
}




function quizEnd() {
    clearInterval(timerId);
  
    var endScreenEl = document.getElementById('end-screen');
    endScreenEl.removeAttribute('class');
  
    var finalScoreEl = document.getElementById('final-score');
    finalScoreEl.textContent = time;
  
    questionsEl.setAttribute('class', 'hide');
  }

function clock() {
    time--;
    timerEl.textContent = time;

    if (time <= 0) {
      quizEnd();
    }
  }


startBtn.onClick = startQuiz;
choicesEl.onClick = questionClick;