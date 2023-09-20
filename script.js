// ###########################################################
// animate.style code
// ########################################################### //

const animateCSS = (element, animation, prefix = 'animate__') =>

  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
});


// ###########################################################
// typing effect on <h2>
// ########################################################### //

var twArr = ["Just your friendly neighborhood tech girl."];
var twPosition = 0;
var twSpeed = 180;

typewrite = () => {
    document.querySelector("#twText").innerHTML = twArr[0].substring(0, twPosition) + `<span id="twSpan">\u25ae</span>`;

    if(twPosition++ != twArr[0].length){
        setTimeout(typewrite, twSpeed);
    } else {
        twPosition = 0;
        setTimeout(typewrite, twSpeed);
    }
}

// ###########################################################
// Project Boxes Mouseover Animation Effect
// ########################################################### //

function mouseoverProject (project){
    let title = project.getElementsByClassName("project-title");
    title[0].classList.add("project-title-hover");
    project.classList.add("animate__animated", "animate__pulse");
}

function mouseoutProject(project){
    let title = project.getElementsByClassName("project-title");
    title[0].classList.remove("project-title-hover");
    project.classList.remove("animate__animated", "animate__pulse");
}


// ###########################################################
// Project OnClick Action
// ########################################################### //
const project1 = document.getElementById("project1"); 
const project2 = document.getElementById("project2"); 
const project3 = document.getElementById("project3"); 
const project4 = document.getElementById("project4");
const project5 = document.getElementById("project5");
const project6 = document.getElementById("project6");

clickProject(project1, "https://bryliebaird.github.io/guess-the-word/"); 
clickProject(project2, "https://www.canva.com/design/DAFKdLqTCDE/_N7Mtx2GK43y50nyx-a5tg/view#1"); 
clickProject(project3, "https://bryliebaird.github.io/github-repo-gallery/?"); 
clickProject(project4, "https://bryliebaird.github.io/unplugged-retreat/");
clickProject(project5, "https://bryliebaird.github.io/mindfulness-timer/");
clickProject(project6, "https://docs.google.com/spreadsheets/d/1VWV3P-zZo8PulrZwjV9F-AWAk-WWudYCDhrQU1IsrM0/edit?usp=sharing")


function clickProject(project, url) {
    project.addEventListener("click", function () {
        window.open(url, "_blank"); // "_blank" opens the link in a new tab
    });
}



// ###########################################################
// Skill Btn Mouseover Animation
// ########################################################### //

// HTML Skill Btn // 
function mouseoverHTML(skill){
    skill.style.border = "3px solid #f86d58";
    document.querySelector("#htmlCheck").classList.add("animate__animated", "animate__bounce");
    // document.querySelector("#htmlSvg").setAttribute("src", "/assets/img/html-light.svg");
}

function mouseoutHTML(skill){
    skill.style.border = "3px solid #fff9f1";
    // document.querySelector("#htmlSvg").setAttribute("src", "/assets/img/html-dark.svg");
    document.querySelector("#htmlCheck").classList.remove("animate__animated", "animate__bounce");  
}

// CSS Skill Btn
function mouseoverCSS(skill){
    skill.style.border = "3px solid #f86d58";
    // document.querySelector("#cssSVG").setAttribute("src", "/assets/img/css-light.svg");
    document.querySelector("#cssCheck").classList.add("animate__animated", "animate__bounce");
}

function mouseoutCSS(skill){
    skill.style.border = "3px solid #fff9f1";
    // document.querySelector("#cssSVG").setAttribute("src", "/assets/img/css-dark.svg");
    document.querySelector("#cssCheck").classList.remove("animate__animated", "animate__bounce");
}

// JavaScript Skill Btn
function mouseoverJS(skill){
    skill.style.border = "3px solid #f86d58";
    // document.querySelector("#jsSVG").setAttribute("src", "/assets/img/javascript-light.svg");
    document.querySelector("#jsCheck").classList.add("animate__animated", "animate__bounce");
}

function mouseoutJS(skill){
    skill.style.border = "3px solid #fff9f1";
    // document.querySelector("#jsSVG").setAttribute("src", "/assets/img/javascript-dark.svg");
    document.querySelector("#jsCheck").classList.remove("animate__animated", "animate__bounce");
}


/* Canva Skill Btn */
function mouseoverCanva(skill){
    skill.style.border = "3px solid #f86d58";
    // document.querySelector("#canvaSVG").setAttribute("src", "/assets/img/canva-2.svg");
    document.querySelector("#canvaCheck").classList.add("animate__animated", "animate__bounce");
}

function mouseoutCanva(skill){
    skill.style.border = "3px solid #fff9f1";
    // document.querySelector("#canvaSVG").setAttribute("src", "/assets/img/canva-1.svg");
    document.querySelector("#canvaCheck").classList.remove("animate__animated", "animate__bounce");
}

// Git + Github Skill Btn
function mouseoverGit(skill){
    skill.style.border = "3px solid #f86d58";
    // document.querySelector("#gitSVG").setAttribute("src", "/assets/img/git-light.svg");
    document.querySelector("#gitCheck").classList.add("animate__animated", "animate__bounce");
}

