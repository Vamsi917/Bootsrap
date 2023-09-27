let displayResult=document.getElementById("displayResult")
let firstNum=document.getElementById("firstNum")
let secNum=document.getElementById("secNum")
function multiply(){
    displayResult.textContent="The Result is : "+parseInt(firstNum.value) * parseInt(secNum.value)
}
function divide(){
    displayResult.textContent="The Result is : "+parseInt(firstNum.value) / parseInt(secNum.value)
    
}