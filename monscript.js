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
  }
});



});
