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
let reset = document.querySelector(".reset")
let errormsg =document.querySelector(".errormsg")


box1.addEventListener("click",() => {
   // errormsg.innerHTML = "'sorry'"
   if(Number(input.value) === 0){
    errormsg.innerHTML = "'sorry'"
    inputValidate()
   }
   else{
    if(Number(numberOfPeople.value) === 0){
        validate()
    }
    else{
        tipAmount.innerHTML = " $ "+ ((Number(input.value)*0.05)/Number(numberOfPeople.value)).toFixed(2)
        totalAmount.innerHTML = " $ "+ ((Number(input.value)*1.05)/Number(numberOfPeople.value)).toFixed(2)
    }
   }
})

box2.addEventListener("click",() => {
    if(Number(numberOfPeople.value) === 0){
        validate()
    }
  //  else if(Number(numberOfPeople.value) === null){
  //      validatee()
  //  }
    else{
    tipAmount.innerHTML = " $ "+ ((Number(input.value)*0.1)/Number(numberOfPeople.value)).toFixed(2)
    totalAmount.innerHTML = " $ "+ ((Number(input.value)*1.1)/Number(numberOfPeople.value)).toFixed(2)
    }
})

box3.addEventListener("click",() => {
    if(Number(numberOfPeople.value) === 0){
        validate()
    }
    else{
    tipAmount.innerHTML = " $ "+ ((Number(input.value)*0.15)/Number(numberOfPeople.value)).toFixed(2)
    totalAmount.innerHTML = " $ "+ ((Number(input.value)*1.15)/Number(numberOfPeople.value)).toFixed(2)
    }
})

box4.addEventListener("click",() => {
    if(Number(numberOfPeople.value) === 0){
        validate()
    }
    else{
    tipAmount.innerHTML = " $ "+ ((Number(input.value)*0.25)/Number(numberOfPeople.value)).toFixed(2)
    totalAmount.innerHTML = " $ "+ ((Number(input.value)*1.25)/Number(numberOfPeople.value)).toFixed(2)
    }
})

box5.addEventListener("click",() => {
    if(Number(numberOfPeople.value) === 0){
        validate()
    }
    else{
    tipAmount.innerHTML = " $ "+ ((Number(input.value)*0.5)/Number(numberOfPeople.value)).toFixed(2)
    totalAmount.innerHTML = " $ "+ ((Number(input.value)*1.5)/Number(numberOfPeople.value)).toFixed(2)
    }
})
defaultBox.addEventListener('keypress',function (defaul){
    if(Number(numberOfPeople.value) === 0){
        validate()
    }
    else{
    if(defaul.key === 'Enter'){
        tipAmount.innerHTML = " $ "+ ((Number(input.value)*(Number(defaultBox.value)/100))/Number(numberOfPeople.value)).toFixed(2)
        totalAmount.innerHTML = " $ "+ ((Number(input.value)*(1+(Number(defaultBox.value)/100)))/Number(numberOfPeople.value)).toFixed(2)
    }}
})
function validate(){
    setError(numberOfPeople);
}
let can = document.querySelector(".cannot")
function setError(element){
    element.style.color="red"
    element.style.borderColor = "red"
    
    can.style.color = "red"
 
    tipAmount.innerHTML = " $ " + 0.00.toFixed(2)
    totalAmount.innerHTML = " $ "+ 0.00.toFixed(2)
}
reset.addEventListener("click",() => {
    input.value = ''
    numberOfPeople.value = ''
    defaultBox.value = ''
    tipAmount.innerHTML = ""
    totalAmount.innerHTML = ""
    numberOfPeople.style.borderColor = "black"
    can.style.color = "black"
    input.style.borderColor = 'black'
    errormsg.style.color = 'black'

})
function inputValidate(){
    errormsg.innerHTML = "can't be Zero"
    input.style.borderColor = 'red'
    //input.style.Color = 'red'
    errormsg.style.color = 'red'
}

/*function validatee(){
    setErrorr(numberOfPeople);
}
function setErrorr(element){
    element.style.color="green"
    element.style.borderColor = "green"
    
    can.style.color = "green"
 
    tipAmount.innerHTML = " $ " + 0.00.toFixed(2)
    totalAmount.innerHTML = " $ "+ 0.00.toFixed(2)
}*/