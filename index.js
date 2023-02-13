const linkHome = document.getElementById("link.home");
const linkAbout = document.getElementById("link.about");
const root = document.getElementById("root");

linkHome.onclick = function (event){
    event.preventDefault();
    root.textContent = "Welcome To Home";
    history.pushState(null, "", event.target.href)
};

linkAbout.onclick = function (event){
    event.preventDefault();
    root.textContent = "Welcome To About";
    history.pushState(null, "", event.target.href)
};