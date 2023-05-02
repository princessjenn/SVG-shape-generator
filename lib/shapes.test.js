const {Triangle, } = require("./shapes");


test('should set to blue fill if we set color to blue' , () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points=150, 18 244, 182 56, 182" fill="blue" />')
});

test('if we do not pass a value for setColor, use green as default' , () => {
    const shape = new Triangle();
    expect(shape.render()).toEqual('<polygon points=150, 18 244, 182 56, 182" fill="green" />')
});