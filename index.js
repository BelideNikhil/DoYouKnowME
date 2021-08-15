let readlineSync=require('readline-sync');
const chalk = require('chalk');
const log = console.log;

let score=0;

// -------------intro part-------------------
console.log(chalk.cyan.bold("Hello all.This is Nikhil Belide.\nHope you all are doing safe during this pandemic.\nThis quiz is about how well do you know me.\n"))

let user_name=readlineSync.question("What should I call you?-")
if(user_name.length<1){
  console.log(chalk.bgBlue("\n Hey  Un-Named Human, Let's get started \n"))
}else{
  console.log(chalk.bgBlue("\n Hey " +user_name.toUpperCase()+", Let's get started \n"))
}

console.log(chalk.green("There are 7 questions.\nHere are the rules:\n1. Every correct answer adds one point to the score \n2. There is no penalty for wrong answers, This is not a National EXAM.\n"));


let arr=[{q:"1. What's my Surname? \n Hint : it is on this page--",a:"BELIDE"},
{q:"2. What is my Favourite Bike? \n Hint : made by Royal Enfield--",a:"HIMALAYAN"},
{q:"3. What's my Favourite Movie? \n Hint: by Christopher Nolan--",a:"INTERSTELLAR"},
{q:"4. Where am I working right now?\n Hint : its one of the FAANG--",a:"AMAZON"},
{q:"5. Where do I live?\n Hint : The best BIRYANI is available here--",a:"HYDERABAD"},
{q:"6. What is my Favourite smartphone brand? \n Hint : Made by GOOGLE--",a:"PIXEL"},
{q:"7.Who is one of my Favourite music artist? \n Hint : One of her song is MONSTER--",a:"MEG MYERS"}]

// ----------looping ----------------
for(let i=0;i<arr.length;){
  user_answer=readlineSync.question(chalk.yellow(arr[i].q))
  if(user_answer.length>0){
    if(user_answer.toUpperCase()===arr[i].a){
    console.log(chalk.green("Correct Answer\n"))
    score++
    }
    else{
      console.log(chalk.red("Wrong Answer "))
      console.log(chalk.blue("The correct answer is " + arr[i].a) + "\n")
    }
    i++;
    console.log("Current score is " + score + "\n")
  }else{
    console.log(chalk.red("Please enter an answer."))
  }
}
// ---------------other stuff---------

console.log("----------\nTotal Questions: " + arr.length+"\n")
console.log("Final Score is: "+score +"\n")
if(score<=(arr.length/2)){
  console.log("looks like you dont know a lot of stuff, Please visit the below link to know more about me and come back and take the quiz \n")
  const link=console.log(chalk.bgMagenta.bold.cyan('https://www.linkedin.com/in/nikhilbelide/'))
}
else{
  console.log("----------\nLooks like you are my Fan!\n----------")
  console.log(chalk.bgBlue("I'll be replacing the Database with your name."))
  console.log(chalk.yellow("MAY THE FORCE BE WITH YOU"))
}
console.log("===========\nHighest scores are: \n1.MyMom: 5 \n2.MyDad: 4 \n===========")
