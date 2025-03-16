let month = +prompt("Enter a month (1-12)")
if (month >= 13) {
     alert("Month should be less than 12")
}
else if (month <= 3) {
        alert(`Tháng ${month} is spring`)
}
else if (month <= 6 && month > 3) {
   alert(`Tháng ${month} is summer`)
}
else if (month <= 9 && month >= 7) {
    alert(`${month} is autumn`)
} 
    
else {
    alert(`Tháng ${month} is winter`)
}
