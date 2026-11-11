// today's temprature in kelvin 293
let kelvin = 0;

// celsius is 273 less than the kelvin
let celsius = kelvin - 273;

// convert to fahrenheit
let fahrenheit = celsius * (9/5) + 32;

// flooring fahrenheit to get rid of decimal
fahrenheit = Math.floor(fahrenheit);

// Output
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

// converting celsius to Newton scale
let newton = Math.floor(celsius * (33/100));
console.log(`In newton scale, temprature is ${newton} Newton.`);