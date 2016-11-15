$(document).ready(function(){

  //question indexing variable
  questNumber = 0;

  //Big Go
  $('#biggo-button').click(function(){
    console.log("hey")
    //Fills in question information and answers
    populate();
    //start the timer
    //n is counter varibal so n = amount of time on the clock
    var n = 30;
    setTimeout(countDown,1000);
    //call this until n = 0
    function countDown(){

       n--;
       if(n > 0){
          setTimeout(countDown,1000);
       }
       else if (n == 0){
         timesUp();
       }
       //display the timer
       $('#timer').html(n);
    };


  //increment the question counter first
});
  $('.answer-btn').on('click', function(){
  //Get id of clicked answer
  selectedAns = this.id;

  //compare
  var correctAns = (questions[questNumber].correct);
  if (selectedAns == correctAns){
    console.log("yay!");
  }
  else{
    console.log("noooo");
  }
  //DONT remove answer
  $(this).toggleClass("notchosen");


  });



//big go


function timesUp(){
  //hide all answers when time runs out
//   $('.label').fadeOut();
// $('.notchosen').fadeOut(1000);
//clear all divs while they are hidden
// console.log('cleaned!');
// $('.notchosen').show();
// $('#question').html("");
// $('#level').html("");
// $('#category').html("");
// $('#answerA').html("");
// $('#answerB').html("");
// $('#answerC').html("");
// $('#answerD').html("");
// setTimeout(showAns, 30000);
console.log("time's up!");
$('.notchosen').fadeOut(1000);


};
function showAns(){
$('.notchosen').show();
$('.label').show();

};
$('#nextbutton').click(function(){
populate();


});


//doc ready func
});
//functions
function populate(){
//increment question id number or indexing variable if you're cool
  questNumber += 1;
  // GET a lot of 'dot' properties from our JS object
  //difficulty
  var questLevel = (questions[questNumber].level);
  //answer key
  var correctAns = (questions[questNumber].correct);
  //category
  questCat = (questions[questNumber].category);
  //Body of question text
  questText = (questions[questNumber].question);
  //Answers A-D
  ansA = (questions[questNumber].answerA);
  ansB = (questions[questNumber].answerB);
  ansC = (questions[questNumber].answerC);
  ansD = (questions[questNumber].answerD);
  //add the variable to it's respective "shell" div in the DOM
$('#question').html(questText);
$('#level').html(questLevel);
$('#category').html(questCat);
$('#answerA').html(ansA);
$('#answerB').html(ansB);
$('#answerC').html(ansC);
$('#answerD').html(ansD);
};
