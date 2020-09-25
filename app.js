// Author : Clay Bowser
// Date Last Modified : 2020/09/2
// Title : Assignment #2 part C : Auto Insurance
// Goal : Write a program that computes monthly insurance according to the schedule

//ENABLE MODULE
var readlineSync = require('readline-sync');

//GLOBAL VARIABLES
var sex;
var age;
var vehiclePrice;
var monthlyCost;

//Prompt User for input
sex = readlineSync.question('Are you \'Male\' or \'Female\': ');
sex= sex.toLowerCase();
    //Validate User Input
    while (sex != 'male' && sex != 'female'){
        sex = readlineSync.question('Enter a valid gender: ');
    }
age = readlineSync.question('\nEnter your age: ');
    while (isNaN(age) || age < 15 ){
        age = readlineSync.question('Enter a valid age: ');
    }
vehiclePrice = readlineSync.question('\nEnter the purchase price of the vehicle: ');
    while (isNaN(vehiclePrice) || vehiclePrice < 0 ){
        vehiclePrice = readlineSync.question('Enter a valid vehicle price: ');
    }

//Convert string into number
age = parseInt(age);
vehiclePrice = parseFloat(vehiclePrice);

//Calculate monthly insurance based on User data
switch (sex) {
    case "male":
        if (age >= 15 && age < 25){
            monthlyCost = ((vehiclePrice*.25)/12);
        } else if (age >= 25 && age < 40){
            monthlyCost = ((vehiclePrice*.17)/12);
        } else if (age >= 40 && age <= 70){
            monthlyCost = ((vehiclePrice*.10)/12);
        }
        break;
    case "female":
        if (age >= 15 && age < 25){
            monthlyCost = ((vehiclePrice*.20)/12);
        } else if (age >= 25 && age < 40){
            monthlyCost = ((vehiclePrice*.15)/12);
        } else if (age >= 40 && age <= 70){
            monthlyCost = ((vehiclePrice*.10)/12);
        }
        break;
}

//Display information to User
console.log("\nYour monthly insurance will be $" + monthlyCost.toFixed(2));