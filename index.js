const root = document.getElementById("root");
 
function Navbar() {
    const linkHome = document.createElement("a");
    linkHome.href = "#home";
    linkHome.textContent = "Home";
    linkHome.onclick = function (event){
        event.preventDefault();
        const homeScreen = HomeScreen();
        root.innerHTML = "";
        root.append(homeScreen);
        history.pushState(null, "", event.target.href)
    };

    const linkAbout = document.createElement("a");
    linkAbout.href = "#about";  
    linkAbout.textContent = "About";
    linkAbout.onclick = function (event){
        event.preventDefault();
        const aboutSreen = AboutSreen();
        root.innerHTML = "";
        root.append(aboutSreen);
        history.pushState(null, "", event.target.href)
    };

    const div = document.createElement("div");
    div.append(linkHome);
    div.append(linkAbout);

    return div;
}

function AboutSreen() {
    const linkHome = document.createElement("a");
    linkHome.href = "#home";
    linkHome.textContent = "Kembali ke Home";
    linkHome.onclick = function (event){
        event.preventDefault();
        const homeScreen = HomeScreen();
        root.innerHTML = "";
        root.append(homeScreen);
        history.pushState(null, "", event.target.href)
    };

    const text = document.createElement("p");
    text.textContent = "Welcome To About";

    const div = document.createElement("div");
    div.append(linkHome);
    div.append(text)

    return div;
}

function HomeScreen() {
    const navbar = Navbar();     

    const textPreview = document.createElement("p");
    
    const input = document.createElement("input");
    input.oninput = function(event){
        textPreview.textContent = event.target.value;
    };
    input.placeholder = "Enter Your Name";

    const div = document.createElement("div");
    div.append(navbar);
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
