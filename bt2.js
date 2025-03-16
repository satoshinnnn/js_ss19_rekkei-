let input = prompt("Enter something: ");
if (input  === null ) {
    alert("Invalid input");
}
else{
    if (input.trim() === "") {
        alert("Your input is empty");
    }
    else if (isNaN(Number(input))) {
        alert("Your input is a string");
    }
    else{
        alert("Your input is a number");
    }
}