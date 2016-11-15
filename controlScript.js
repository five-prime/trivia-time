$(document).ready(function(){
  //hides everything else
  $('#else').hide();
  //displays alert to allow user to input game nameGame
  $('.alert').css({
      'display' : 'inherit',
      'position' : 'absolute',
      'left' : '50%',
      'top' : '50%',
      'margin-left' : -$('.alert').outerWidth()/2,
      'margin-top' : -$('.alert').outerHeight()/2
  });
  $('#clicky').click(function(){
    $('#else').show();
    $('.alert').hide();
    gameName = document.getElementById('userInput').value;
    $('#channel-name').html(gameName);

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

});l

//end of doc.ready.func
});
