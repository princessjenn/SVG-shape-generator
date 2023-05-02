

//Parent class
class Shape {
    constructor(color = ""){ //constructor enables custom initialization that must be done before any other methods can be called on an instantiated object.
        this.color = color;
        this.markUp = ""; //markup is the two-dimensional language for the specific SVG
    }


setColor(color) {
    this.color = color

    }

}

//Circle will inherit properties and methods of Shape parent class
class Circle extends Shape {

    constructor(color, radius){ 

        super(color)
        this.radius = radius
    
    }

    render(){

        return `<circle cx= "150" cy="100" r="80" fill="${this.color}" />`
    }

}

//Square will inherit properties and methods of Shape parent class
class Square extends Shape{

    constructor(color){

        super(color)
        //this.uniquePropertyOfRectangle = uniquePropertyOfRectangle
    
    }

    render(){

        return `<rect width= "100%" height="100%" fill="${this.color}" />`
    }

}


//Triangle will inherit properties and methods of Shape parent class
class Triangle extends Shape{

    constructor(color = "green") {

        super(color)
        this.markUp = `<polygon points= "80, -10 244, 180 10, 180" fill=${this.color} />`
        //this.uniquePropertyOfTriangle = uniquePropertyOfTriangle

    
    }

    render(){

        return `<polygon points= "80, -10 244, 180 10, 180" color=${this.color} />`
    }

}
