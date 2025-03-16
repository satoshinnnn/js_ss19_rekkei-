let input = +prompt("Enter a month: ");
if (input < 1 || input > 12) {
    alert("Invalid month");
 }
else{     
    if (input == 1 || input == 3 ||  input == 5 ||input == 7 ||  input == 8 ||  input == 10 ||  input == 12) {
    alert(`${input} has 31 days`);
}
else if (input == 4 || input == 6 || input == 9 || input == 11) {
    alert(`${input} has 30 days`);
}
else{
    alert(`${input} has 28 or 29 days`);
} 
}