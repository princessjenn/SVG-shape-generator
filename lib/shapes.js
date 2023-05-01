

//Parent class
class Shape{
    constructor(fill = "green"){
        this.fill = fill;
    }



}

//Circle will inherit properties and methods of Shape parent class
class Circle extends Shape{

    constructor(fill, radius){

        super(fill)
        this.radius = radius
    
    }

    render(){

        return `<circle cx="150" cy="100" r="80" fill="${this.fill}" />`
    }

}

//Square will inherit properties and methods of Shape parent class
class Square extends Shape{

    constructor(fill){

        super(fill)
        //this.uniquePropertyOfRectangle = uniquePropertyOfRectangle
    
    }

    render(){

        return `<rect width="100%" height="100%" fill="${this.fill}" />`
    }

}


//Triangle will inherit properties and methods of Shape parent class
class Triangle extends Shape{

    constructor(fill){

        super(fill)
        //this.uniquePropertyOfTriangle = uniquePropertyOfTriangle

    
    }

    render(){

        return `<polygon points="50 15, 100 100, 0 100" fill=${this.fill}/>`
    }

}
