$(document).ready(function(){
  //displays alert to allow user to input game nameGame
  $('.alert').css({
      'display' : 'inherit',
      'position' : 'absolute',
      'left' : '50%',
      'top' : '50%',
      'margin-left' : -$('.alert').outerWidth()/2,
      'margin-top' : -$('.alert').outerHeight()/2
  });
  var starWarsNames = ["Luke", "Leia", "Darth", "Ewok", "Jedi", "Han", "R2D2", "Chewie", "Lando", "C3PO", "Falcon", "Bobba", "Fett", "Poe", "Rey", "Kenobi", "Finn", "Jabba" ,"Kylo"];

  var gameName = starWarsNames[Math.floor(Math.random()*starWarsNames.length)];

    var pubnub = new PubNub({
        subscribeKey: 'sub-c-9e87421e-aa32-11e6-b237-02ee2ddab7fe', // always required
        publishKey: 'pub-c-ce79cb55-6339-42b4-aa4f-30d402389201' // only required if publishing
    });
  //big-go is the primary button that initiates a game session
  $('#big-go').click(function(){
  $('.game-name').html(gameName);
  $('#monitor-go').show();




  console.log(gameName);
  pubnub.publish(
      {
          message: {
              gameStart: gameName + "started!"
          },
          channel: gameName
      },
      function (status, response) {
          if (status.error) {
              console.log(status)
          } else {
              console.log("message Published w/ timetoken", response.timetoken)
          }
      }
  );
});




//declare player_icon and set it arbitrarily to zero
player_icon = 0;
//this allows the user to close the "player choice" popup without selecting yes or no
  $('#close-button').click(function(){

    $('.alert').css({'display' : 'none'});
    //reset player-choice on close TODO: Check if neccessary, I don't think it is
    $('.player-choice').html("");


  });
    //this is fired when the user clicks on a portrait for their user icon
  $('.select').on('click', function () {
    //player icon is the div id i.e. "penguin" or "sloth"
     player_select = this.id;
     //inserts img tag with player's selected icon
     player_icon = "<img src=\"img/" + player_select + ".png\">";
     //displays the player icon in the popup that asks if they are sure
     $('.player-choice').html(player_icon);
     //styles the alert div and centers it dynamically, thanks jQuery!
    $('.selectAlert').css({
        'display' : 'inherit',
        'position' : 'absolute',
        'left' : '50%',
        'top' : '50%',
        'margin-left' : -$('.selectAlert').outerWidth()/2,
        'margin-top' : -$('.selectAlert').outerHeight()/2
    });

});
//After user is sure of their selection
$('#yes-button').click(function(){
  //hide alert
  $('.alert').css({'display' : 'none'});
//hide all selection choices
$('.select').hide();
//hide banner and display the R U READY box
$('#select-banner').hide();
$('#ready-box').show();


});


//toggle ready and not-ready display
$('#ready-button').click(function(){

$('#not-ready-display').hide();
$('#ready-display').show();
$('#ready-button').hide();
$('#not-ready-button').show()

});




$('#not-ready-button').click(function(){

  $('#not-ready-display').show();
  $('#ready-display').hide();
  $('#ready-button').show();
  $('#not-ready-button').hide();
});






});
