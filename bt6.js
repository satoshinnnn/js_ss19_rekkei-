alert ("This program will solve the quadratic equation ax^2 + bx + c = 0");
let num1 = prompt("Enter a number: ");
let num2 = prompt("Enter a number: ");
let num3 = prompt("Enter a number: ");

if ( isNaN(Number(num1)) || isNaN(Number(num2)) || isNaN(Number(num3)) ) {
    alert("Invalid input, please enter a number");
}
else{
    let a = Number(num1);
    let b = Number(num2);
    let c = Number(num3);
    let delta = b*b - 4*a*c;
    if (a === 0) {
        alert("This is not a quadratic equation");
    }
    else if (delta < 0) {
        alert("No solution");
    }
    else if (delta == 0) {
        alert(`x = ${(-b/(2*a)).toFixed(2)}`);
    }
    else {
        alert(`x1 = ${((-b + Math.sqrt(delta))/(2*a)).toFixed(2)} and x2 = ${((-b - Math.sqrt(delta))/(2*a)).toFixed(2)}`);
    }
}
