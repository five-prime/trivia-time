$(document).ready(function(){



  var pubnub = new PubNub({
      subscribeKey: 'sub-c-9e87421e-aa32-11e6-b237-02ee2ddab7fe', // always required
      publishKey: 'pub-c-ce79cb55-6339-42b4-aa4f-30d402389201' // only required if publishing
  });
//displays and centers alert asking for user input
  $('.alert').css({
      'display' : 'inherit',
      'position' : 'absolute',
      'left' : '50%',
      'top' : '50%',
      'margin-left' : -$('.alert').outerWidth()/2,
      'margin-top' : -$('.alert').outerHeight()/2
  });
//ok button on alert sends name and # of players
  $('#clicky').click(function(){
  nameGame = document.getElementById('userInput').value;
  numGame = document.getElementById('userNumber').value;
  //alert goes away
  $('.alert').css({
    "display" : "none"
  })
  //add channel name to the two relevant places on the page
  $('.channel-name').html(nameGame);
//let the channel know we up son
  pubnub.publish(
      {
          message: {
              text : "Monitor for " + nameGame + " is yes",
              players: numGame
          },
          channel: nameGame
      },
      function (status, response) {
          if (status.error) {
              console.log(status)
          } else {
              console.log("message Published w/ timetoken", response.timetoken)
          }
      }
  );
  pubnub.addListener({
    message: messageHandler

  });

  pubnub.subscribe({
      channels: ['Han']
  });
  function messageHandler(message){
    // console.log(message);
    newReady = message.message.ready;
    readyHandler(newReady);
  };
  numberReady = 0;
  function readyHandler(newReady){
    $("#"+newReady).show();
    numberReady += 1;
    console.log(numberReady);
    if (numberReady == numGame){
      console.log("All Ready!");
      
    }
    else{};
  };


});


//question indexing variable
questNumber = 0;

//Big Go
$('#biggo').click(function(){
  console.log("hey")
  //Fills in question information and answers
  populate();


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
