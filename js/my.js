//animasyonlu yazı
var Text = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

Text.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-words');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new Text(elements[i], JSON.parse(toRotate), period);
    }
  }
}; 

//1. scratch projesi
window.addEventListener("DOMContentLoaded", function () {
  var projectContainer = document.getElementById("scratch-container");
  var projectId = "954080144"; // Projenin ID'si

  var iframe = document.createElement("iframe");
  iframe.setAttribute(
    "src",
    "https://scratch.mit.edu/projects/" + projectId + "/embed"
  );
  iframe.setAttribute("allowtransparency", "true");
  iframe.setAttribute("width", "485");
  iframe.setAttribute("height", "402");
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("scrolling", "no");
  iframe.setAttribute("allowfullscreen", "");

  projectContainer.appendChild(iframe);
});

// 2. scratch projesi
window.addEventListener("DOMContentLoaded", function () {
  var projectContainer = document.getElementById("scratch-container-2");
  var projectId = "952876339"; // Projenin ID'si

  var iframe = document.createElement("iframe");
  iframe.setAttribute(
    "src",
    "https://scratch.mit.edu/projects/" + projectId + "/embed"
  );
  iframe.setAttribute("allowtransparency", "true");
  iframe.setAttribute("width", "485");
  iframe.setAttribute("height", "402");
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("scrolling", "no");
  iframe.setAttribute("allowfullscreen", "");

  projectContainer.appendChild(iframe);
});
