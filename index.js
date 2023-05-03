
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');
const inquirer = require('inquirer');

class SVG {
  constructor() {
    this.textElement = '';
    this.shapeElement = '';
  }
  setTextElement(text, color) {
    this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
  }
  setShapeElement(shape) {
    this.shapeElement = shape.render()

  }
  render() {

    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
  }
}


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
  },

  {
    type: 'input',
    name: 'text',
    message: 'Enter UP TO three characters to display inside of the shape:',
    validate: (input) => {
      if (input.length > 3) {
        return 'Your input must be 3 characters or less!'
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
];

// Function to write data to file
function writeToFile(fileName, data) {
  console.log("Writing [" + data + "] to file [" + fileName + "]")
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Congratulations, you have Generated a logo.svg!");
  });
}


async function init() {
  console.log("Initializing");
  var svgString = "";
  var svgFile = "logo.svg";

  // Prompt the user for answers
  const answers = await inquirer.prompt(questions);

  //user text
  var userText = "";
  if (answers.text.length > 0 && answers.text.length < 4) {
    // 1-3 chars, valid entry
    userText = answers.text;
  } else {
    // 0 or 4+ chars, invalid entry
    console.log("Invalid user text field detected! Please enter 1-3 Characters, no more and no less");
    return;
  }
  console.log("User text: [" + userText + "]");
  //user font color
  userShapeType = answers.shape;
  console.log("User entered shape = [" + userShapeType + "]");
  userFontColor = answers.textColor
  console.log("User font color: [" + userFontColor + "]");
  //user shape color
  userShapeColor= answers.shapeColor;
  console.log("User shape color: [" + userShapeColor+ "]");
  //user shape type


  //user shape
  let userShape;
  if (userShapeType === "Square" || userShapeType === "square") {
    userShape = new Square();
    console.log("User selected Square shape");
  }
  else if (userShapeType === "Circle" || userShapeType === "circle") {
    userShape = new Circle();
    console.log("User selected Circle shape");
  }
  else if (userShapeType === "Triangle" || userShapeType === "triangle") {
    userShape = new Triangle();
    console.log("User selected Triangle shape");
  }
  else {
    console.log("Invalid shape!");
  }
  userShape.setColor(userShapeColor);

  // Create a new Svg instance and add the shape and text elements to it
  var svg = new SVG();
  svg.setTextElement(userText, userFontColor);
  svg.setShapeElement(userShape);
  svgString = svg.render();

  //Print shape to log
  console.log("Displaying shape:\n\n" + svgString);
  //document.getElementById("svg_image").innerHTML = svgString;

  console.log("Shape generation complete!");
  console.log("Writing shape to file...");
  writeToFile(svgFile, svgString);
}
init();