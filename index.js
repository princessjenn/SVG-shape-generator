
const fs = require("fs")
let SVG = require("./lib/svg")


let example = new SVG("DAN", "green", "square", "yellow")



fs.writeFile("shape.svg", example.markUp, function(err){
    if(err)
    console.log(err)
})