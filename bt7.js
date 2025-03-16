let a = prompt("Enter a number: ");
let b = prompt("Enter a number: ");
let c = prompt("Enter a number: ");
if ( isNaN(Number(a)) || isNaN(Number(b)) || isNaN(Number(c)) || a.trim()==="" || b.trim()==="" || c.trim()==="") {
    alert("Invalid input, please enter number");
}
else {
    let num1 = Number(a);
    let num2 = Number(b);
    let num3 = Number(c);
    let max = Math.max(num1, num2, num3);
    alert(`The largest number is ${max}`);
    
}