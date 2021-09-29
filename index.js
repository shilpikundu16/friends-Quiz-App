// to read input from your user
var readlineSync = require("readline-sync");
// to beautify the app
const chalk = require('chalk');
// user playing the quiz
var user = readlineSync.question(chalk.whiteBright("Hey, what's your name? "));
console.log("--------------------------------------------");
console.log(chalk.blue.bold('Welcome to the FRIENDS quiz!!! '+ user.toUpperCase()));
console.log(chalk.yellow.bold('Lets see how well do you know FRIENDS...' + '\n' + 'There will be a total of 5 questions, with no negative marking for any wrong answer.'));
console.log("--------------------------------------------");

var totalScore = 0;
function check(question, answer, option, score){
  var userAnswerindex = readlineSync.keyInSelect(option, question, {cancel: 'skip'});
  if(option[userAnswerindex] === answer){
    totalScore+= score;
    console.log(chalk.green.bold('Right answer... you get '+ score+ ' points.'));
  } 
  else if(option[userAnswerindex] === undefined){
    console.log(chalk.cyanBright.bold('you skipped this question...The correct answer is '+ answer));
  } 
  else{
    console.log(chalk.red.bold('Wrong answer...The correct answer is '+ answer));
  }
  console.log('---------------------');
}
// array of questions
questionBank=[
  {
    question:'How many times was Ross legally divorced ?',
    answer:'thrice',
    score: 1,
    option: ['twice','thrice','five times','six times']
  },
  {
    question:'Where did Carol first meet Susan ?',
    answer:'at the gym',
    score: 2,
    option: ['in college','at work','at the gym','at Central Park']
  },
  {
    question:'Before they were friends, who did Phoebe mug as a kid ?',
    answer:'ross',
    score: 3,
    option:['chandler','joey','monica','ross']
  },
  {
    question:'Which one of the guys did Ursula go out with ?',
    answer:'joey',
    score: 4,
    option: ['chandler','joey','ross']
  },
  {
    question:'What did Ross name his white-headed pet capuchin monkey ?',
    answer:'marcel',
    score: 5,
    option: ['marciela','marcel','macarena']
  }
  ];

  for(var x = 0; x < questionBank.length; x++){
    var currentQuestion = questionBank[x];
    check(chalk.magenta(currentQuestion.question), currentQuestion.answer, currentQuestion.option, currentQuestion.score);
  }
  console.log('------------------------------');
  console.log(chalk.cyan.bold('Your total Score is ' , totalScore));

  if(totalScore > 10){
    console.log(chalk.yellowBright('You have qualified for the next level coming soon....'));
  }

// array of high scorers
  var highScores = [
    {
      name: "Aashna",
      score: 8,
   },
   {
      name: "Shivam",
      score: 12,
   },
   {
      name: "Arohi",
      score: 10,
   }
];

// user along with scores
latestUser = {
  name: user,
  score: totalScore
}

var f = 0;
//scrolling through the leader board
for (var i = 0; i < highScores.length; i++) {
   if (totalScore > highScores[i].score) {
      f = 1;
      break;
   }
}
console.log(chalk.magenta("------------------------"));
if (f === 1){
  console.log(chalk.green("Congratulations! you made it to the leader board!"));
  highScores.push(latestUser);
}
else {
  console.log(chalk.red("Sorry! you did not make it to the leader board."));
}

//sorting the leader board as per scores
highScores.sort((a, b) => {
    return b.score - a.score;
});

console.log(chalk.yellow("------------------------\nCheck out the Leader Board:-"));
//printing the leader board
for (var i = 0; i < highScores.length; i++) {
   console.log(chalk.blue("-----------------------"));
   console.log(chalk.red(highScores[i].name + "   " + highScores[i].score));
}