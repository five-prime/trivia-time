$(document).ready(function(){
function timer(){
    var n = 31;
  setTimeout(countDown,1000);

  function countDown(){
     n--;
     if(n > 0){
        setTimeout(countDown,1000);
     }
     $('#timer').html(n);
  };
};
    var questions = [{
      "level" : "E-Z",
      "category" : "Sports",
      "question": "Which NBA coach coined the term \“three-peat\”?",
      "answerA" : "Pat Riley",
      "answerB" : "Phil Jackson",
      "answerC" : "Byron Scott",
      "answerD" : "Greg Popovich",
      "correct" : "answerA"
    },
    {
      "level" : "E-Z",
      "category" : "Sports",
      "question" : "How many NFL teams does California have?",
      "answerA" : "1",
      "answerB" : "3",
      "answerC" : "5",
      "answerD" : "4",
      "correct" : "answerD"
    },
    {
      "level" : "E-Z",
      "category" : "Sports",
      "question" : "Which team won the World Cup in 2014",
      "answerA" : "Brazil",
      "answerB" : "USA",
      "answerC" : "Germany",
      "answerD" : "U.K.",
      "correct" : "answerC"
    },
    {
    "level" : "Medium",
    "category" : "Sports",
    "question" : "Who is Baseball's all-time hits leader with 4,256?",
    "answerA" : "Babe Ruth",
    "answerB" : "Pete Rose",
    "answerC" : "Barry Bonds",
    "answerD" : "Hank Aaron",
    "correct" : "answerB",
    },
    {
    "level" : "Medium",
    "category" : "Sports",
    "question" : "Which city in Ohio has the NFL hall of fame and is the site of the annual preseason \"hall of fame game\"",
    "answerA" : "Scranton",
    "answerB" : "Canton",
    "answerC" : "Cooperstown",
    "answerD" : "Cleveland",
    "correct" : "answerB",
    },
    {
      "level" : "Medium",
      "category" : "Sports",
      "question" : "How many championships did Michael Jordan and Phil Jackson win together on the Bulls?",
      "answerA" : "4",
      "answerB" : "5",
      "answerC" : "6",
      "answerD" : "11",
      "correct" : "answerC"


    },
    {    "level" : "Hard",
        "category" : "Sports",
        "question" : "Which NCAA Basketball coach has the most championships with 12?",
        "answerA" : "Mike Krzyzewski (Coach K)",
        "answerB" : "Bobby Knight",
        "answerC" : "John Madden",
        "answerD" : "John Wooden",
        "correct" : "answerD",
},
{    "level" : "Hard",
    "category" : "Sports",
    "question" : "Who has won the PGA Player of the Year Award a record setting 11 times?",
    "answerA" : "Jack Nicklaus",
    "answerB" : "Rory Mcilroy",
    "answerC" : "Arnold Palmer",
    "answerD" : "Tiger Woods",
    "correct" : "answerD",
},
{    "level" : "Hard",
    "category" : "Sports",
    "question" : "The death of what Brazillian Formula One driver in 1994 sparked a major movie about his life:",
    "answerA" : "Mario Andretti",
    "answerB" : "Ayrton Sena",
    "answerC" : "Michael Schumaker",
    "answerD" : "Niki Lauda",
    "correct" : "answerB",

},
{    "level" : "Hard",
    "category" : "Sports",
    "question" : "At which college did Peyton Manning play football?",
    "answerA" : "Georgia",
    "answerB" : "Florida",
    "answerC" : "USC",
    "answerD" : "Tennessee",
    "correct" : "answerD",
},
{
    "level" : "E-Z",
    "category" : "World War II",
    "question" : "What is the name of the still visible sunken U.S. battleship that accounted for almost half the casualties at Pearl Harbor?",
    "answerA" : "U.S.S. Arizona",
    "answerB" : "U.S.S. Constitution",
    "answerC" : "U.S.S. Nevada",
    "answerD" : "U.S.S. Califonia",
    "correct" : "answerA",
  },
{
    "level" : "E-Z",
    "category" : "World War II",
    "question" : "What was the name given to the alliance between Adolph Hitler, Benito Mussolini, and Emperor Hirohito in World War II?",
    "answerA" : "Alliance of Evil",
    "answerB" : "Axis of Evil",
    "answerC" : "The Alliance",
    "answerD" : "Allied Forces",
    "correct" : "answerB",
  },
{
    "level" : "E-Z",
    "category" : "World War II",
    "question" : "\"D-Day\" or \"“Operation Overlord\" occurred on the beaches of Normandy in what country?",
    "answerA" : "France",
    "answerB" : "U.K.",
    "answerC" : "Netherlands",
    "answerD" : "Germany",
    "correct" : "answerA",
  },
{
    "level" : "Medium",
    "category" : "World War II",
    "question" : "Which of these World War II beligerants was estimated to have more tanks than the rest of the world combined?",
    "answerA" : "USA",
    "answerB" : "Russia",
    "answerC" : "Germany",
    "answerD" : "China",
    "correct" : "answerB",
  },
{
      "level" : "Medium",
    "category" : "World War II",
    "question" : "All of these were bloody LAND battles of the Pacific Theater except:",
    "answerA" : "Guadalcanal",
    "answerB" : "Midway",
    "answerC" : "Peleliu",
    "answerD" : "Iwo Jima",
    "correct" : "answerB",
  },
{
    "level" : "Medium",
    "category" : "World War II",
    "question" : "Germany's invasion or \"Anschluss\" of what country caused France and Britain to join the war?",
    "answerA" : "Poland",
    "answerB" : "Austria",
    "answerC" : "Hungary",
    "answerD" : "Czechoslovakia",
    "correct" : "answerA",
  },
{
      "level" : "Medium",
    "category" : "World War II",
    "question" : "This palacial hilltop estate was once thought to be Hitler's personal retreat:",
    "answerA" : "Dragon's Den",
    "answerB" : "Eidelweiss Retreat",
    "answerC" : "Lion's Gate",
    "answerD" : "Eagle's Nest",
    "correct" : "answerD",
  },
  {
      "level" : "Hard",
      "category" : "World War II",
      "question" : "What was the nickname for the German invasion of the U.S.S.R. in 1941",
      "answerA" : "Market Garden",
      "answerB" : "Barbarossa",
      "answerC" : "Uranus",
      "answerD" : "Zauberflöte",
      "correct" : "answerD",
    },
    {    "level" : "Hard",
        "category" : "World War II",
        "question" : "This major U.S. Battle in the area now known as Benelux had 89,500 total casualties, more than Guadalcanal and Normandy combined:",
        "answerA" : "Battle of Britain",
        "answerB" : "Battle of Okinawa",
        "answerC" : "Battle of the Bulge",
        "answerD" : "Battle of Stalingrad",
        "correct" : "answerC"
      },


{  "level" : "Hard",
  "category" : "World War II",
  "question" : " The U.S. Navy lost 4 aircraft carriers (CV Class) in 1942 (and total during the war), they were the: U.S.S. Yorktown, U.S.S. Lexington, U.S.S. Hornet and:",
  "answerA" : "U.S.S. Concord",
  "answerB" : "U.S.S. Stinger",
  "answerC" : "U.S.S. Essex",
  "answerD" : "U.S.S. Wasp",
  "correct" : "answerD",
},
{
"level" : "Hard",
"category" : "World War II",
"question" : "This major U.S. Battle in the area now known as Benelux had 89,500 total casualties, more than Guadalcanal and Normandy combined:",
"answerA" : "Battle of Britain",
"answerB" : "Battle of Okinawa",
"answerC" : "Battle of the Bulge",
"answerD" : "Battle of Stalingrad",
"correct" : "answerC"
},{
  "level" : "E-Z",
  "category" : "Music",
  "question" : "In 2011, which female artist sold 25 million copies of her hit album \"21\"",
  "answerA" : "Taylor Swift",
  "answerB" : "Adele",
  "answerC" : "Beyonce",
  "answerD" : "Brittney Spears",
  "correct" : "answerB"
},
{
  "level" : "E-Z",
  "category" : "Music",
  "question" : "In 1979 Charlie Daniels released his famous track about a fiddle playing contest with the devil called the Devil went down to ____",
  "answerA" : "Florida",
  "answerB" : "Georgia",
  "answerC" : "Mississippi",
  "answerD" : "Harlem",
  "correct" : "answerB",
},
{
  "level" : "E-Z",
  "category" : "Music",
  "question" : " What legendary US festival that hosted over 350,000 fans took place in 1969 in New York and has had tributary events every ten years since?",
  "answerA" : "Gunstock",
  "answerB" : "The Vans Warped Tour",
  "answerC" : "Ozzfest",
  "answerD" : "Woodstock",
  "correct" : "answerD"
},
{
  "level" : "Medium",
  "category" : "Music",
  "question" : "Who has made 3 albums that have sold 30 million or more, including an album that sold an estimated 46 million copies (the highest of all time)",
  "answerA" : "Paul McCartney",
  "answerB" : "Bob Dylan",
  "answerC" : "Michael Jackson",
  "answerD" : "Garth Brooks",
  "correct" : "answerC"
},
{
  "level" : "Medium",
  "category" : "Music",
  "question" : "Who played bass guitar for The Beatles?",
  "answerA" : "John",
  "answerB" : "Paul",
  "answerC" : "Ringo",
  "answerD" : "George",
  "correct" : "answerA"
},
 {
  "level" : "Medium",
  "category" : "Music",
  "question" : "Which long haired Musician would famously do anything for love (but he won’t do that)?",
  "answerA" : "Meat Loaf",
  "answerB" : "Bruce Springsteen",
  "answerC" : "Billy Joel",
  "answerD" : "John Lennon",
  "correct" : "answerA"
},
{
  "level" : "Medium",
  "category" : "Music",
  "question" : "What arcade game did the main character of the 1969 rock opera \"Tommy\" play exceedingly well desipite his physical limitations?",
  "answerA" : "Foosball",
  "answerB" : "Ping Pong",
  "answerC" : "Mario Brothers",
  "answerD" : "Pinball",
  "correct" : "answerD",
},
{
  "level" : "Hard",
  "category" : "Music",
  "question" : "How many total keys are on most modern pianos?",
  "answerA" : "88",
  "answerB" : "80",
  "answerC" : "98",
  "answerD" : "89",
  "correct" : "answerA",
},
{
  "level" : "Hard",
  "category" : "Music",
  "question" : "This European band has received 22 Grammy Awards out of 25 nominations, their last one in 2006 for the song \"City of Blinding Lights\"",
  "answerA" : "The Rolling Stones",
  "answerB" : "U2",
  "answerC" : "The Beatles",
  "answerD" : "Elton John",
  "correct" : "answerB",
},
{
  "level" : "Hard",
  "category" : "Music",
  "question" : "What famous Musician was killed in 1980 by a man named Mark David Chapman?",
  "answerA" : "Andy Kaufman",
  "answerB" : "Eazy-E",
  "answerC" : "Frank Zappa",
  "answerD" : "John Lennon",
  "correct" : "answerD",
},

{
  "level" : "E-Z",
  "category" : "U.S. History",
  "question" : "What was the last state to be admitted to the union in 1959?",
  "answerA" : "Alaska",
  "answerB" : "Hawaii",
  "answerC" : "Puerto Rico",
  "answerD" : "Guam",
  "correct" : "answerB",
},
{
  "level" : "E-Z",
  "category" : "U.S. History",
  "question" : "Who is the signature author on the Declaration of Independence?",
  "answerA" : "George Washington",
  "answerB" : "Benjamin Franklin",
  "answerC" : "Thomas Jefferson",
  "answerD" : "Alexander Hamilton",
  "correct" : "answerC",
},
{
 "level" : "E-Z",
 "category" : "U.S. History",
 "question" : "Which of these states is NOT a member of the 13 original colonies",
 "answerA" : "New Jersey",
 "answerB" : "Vermont",
 "answerC" : "New York",
 "answerD" : "Virginia",
 "correct" : "answerB",
},
{
  "level" : "Medium",
  "category" : "U.S. History",
  "question" : "During which war did British forces invade Washington D.C. and burn the White House?",
  "answerA" : "French-Indian War",
  "answerB" : "War of 1812",
  "answerC" : "Civil War",
  "answerD" : "Revolutionary War",
  "correct" : "answerB",
}




  ];

  //indexing counter
  questNumber = -1;



//Fills in question information and answers
function disp(){
  var questLevel = (questions[questNumber].level);
  var correctAns = (questions[questNumber].correct);
  questCat = (questions[questNumber].category);
  questText = (questions[questNumber].question);
  ansA = (questions[questNumber].answerA);
  ansB = (questions[questNumber].answerB);
  ansC = (questions[questNumber].answerC);
  ansD = (questions[questNumber].answerD);
$('#question').html(questText);
$('#level').html(questLevel);
$('#category').html(questCat);
$('#answerA').html(ansA);
$('#answerB').html(ansB);
$('#answerC').html(ansC);
$('#answerD').html(ansD);
};

$("#incr").click(function(){
  //increment the question counter
    questNumber += 1;
  //initiate the main function that displays question info
  disp();
  setTimeout(hide, 30000);

});
$("#decr").click(function(){
  //DEcrement the question counter
    questNumber -= 1;
  //initiate the main function that displays question info
  disp();

});
//determination of correct answer after user selects
$('.answer-btn').on('click', function(){
//Get id of clicked
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
function fuckit(){
  $('.notchosen').show();
  console.log('boop!');
  $('#question').html("");
  $('#level').html("");
  $('#category').html("");
  $('#answerA').html("");
  $('#answerB').html("");
  $('#answerC').html("");
  $('#answerD').html("");
  //increment the question counter
    questNumber += 1;
  //initiate the main function that displays question info
  disp();
  setTimeout(hide, 30000);

};
function hide(){
  $('.notchosen').hide();
  console.log('beep!');
  setTimeout(fuckit, 3000);



};
//doc ready func
});
