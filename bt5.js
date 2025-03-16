let input = prompt("Enter a number: ");
if (input.trim() === "") {
    alert("Your input is empty");
}
else if (input.includes(" ")){
    alert("Your input has space");
}
else {
    alert("Your input dont have space");
}