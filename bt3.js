let input = +prompt("Enter amount of money: ");
let unit = prompt("Enter unit (VND/ USD): ").trim().toUpperCase();
if (isNaN(input) || input <= 0) {
    alert("Invalid amount! Please enter a valid number.");
} 
else if (unit === "VND") {
    alert(`You have ${(input/23000).toFixed(2)} USD`);
}
else if (unit === "USD") {
    alert(`You have ${(input*23000).toFixed(2)} VND`)
}
else {
    alert("Invalid unit");
}