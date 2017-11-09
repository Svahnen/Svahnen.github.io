window.onscroll = function () {
  if (window.scrollY >= window.innerHeight)
  document.getElementById('nav-main').className = 'navbar navbar-expand-lg navbar-dark bg-dark fixed-top'
  else {
    document.getElementById('nav-main').className = 'navbar navbar-expand-lg navbar-dark bg-dark'
  }
}
