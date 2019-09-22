//document ready function
$(document).ready(function () {


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
      question: "Place Holder",
      answers: {
        a: "Banging your head on a wall for an hour",
        b: "Untangling chords for thirty minutes",
        c: "Meditating and thinking about running for ten minutes",
        d: "Brushing your teeth for forty minutes"
      },
      correctAnswer: "z"
    },
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
  var correctArray = 0;
  var i = 0;
  function popQue() {
    
    $(".btn").click(function () {
  
      i++
      console.log(i);

      if (i === 5) {
        $(".jumbotron").empty();
        $("#results").append("You Got "+ correctArray + " Correct out of 4")

      }

      question = (questionObj[i].question);
      $('#question').html(question);
      console.log(question);


      if (question === questionObj[i].question) {
        answer1 = (questionObj[i].answers.a);
        answer2 = (questionObj[i].answers.b);
        answer3 = (questionObj[i].answers.c);
        answer4 = (questionObj[i].answers.d);
        correctAnswer = (questionObj[i].correctAnswer);

        $('#firstan').html(answer1);
        $('#secondan').html(answer2);
        $('#thirdan').html(answer3);
        $('#fourthan').html(answer4);
      }
      if (correctAnswer === "a") {
        $('#firstan').addClass("correct");
        $('#secondan').removeClass("correct");
        $('#thirdan').removeClass("correct");
        $('#fourthan').removeClass("correct");

      }
      else if (correctAnswer === "b") {
        $('#secondan').addClass("correct");
        $('#firstan').removeClass("correct");
        $('#thirdan').removeClass("correct");
        $('#fourthan').removeClass("correct");
      }
      else if (correctAnswer === "c") {
        $('#thirdan').addClass("correct");
        $('#firstan').removeClass("correct");
        $('#secondan').removeClass("correct");
        $('#fourthan').removeClass("correct");

      }
      else if (correctAnswer === "d") {
        $('#fourthan').addClass("correct");
        $('#firstan').removeClass("correct");
        $('#secondan').removeClass("correct");
        $('#thirdan').removeClass("correct");
      }

      


      console.log(correctAnswer);
      $(".correct").click(function () {
        correctArray++
        console.log(correctArray + "wins");
      });


    });

  }




  popQue();


  //creating timer 
  var timeLeft = 90;
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


  //end doc ready function
});