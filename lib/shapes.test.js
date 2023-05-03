const { Circle, Triangle, Square } = require("./shapes");


// Circle Test

test('circle renders as red', () => {
    const shape = new Circle();
    var color = ('red')
    shape.setColor(color);
    expect(shape.render()).toEqual(`<circle cx="25" cy="75" r="20" fill="${this.color}" />`);
});
// Triangle Test
test('triangle renders as green', () => {
    const shape = new Triangle();
    var color = ('green')
    shape.setColor(color);
    expect(shape.render()).toEqual(`<polygon points= "80, -10 244, 180 10, 180" fill="${this.color}" />`);
});
// Square Test
test('square renders as blue', () => {
    const shape = new Square();
    var color = ('blue')
    shape.setColor(color);
    expect(shape.render()).toEqual(`<rect width= "100%" height="100%" fill="${this.color}" />`);
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