function mouseoutGit(skill){
    skill.style.border = "3px solid #fff9f1";
    // document.querySelector("#gitSVG").setAttribute("src", "/assets/img/git-dark.svg");
    document.querySelector("#gitCheck").classList.remove("animate__animated", "animate__bounce");
}


// Bootstrap Skill Btn 
function mouseoverBS(skill){
    skill.style.border = "3px solid #f86d58";
    // document.querySelector("#bsSVG").setAttribute("src", "/assets/img/bootstrap-light.svg");
    document.querySelector("#bsCheck").classList.add("animate__animated", "animate__bounce");
}

function mouseoutBS(skill){
    skill.style.border = "3px solid #fff9f1";
    // document.querySelector("#bsSVG").setAttribute("src", "/assets/img/bootstrap-dark.svg");
    document.querySelector("#bsCheck").classList.remove("animate__animated", "animate__bounce");
}

// Google Workspace Skill Btn 
function mouseoverGoogle(skill){
    skill.style.border = "3px solid #f86d58";
    // document.querySelector("#googleSVG").setAttribute("src", "/assets/img/google-2.svg");
    document.querySelector("#googleCheck").classList.add("animate__animated", "animate__bounce");
}

function mouseoutGoogle(skill){
    skill.style.border = "3px solid #fff9f1";
    // document.querySelector("#googleSVG").setAttribute("src", "/assets/img/google-1.svg");
    document.querySelector("#googleCheck").classList.remove("animate__animated", "animate__bounce");
}

// SASS Skill Btn 
function mouseoverSass(skill){
    skill.style.border = "3px solid #f86d58";
    // document.querySelector("#sassSVG").setAttribute("src", "/assets/img/sass-light.svg");
    document.querySelector("#sassCheck").classList.add("animate__animated", "animate__bounce");
}

function mouseoutSass(skill){
    skill.style.border = "3px solid #fff9f1";
    // document.querySelector("#sassSVG").setAttribute("src", "/assets/img/sass-dark.svg");
    document.querySelector("#sassCheck").classList.remove("animate__animated", "animate__bounce");
}

// Salesforce Skill Btn
function mouseoverCRM(skill){
    skill.style.border = "3px solid #f86d58";
    // document.querySelector("#crmSVG").setAttribute("src", "/assets/img/crm-2.svg");
    document.querySelector("#crmCheck").classList.add("animate__animated", "animate__bounce");
}

function mouseoutCRM(skill){
    skill.style.border = "3px solid #fff9f1";
    // document.querySelector("#crmSVG").setAttribute("src", "/assets/img/crm-1.svg");
    document.querySelector("#crmCheck").classList.remove("animate__animated", "animate__bounce");
}

// Outreach Skill Btn
function mouseoverOutreach(skill){
    skill.style.border = "3px solid #f86d58";
    document.querySelector("#outreachCheck").classList.add("animate__animated", "animate__bounce");
}

function mouseoutOutreach(skill){
    skill.style.border = "3px solid #fff9f1";
    document.querySelector("#outreachCheck").classList.remove("animate__animated", "animate__bounce");
}

// Sales Navigator Skill Btn
function mouseoverSalesnav(skill){
    skill.style.border = "3px solid #f86d58";
    document.querySelector("#salesnavCheck").classList.add("animate__animated", "animate__bounce");
}

function mouseoutSalesnav(skill){
    skill.style.border = "3px solid #fff9f1";
    document.querySelector("#salesnavCheck").classList.remove("animate__animated", "animate__bounce");
}

// ZoomInfo Skill Btn
function mouseoverZoominfo(skill){
    skill.style.border = "3px solid #f86d58";
    document.querySelector("#zoominfoCheck").classList.add("animate__animated", "animate__bounce");
}

function mouseoutZoominfo(skill){
    skill.style.border = "3px solid #fff9f1";
    document.querySelector("#zoominfoCheck").classList.remove("animate__animated", "animate__bounce");
}

// Gong.io Skill Btn
function mouseoverGong(skill){
    skill.style.border = "3px solid #f86d58";
    document.querySelector("#gongCheck").classList.add("animate__animated", "animate__bounce");
}

function mouseoutGong(skill){
    skill.style.border = "3px solid #fff9f1";
    document.querySelector("#gongCheck").classList.remove("animate__animated", "animate__bounce");
}

// Sendoso Skill Btn
function mouseoverSendoso(skill){
    skill.style.border = "3px solid #f86d58";
    document.querySelector("#sendosoCheck").classList.add("animate__animated", "animate__bounce");
}

function mouseoutSendoso(skill){
    skill.style.border = "3px solid #fff9f1";
    document.querySelector("#sendosoCheck").classList.remove("animate__animated", "animate__bounce");
}





// *** EVENT LISTENERS ***
window.addEventListener("load", typewrite);
window.addEventListener("load", updateCopyright);








