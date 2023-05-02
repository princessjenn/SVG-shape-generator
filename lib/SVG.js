
// created SVG class to generate the SVG markup for a given shape!
class SVG {
    constructor(shape) {
        this.shape = shape;
    }

    get markUp() {
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                ${this.shape.render()}
              </svg>`;
    }
}

//also exporting this class to other files
module.exports = SVG;