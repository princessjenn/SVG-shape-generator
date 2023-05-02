const { Circle, Triangle, Square } = require("./shapes");


//Circle Tests
test('constructor should set with correct properties (color, radius, svg markup) based on arguments', () => {
    const circle = new Circle('blue', 50);
    expect(circle.color).toEqual('blue');
    expect(circle.radius).toEqual(50);
    expect(circle.markUp).toEqual('<circle cx="150" cy="100" r="50" fill="blue" />');
});




test('constructor sets default values correctly', () => {
    const triangle = new Triangle();
    expect(triangle.color).toEqual('red');
    expect(triangle.markUp).toEqual('<polygon points= "80, -10 244, 180 10, 180" fill="red" />');
});

test('render() should return triangle markup', () => {
    const triangle = new Triangle('green');
    expect(triangle.render()).toEqual('<polygon points= "80, -10 244, 180 10, 180" fill="green" />');
});

test('setColor updates the triangle color correctly', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    expect(triangle.color).toEqual('blue');
    expect(triangle.markUp).toEqual('<polygon points= "80, -10 244, 180 10, 180" fill="blue" />');
});


//Square Tests
test('constructor sets default values correctly', () => {
    const square = new Square();
    expect(square.color).toEqual('yellow');
    expect(square.markUp).toEqual(`<rect width= "100%" height="100%" fill="yellow" />`);
});

test('render() should return square markup', () => {
    const square = new Square('green');
    expect(square.render()).toEqual(`<rect width= "100%" height="100%" fill="green" />`);
});

test('setColor updates the square color correctly', () => {
    const square = new Square();
    square.setColor('blue');
    expect(square.color).toEqual('blue');
    expect(square.markUp).toEqual(`<rect width= "100%" height="100%" fill="blue" />`);
});



  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //test('should set to blue fill if we set color to blue', () => {
    //const shape = new Triangle();
    //shape.setColor("blue");
    ////expect(shape.render()).toEqual(`<polygon points= "80, -10 244, 180 10, 180" fill="blue" />`)
//});

//test('if we do not pass a value for setColor, use pink as default', () => {
    //const shape = new Triangle();
    //expect(shape.render()).toEqual("<polygon points= \"80, -10 244, 180 10, 180\" fill=\"\" />")
//});
