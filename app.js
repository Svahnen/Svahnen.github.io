var news = document.getElementById('news');

news.onclick = function() {
  document.getElementById("p1").innerHTML = "Dagens nyheter är:";
  document.getElementById("i1").style.display = "inherit";
  document.getElementById("i1").style.height = "200px";
  document.getElementById("i1").style.width = "400px";
  document.getElementById("submit").style.display = "inherit";

};

var feedback = document.getElementById('feedback');

feedback.onclick = function() {
  document.getElementById("p1").innerHTML = "Hur var din dag idag?";
  document.getElementById("i1").style.display = "inherit";
  document.getElementById("i1").style.width = "400px";
  document.getElementById("p2").innerHTML = "Vad åt du till lunch?";
  document.getElementById("i2").style.display = "inherit";
  document.getElementById("i2").style.width = "400px";
  document.getElementById("submit").style.display = "inherit";

};
