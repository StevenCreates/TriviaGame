//document ready function
$( document ).ready(function() {


//declaring variables
var question;
var answer1;
var answer2;
var answer3;
var answer4;
var correctAnswer;

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
question = (questionObj[0].question);
$('#question').append(question);
console.log(question);

if (question === questionObj[0].question){
  answer1 = (questionObj[0].answers.a);
  answer2 = (questionObj[0].answers.b);
  answer3 = (questionObj[0].answers.c);
  answer4 = (questionObj[0].answers.d);
  
  $('#firstan').append(answer1);
  $('#secondan').append(answer2);
  $('#thirdan').append(answer3);
  $('#fourthan').append(answer4);
}



}

popQue();
//creating timer 

//capturing wins and losses

//report results at the end (probably use the capturing wins and losses function and add them together)

//end doc ready function
});