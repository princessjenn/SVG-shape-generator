

//Parent class 
class Shape {

    constructor(){ 
     //constructor enables custom initialization that must be done before any other methods can be called on an instantiated object.
     
        this.color = 'pink'; //default color is pink
    
        //markup is the two-dimensional language for the specific SVG
        }

    setColor(color) {
    this.color = color;
    this.updateMarkup();
    }

    updateMarkup() {};
    // this method is called whenever a shape's color is updated
    // and should update the markUp property to reflect the new color value
    

}


//Circle will inherit properties and methods of Shape parent class
class Circle extends Shape {

    constructor(color = 'pink', radius = 50){ 

        super(color);  // pass color to parent constructor
        this.radius = radius;
        this.updateMarkup();
        }

        updateMarkup() {

            this.markUp = `<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />`;
    
        }
    

    render(){

        return this.markUp;
    }

}


//Triangle will inherit properties and methods of Shape parent class
class Triangle extends Shape {

    constructor(color = 'pink') {

        super(color);  // pass color to parent constructor
        this.updateMarkup();
        }
        
        updateMarkup() {

            this.markUp = `<polygon points= "80, -10 244, 180 10, 180" fill="${this.color}" />`
        }
    
    render(){

        return this.markUp;
        
    }

}


//Square will inherit properties and methods of Shape parent class
class Square extends Shape {

    constructor(color = 'pink') {

        super(color);  // pass color to parent constructor
        this.updateMarkup();
        }

        updateMarkup() {
            this.markUp = `<rect width= "100%" height="100%" fill="${this.color}" />`;
    
        }

    render(){

        return this.markUp;
    }

}



// exporting these classes so that they can be imported and used in the other files
module.exports = {
    Shape,
    Circle,
    Square,
    Triangle,
  };
