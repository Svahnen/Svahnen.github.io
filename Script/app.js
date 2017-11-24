/* eslint no-undef: 0 */
/* eslint no-unused-vars: 0 */
/* eslint-env browser */

// Make function for setting nav to fixed-top, and set paddingTop to the carousel
// aswell as setting the padded area to the same color as the navbar.
let navTop = function () {
  if (window.scrollY >= window.innerHeight) {
    document.getElementById('nav-main').className = 'navbar navbar-expand-lg navbar-dark bg-dark fixed-top'
    document.getElementById('what-i-do').style.paddingTop = '106px'
    document.getElementById('what-i-do').style.background = 'linear-gradient(rgb(53, 58, 64) 56px, rgba(255, 255, 255, 0) 0%)'
  } else {
    document.getElementById('nav-main').className = 'navbar navbar-expand-lg navbar-dark bg-dark'
    document.getElementById('what-i-do').style.paddingTop = '50px'
    document.getElementById('what-i-do').style.background = 'rgba(255, 255, 255, 0)'
  }
}

// See if user is scrolling
let didScroll = false

window.onscroll = function () {
  didScroll = true
}

// If user is scrolling run navTop() every 50ms
setInterval(function () {
  if (didScroll) {
    didScroll = false
    navTop()
  }
}, 50)

// Take in the string that is typed into the search-box
let searchString = function () {
  return document.getElementById('searchPage').value
}

// Search on the same page for the string from searchString function
let findOnPage = function () {
  window.find(searchString())
}
