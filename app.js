/* eslint no-undef: 0 */
/* eslint no-unused-vars: 0 */
/* eslint-env browser */

// Set variebles for each id
let p1 = document.getElementsByClassName('p1')[0]
let p2 = document.getElementsByClassName('p2')[0]
let p3 = document.getElementsByClassName('p3')[0]
let p4 = document.getElementsByClassName('p4')[0]
let p5 = document.getElementsByClassName('p5')[0]
let t1 = document.getElementsByClassName('t1')[0]
let t2 = document.getElementsByClassName('t2')[0]
let t3 = document.getElementsByClassName('t3')[0]
let t4 = document.getElementsByClassName('t4')[0]
let t5 = document.getElementsByClassName('t5')[0]
let i1 = document.getElementsByClassName('i1')[0]
let i2 = document.getElementsByClassName('i2')[0]
let i3 = document.getElementsByClassName('i3')[0]
let i4 = document.getElementsByClassName('i4')[0]
let i5 = document.getElementsByClassName('i5')[0]
let sB = document.getElementsByClassName('submit')[0]
let cB = document.getElementsByClassName('close')[0]

// Reset function for the close button and for use on the first line of each form function
let reset = function (form) {
  for (let i = 1; i <= 5; i++) {
    console.log(this['p' + i])
    form['p' + i].innerHTML = ''
    form['t' + i].style.display = 'none'
    form['t' + i].style.height = 'auto'
    form['t' + i].style.width = 'auto'
    form['t' + i].value = ''
    form['t' + i].required = false
    form['i' + i].style.display = 'none'
    form['i' + i].style.type = 'text'
    form['i' + i].required = false
    sB.style.display = 'none'
    cB.style.display = 'none'
  }
}

// Alert to be sent on submit
let sent = function () {
  alert('Inskickat!')
}

// Close button
document.getElementsByClassName('close')[0].onclick = function () {
  reset(this)
}

// After this line comes all the form functions
document.getElementsByClassName('news')[0].onclick = function () {
  // reset()
  cB.style.display = 'inherit'
  p1.innerHTML = 'Dagens nyheter är:'
  t1.style.display = 'inherit'
  t1.style.height = '200px'
  t1.style.width = '350px'
  t1.required = true
  sB.style.display = 'inherit'
}

document.getElementsByClassName('feedback')[0].onclick = function () {
  // reset()
  cB.style.display = 'inherit'
  p1.innerHTML = 'Vad har varit bra/dåligt under dagen?'
  t1.style.display = 'inherit'
  t1.style.width = '350px'
  t1.required = true
  p2.innerHTML = 'Hur har klimatet i klassen varit?'
  t2.style.display = 'inherit'
  t2.style.width = '350px'
  t2.required = true
  sB.style.display = 'inherit'
}

document.getElementsByClassName('weekeval')[0].onclick = function () {
  // reset()
  cB.style.display = 'inherit'
  p1.innerHTML = 'Ditt namn (frivilligt):'
  t1.style.display = 'inherit'
  t1.style.width = '200px'
  p2.innerHTML = 'Hur upplever du arbetsmiljön?'
  i2.style.display = 'inherit'
  i2.type = 'range'
  i2.style.width = '350px'
  p3.innerHTML = 'Hur upplever du just nu tempot i utbildningen?'
  i3.style.display = 'inherit'
  i3.type = 'range'
  i3.style.width = '350px'
  p4.innerHTML = 'Förslag på förbättringar:'
  t4.style.display = 'inherit'
  t4.style.height = '150px'
  t4.style.width = '350px'
  sB.style.display = 'inherit'
}
