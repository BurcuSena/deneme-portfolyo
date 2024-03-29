//1. scratch projesi
window.addEventListener("DOMContentLoaded", function() {
    var projectContainer = document.getElementById("scratch-container");
    var projectId = "954080144"; // Projenin ID'si

    var iframe = document.createElement("iframe");
    iframe.setAttribute("src", "https://scratch.mit.edu/projects/" + projectId + "/embed");
    iframe.setAttribute("allowtransparency", "true");
    iframe.setAttribute("width", "485");
    iframe.setAttribute("height", "402");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("scrolling", "no");
    iframe.setAttribute("allowfullscreen", "");

    projectContainer.appendChild(iframe);
});

// 2. scratch projesi
window.addEventListener("DOMContentLoaded", function() {
    var projectContainer = document.getElementById("scratch-container-2");
    var projectId = "952876339"; // Projenin ID'si 

    var iframe = document.createElement("iframe");
    iframe.setAttribute("src", "https://scratch.mit.edu/projects/" + projectId + "/embed");
    iframe.setAttribute("allowtransparency", "true");
    iframe.setAttribute("width", "485");
    iframe.setAttribute("height", "402");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("scrolling", "no");
    iframe.setAttribute("allowfullscreen", "");

    projectContainer.appendChild(iframe);
});