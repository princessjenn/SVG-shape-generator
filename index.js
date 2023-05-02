
const inquirer = require('inquirer');
const SVG = require("./lib/svg");
const fs = require('fs');
const { Circle, Triangle, Square } = require('./shapes');


const questions = [

    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['Circle', 'Triangle', 'Square'],
    },

    {
      type: 'input',
      name: 'shapeColor',
      message: 'Type in a color, or hexadecimal number for color, that you want the shape to be:',
      validate: (input) => {
        // any custom validation rules for shape color input
        return true;
        }
    },

    {
      type: 'input',
      name: 'text',
      message: 'Enter UP TO three characters to display inside of the shape:',
      validate: (input) => {
        if (input.length > 3) {
          return 'Your input must be 3 characters or less!';
        }
        // this arrow function says that the value of an input with 3 characters or less will return true,
        // if the input is MORE that 3 characters, it will return false and then they will get the return message.
        return true;
        },
    },

    {
      type: 'input',
      name: 'textColor',
      message: 'Type in a color, or hexadecimal number for color, that you want the text inside to be:',
      validate: (input) => {
        // Add any custom validation rules for text color input
        return true;
      },
    }];



//SVG file
fs.writeFile("logo.svg", example.markUp,(err) => {
    if (err) throw err;
    console.log('Generated logo.svg');
});