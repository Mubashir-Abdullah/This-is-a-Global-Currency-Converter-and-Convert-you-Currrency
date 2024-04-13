#! /usr/bin/env node

import inquirer from "inquirer";
//Define the list of Currencies and their exchange rates
let exchangeRate: any = {
    "USD": 1,
    "EUR": 0.9,
    "JPY": 113, // Corrected from "JYP"
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 277.30,
};

//Add more currencies and their exchange rates here

let user_answer = await inquirer.prompt([
    {
        name: "from_Currency",
        type: "list",
        message: "Select the Currency to Convert from",
        choices: ["USD", "EUR", "JPY", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_Currency",
        type: "list",
        message: "Select the Currency to convert into:",
        choices: ["USD", "EUR", "JPY", "CAD", "AUD", "PKR"] // Corrected from "Choice"
    },
    {
        name: "amount",
        type: "number",
        message: "Enter the amount to convert:"
    }
]);

// Perform currency conversion by using formula
let from_amount = exchangeRate[user_answer.from_Currency];
let to_amount = exchangeRate[user_answer.to_Currency];
let amount = user_answer.amount;

// Formula of Conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;

// Display the Converted amount
console.log(`converted Amount = ${converted_amount}`)