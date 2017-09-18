function button (val) {
  calculator.answer.value += val;
}
function evalAnswer () {
  calculator.answer.value = eval(calculator.answer.value);
}
function clearAnswer () {
  calculator.answer.value = '';
}
