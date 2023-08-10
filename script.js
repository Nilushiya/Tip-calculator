const input = document.getElementById("input");
let numberOfPeople = document.querySelector(".npeople");
let tipAmount = document.querySelector(".tipAmount");
let totalAmount = document.querySelector(".totalAmount");
let box1 = document.querySelector(".box1")
let box2 = document.querySelector(".box2")
let box3 = document.querySelector(".box3")
let box4 = document.querySelector(".box4")
let box5 = document.querySelector(".box5")
let defaultBox = document.querySelector(".defaultBox");

box1.addEventListener("click",() => {
        tipAmount.innerHTML = " $ "+ ((Number(input.value)*0.05)/Number(numberOfPeople.value)).toFixed(2)
        totalAmount.innerHTML = " $ "+ ((Number(input.value)*1.05)/Number(numberOfPeople.value)).toFixed(2)
})

box2.addEventListener("click",() => {
    tipAmount.innerHTML = " $ "+ ((Number(input.value)*0.1)/Number(numberOfPeople.value)).toFixed(2)
    totalAmount.innerHTML = " $ "+ ((Number(input.value)*1.1)/Number(numberOfPeople.value)).toFixed(2)
})

box3.addEventListener("click",() => {
    tipAmount.innerHTML = " $ "+ ((Number(input.value)*0.15)/Number(numberOfPeople.value)).toFixed(2)
    totalAmount.innerHTML = " $ "+ ((Number(input.value)*1.15)/Number(numberOfPeople.value)).toFixed(2)
})

box4.addEventListener("click",() => {
    tipAmount.innerHTML = " $ "+ ((Number(input.value)*0.25)/Number(numberOfPeople.value)).toFixed(2)
    totalAmount.innerHTML = " $ "+ ((Number(input.value)*1.25)/Number(numberOfPeople.value)).toFixed(2)
})

box5.addEventListener("click",() => {
    tipAmount.innerHTML = " $ "+ ((Number(input.value)*0.5)/Number(numberOfPeople.value)).toFixed(2)
    totalAmount.innerHTML = " $ "+ ((Number(input.value)*1.5)/Number(numberOfPeople.value)).toFixed(2)
})
defaultBox.addEventListener('keypress',function (defaul){
    if(defaul.key === 'Enter'){
        tipAmount.innerHTML = " $ "+ ((Number(input.value)*(Number(defaultBox.value)/100))/Number(numberOfPeople.value)).toFixed(2)
        totalAmount.innerHTML = " $ "+ ((Number(input.value)*(1+(Number(defaultBox.value)/100)))/Number(numberOfPeople.value)).toFixed(2)
    }
})

