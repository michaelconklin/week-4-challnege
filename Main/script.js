//This is the list of questions and answers for the quiz(I didnt have time to come up with my own)
var questions = [
    {
      title: 'Commonly used data types DO NOT include:',
      choices: ['strings', 'booleans', 'alerts', 'numbers'],
      answer: 'alerts',
    },
    {
      title: 'The condition in an if / else statement is enclosed within ____.',
      choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
      answer: 'parentheses',
    },
    {
      title: 'Arrays in JavaScript can be used to store ____.',
      choices: [
        'numbers and strings',
        'other arrays',
        'booleans',
        'all of the above',
      ],
      answer: 'all of the above',
    },
    {
      title:
        'String values must be enclosed within ____ when being assigned to variables.',
      choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
      answer: 'quotes',
    },
    {
      title:
        'A very useful tool used during development and debugging for printing content to the debugger is:',
      choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
      answer: 'console.log',
    },
  ];


var timerEl = document.getElementById('time');
var startBtn = document.getElementById('start');
var submit = document.getElementById('submit');
var questionsEl = document.getElementById('questions');
var choicesEl = document.getElementById('choices');


function startQuiz() {
    timerId = setInterval(clock, 1000);
    timerEl.textContent = time;
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
        choiceNode.setAttribute('valuye', choice);

        choiceNode.textContent = i + 1 + '. ' + choice;

        choicesEl.appendChild(choiceNode);
    }
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