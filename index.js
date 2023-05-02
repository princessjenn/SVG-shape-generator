
const inquirer = require('inquirer');
const SVG = require("./lib/SVG.js");
const fs = require('fs');
const { Circle, Triangle, Square } = require('./shapes');


//This function returns a Promise that will resolve with the user's input answers to the Inquirer prompts.
async function promptUser() { 
    const answers = await inquirer.prompt([ 
//The value of the user's answers to the prompts returned by the inquirer.prompt() method
//The await keyword ensures that the const answers line doesn't execute until the user has provided their answers to the prompts,
//and the promise returned by 'inquirer.prompt()' has been resolved

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
    },
    ]);


  let shape; //This sets the 'shape' variable and assigns the value as undefined.

  switch (answers.shape) {
    case 'Circle':
      shape = new Circle();
      break;
    case 'Triangle':
      shape = new Triangle();
      break;
    case 'Square':
      shape = new Square();
      break;
  }
// This switch statement takes the value of the 'shape' property from the 'answers' OBJECT (from the user's input using Inquirer),
// and then assigns a new instance of the appropriate shape class (Circle, Triangle, or Square) to the 'shape' variable based on the value of 'answers.shape'.
//if the user selected 'Circle', this switch statement will create a NEW INSTANCE of the 'Circle' class and assign it to the 'shape' variable.

  shape.setColor(answers.shapeColor);
  //sets the color of the shape based on the input for 'shapeColor'

  return {
    text: answers.text,
    textColor: answers.textColor,
    shape: shape,
  };
  //returns an object with 'text', 'textColor', and 'shape'. The 'text' and 'textColor' properties are taken from the input,
  // and the 'shape' property is the 'shape' variable that was set in the switch statement.
  //
  //This will return an object with the user's input values for text, textColor, and shape when the promptUser() function is called, which can then be used to generate the SVG file.
}

  (async () => {
    const userInput = await promptUser();
    console.log(userInput);

    const svg = new SVG(300, 200);
    svg.drawShape(userInput.shape, userInput.shapeColor);
    svg.drawText(userInput.text, userInput.textColor);
    const markUp = svg.getMarkUp();
 

//SVG file
fs.writeFile("logo.svg", markUp, (err) => {
    if (err) throw err;
    console.log('Generated logo.svg');
});

}) ();