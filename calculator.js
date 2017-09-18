function button (val) {
  calculator.answer.value += val;
}
//document.getElementByName('answer')[0].value += 

function evaluate () {
calculator.answer.value = eval(calculator.answer.value);
}
