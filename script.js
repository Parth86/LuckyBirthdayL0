var date = document.getElementById("date-of-birth")
var luckyNumber = document.getElementById("lucky-number")
var btn = document.getElementById("calculate-number")
var result = document.getElementById("result")

function sum(str) {
  var s = 0
  for(var i=0; i<str.length;i++){
    s += Number(str[i])
  }
  return s
}

btn.addEventListener('click', ()=> {
  var sumOfDigits = sum(date.value.replaceAll('-',''))
  if(sumOfDigits % Number(luckyNumber.value) === 0) {
    result.innerText = "You have a lucky Birthday!"
  }else {
    result.innerHTML = "Sorry! Your Birthday isn\'t lucky!"
  }
})