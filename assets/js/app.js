//document ready function
$( document ).ready(function() {


//declaring variables
var question;
var answer1;
var answer2;
var answer3;
var answer4;
var correctAnswer;
var asel;
var bsel;
var csel;
var dsel;

//creating questions

var questionObj = [
    {
        question: "What activity will burn 150 calories?",
        answers: {
          a: "Banging your head on a wall for an hour",
          b: "Untangling chords for thirty minutes",
          c: "Meditating and thinking about running for ten minutes",
          d: "Brushing your teeth for forty minutes"
        },
        correctAnswer: "a"
      },
      {
        question: "What is a flock of crows called?",
        answers: {
          a: "A Bombardment",
          b: "A Flock",
          c: "A Murder",
          d: "A Gaggle"
        },
        correctAnswer: "c"
      },
      {
        question: "Who is the strongest?",
        answers: {
          a: "Gorilla",
          b: "Dung Beetle",
          c: "Anaconda",
          d: "Penguin"
        },
        correctAnswer: "b"
      },
      {
        question: "Which Animal is the Loudest?",
        answers: {
          a: "Doggo",
          b: "Elephant",
          c: "Lion",
          d: "Whale"
        },
        correctAnswer: "d"
      },
]



//populating questions to html
function popQue (){


$( ".btn" ).click(function() {
var i = 0;
i++
  
question = (questionObj[i].question);
$('#question').append(question);
console.log(question);
  

if (question === questionObj[i].question){
  answer1 = (questionObj[i].answers.a);
  answer2 = (questionObj[i].answers.b);
  answer3 = (questionObj[i].answers.c);
  answer4 = (questionObj[i].answers.d);
  correctAnswer = (questionObj[i].correctAnswer);

  $('#firstan').append(answer1);
  $('#secondan').append(answer2);
  $('#thirdan').append(answer3);
  $('#fourthan').append(answer4);
}
if (correctAnswer === "a"){
  $('#firstan').addClass("correct");

}
else if (correctAnswer === "b"){
  $('#secondan').addClass("correct");
}
else if (correctAnswer === "c"){
  $('#thirdan').addClass("correct");
}
else if (correctAnswer === "d"){
  $('#fourthan').addClass("correct");
}
console.log(correctAnswer);


$( ".correct" ).click(function() {
  alert( "You Guessed it!" );

});
});

}


popQue();


//creating timer 
var timeLeft = 30;
var elem = document.getElementById('timerdiv');
var timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
        timeoutError();
    } else {
        elem.innerHTML = timeLeft;
        timeLeft--;
    }
}

function timeoutError() {
    alert("Took To Long Try Again");
}


//capturing wins and losses

//report results at the end (probably use the capturing wins and losses function and add them together)

//end doc ready function
});