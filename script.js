// -- Just to test functionality
// HEX to RGB
var hex = prompt("TEST: Please enter HEX values");
alert(formatRGB(HEXtoRGB(hex)));

// RGB to HEX
var r = parseInt(prompt("TEST: Please enter R value"));
var g = parseInt(prompt("TEST: Please enter G value"));
var b = parseInt(prompt("TEST: Please enter B value"));
alert(formatHEX(RGBtoHEX(r,g,b)));

// -- RGB to HEX
// Returns HEX color object
function RGBtoHEX(r, g, b) {
  return {
    red: singleColorToHex(r),
    green: singleColorToHex(g),
    blue: singleColorToHex(b)
  }
}

// Helper function to individually convert each color to hex 
function singleColorToHex(color) {
  var hex = color.toString(16); // converts number to a string that represents the same number base 16 which is a hex value
  return hex.length == 1 ? "0" + hex : hex; // if converts to a single digit, add 0 at the beginning
}

// -- HEX to RGB
// Returns RGB color object
function HEXtoRGB(hexColor){
  return {
    red: (hexColor >> 16) & 0xFF,
    green: (hexColor >> 8) & 0xFF,  
    blue: hexColor & 0xFF,
  }
}

// FORMATTING 
function formatRGB(RGB) {  // I need them in this format to pass to URL
  return RGB.red + "/" + RGB.green + "/" + RGB.blue;
} 

function formatHEX(HEX) {
  return "#" + HEX.red + HEX.green + HEX.blue;
}
