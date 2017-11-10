// Make function for setting nav to fixed-top, and set paddingTop to the carousel
// aswell as setting the padded area to the same color as the navbar.
let navTop = function () {
  if (window.scrollY >= window.innerHeight) {
    document.getElementById('nav-main').className = 'navbar navbar-expand-lg navbar-dark bg-dark fixed-top'
    document.getElementById('carousel').style.paddingTop = '56px'
    document.getElementById('carousel').style.background = 'linear-gradient(#353a40 56px,#fff 0%)'
  } else {
    document.getElementById('nav-main').className = 'navbar navbar-expand-lg navbar-dark bg-dark'
    document.getElementById('carousel').style.paddingTop = '0'
    document.getElementById('carousel').style.background = '#fff'
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
