// Make function for setting nav to fixed-top
let navTop = function () {
  if (window.scrollY >= window.innerHeight) {
    document.getElementById('nav-main').className = 'navbar navbar-expand-lg navbar-dark bg-dark fixed-top'
    document.getElementById('carousel').style.paddingTop = '56px'
  } else {
    document.getElementById('nav-main').className = 'navbar navbar-expand-lg navbar-dark bg-dark'
    document.getElementById('carousel').style.paddingTop = '0'
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
