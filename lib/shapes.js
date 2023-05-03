//Parent class 
class Shape {

    constructor(){ 
     //constructor enables custom initialization that must be done before any other methods can be called on an instantiated object.
        this.color = '';
    }

    setColor(color) {
        this.color = color;
    }
    

}


//Circle will inherit properties and methods of Shape parent class
class Circle extends Shape {
    constructor(){ 
    super()  // pass color from parent constructor
    }
        render(){
           return `<circle cx="25" cy="75" r="20" fill="${this.color}" />`;
    
    }
}


//Triangle will inherit properties and methods of Shape parent class
class Triangle extends Shape {
    constructor() {
    super()  // pass color from parent constructor
    }
         render(){
            return `<polygon points= "80, -10 244, 180 10, 180" fill="${this.color}" />`
    }
}


//Square will inherit properties and methods of Shape parent class
class Square extends Shape {
    constructor() {
    super()  // pass color from parent constructor
    }
        render(){   
            return `<rect width= "100%" height="100%" fill="${this.color}" />`;
    }

}

class SVG {
    constructor() {
        this.shape = shape;
        this.textElement = '';
    }

    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">${this.shape.render()}</svg>`;
    }
        setTextElement(text,color){
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape){
        this.shapeElement = shape.render()

    }
};





// exporting these classes so that they can be imported and used in the other files
module.exports = {
    Shape,
    Circle,
    Square,
    Triangle,
    SVG,
  };
