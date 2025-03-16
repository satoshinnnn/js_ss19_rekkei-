let input = prompt("Enter a number: ");
if (isNaN(Number(input)) || input.trim() === "") {
    alert("Invalid input, please enter a number");
}
else { 
  let  num = Number(input);
  if (num % 3 === 0 && num%5 === 0) {
    alert(`${num} is divisible by 3 & 5`);
}
  else {
        alert(`${num} is not divisible by 3 and 5`);
}
}