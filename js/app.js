// VARIABLES:

// Ask the user name and save it to a variable
var userName = prompt("What's your name?");
// Set the carBrands variable as an empty array
var carBrands = [];

// Ask a car brand to the user until we have 3
for (var i = 0; i < 3; i++) {
  carBrands.push(prompt("Write 3 car brands you've got:"));
}

// Then show the information to the user on the screen
document.write(`
  <div>
    <h1>${userName} cars:</h1>
    <ul>
      <li>${carBrands[0]}</li>
      <li>${carBrands[1]}</li>
      <li>${carBrands[2]}</li>
    </ul>
  </div>
`);

// Show the same information on the console
console.log(`${userName} cars: ${carBrands}`);
