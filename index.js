const linkHome = document.getElementById("link.home");
const linkAbout = document.getElementById("link.about");
const root = document.getElementById("root");

linkAbout.onclick = function (event){
    event.preventDefault();
    const aboutSreen = AboutSreen();
    root.innerHTML = "";
    root.append(aboutSreen);
    history.pushState(null, "", event.target.href)
};
 
function Navbar() {
    const linkHome = document.createElement("a");
    linkHome.href = "#home";
    linkHome.onclick = function (event){
        event.preventDefault();
        const homeScreen = HomeScreen();
        root.innerHTML = "";
        root.append(homeScreen);
        history.pushState(null, "", event.target.href)
    };
}

function AboutSreen() {
    const text = document.createElement("p");
    text.textContent = "Welcome To About";
    return text;
}

function HomeScreen() {
    const textPreview = document.createElement("p");
    
    const input = document.createElement("input");
    input.oninput = function(event){
        textPreview.textContent = event.target.value;
    };
    input.placeholder = "Enter Your Name";

    const div = document.createElement("div");
    div.append(input);
    div.append(textPreview);

    return div;
}

if (location.hash === "#about"){
    const aboutSreen = AboutSreen();
    root.innerHTML = "";
    root.append(aboutSreen);
} else if (location.hash === "#home"){
    const homeScreen = HomeScreen();
    root.innerHTML = "";
    root.append(homeScreen);
} 
