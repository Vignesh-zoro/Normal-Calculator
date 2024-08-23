//select the input box

var vig = document.getElementById("display")
//create a function for show the button values
function displayvalue(val) {
    vig.value = vig.value + val
}
//this  function is used to clear or delete the value
function displayclear() {
    vig.value = ""
}
function deleted(event)
{
   let display=document.getElementById("display")
   display.value=display.value.slice(0,-1)
}
//the main function of the calculaor mathamatical functions
function calculate()
{
    var userInput= document.getElementById("display").value;
    var kis=eval(userInput);
   document.getElementById("display").value=kis;
}