#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold);

//define the list of currencies and their exchange rates
let exchange_rate:any = {
    "USD":1,
     "EUR":0.9,
     "jyp":113,
     "CAD":1.3,
     "aud":1.65,
     "PKR":289,
     //Add more  currencies and their exchange rates here
} 
let user_answer = await inquirer.prompt([
    {
        name:"from currency",
        type:"list",
        message:"select the currency to convert from:",
        choices:["USD","EUR","JYP","AUD","PKR"],
    },
    {
        name:"to currency",
        type:"list",
        message:"select the currency to convert to:",
        choices:["USD","EUR","JYP","AUD","PKR"],
    },
    {
        name:"amount",
        type:"input",
        message:"Enter the amount to convert",
    }
]);
// perform currency conversion by using formula
let from_amount = exchange_rate[user_answer.from_crrency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount

//formula of conversion
let base_amount = amount / from_amount
let converted_amount = base_amount* to_amount

//display theconverted amount
console.log("converted amount = ${converted_amount}");