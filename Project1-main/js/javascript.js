// Changing between subpages (side navigation)
const desc = document.getElementById("descriptionPage");
const inst = document.getElementById("instructionsPage");
const instSubpage = document.getElementById("instructionsPageSubpage");
const instSubpageTwo = document.getElementById("instructionsPageSubpageTwo");
const instSubpageThree = document.getElementById("instructionsPageSubpageThree");
const instSubpageFour = document.getElementById("instructionsPageSubpageFour");
const faq = document.getElementById("faqPage");
const down = document.getElementById("installPage");
const news = document.getElementById("newsPage");

let allClasses = [desc, inst, instSubpage, instSubpageTwo, instSubpageThree, instSubpageFour, faq, down, news];

var submitHash = ""

function hideAll() {
allClasses.forEach(function(el) {
  el.classList.add("hidden");
})
}

document.getElementById("descriptionTrigger").addEventListener("click", () => {hideAll(); triggerDescription();})
function triggerDescription() {
    desc.classList.remove("hidden");
    window.location.hash = "#description"
}

document.getElementById("instructionsTrigger").addEventListener("click", () => {hideAll(); triggerInstructions();})
function triggerInstructions() {
    inst.classList.remove("hidden");
    instSubpage.classList.remove("hidden");
    window.location.hash = "#instructions"
}
document.getElementById("instructionsTriggerSubpage").addEventListener("click", () => {hideAll(); triggerInstructionsSubpage();})
function triggerInstructionsSubpage() {
    inst.classList.remove("hidden");
    instSubpage.classList.remove("hidden");
    window.location.hash = "#instructionsSubpage"
}
document.getElementById("instructionsTriggerSubpageTwo").addEventListener("click", () => {hideAll(); triggerInstructionsSubpageTwo();})
function triggerInstructionsSubpageTwo() {
    inst.classList.remove("hidden");
    instSubpageTwo.classList.remove("hidden");
    window.location.hash = "#instructionsSubpageTwo"
}
document.getElementById("instructionsTriggerSubpageThree").addEventListener("click", () => {hideAll(); triggerInstructionsSubpageThree();})
function triggerInstructionsSubpageThree() {
    inst.classList.remove("hidden");
    instSubpageThree.classList.remove("hidden");
    window.location.hash = "#instructionsSubpageThree"
}
document.getElementById("instructionsTriggerSubpageFour").addEventListener("click", () => {hideAll(); triggerInstructionsSubpageFour();})
function triggerInstructionsSubpageFour() {
    inst.classList.remove("hidden");
    instSubpageFour.classList.remove("hidden");
    window.location.hash = "#instructionsSubpageFour"
}

document.getElementById("faqTrigger").addEventListener("click", () => {hideAll(); triggerFaq();})
function triggerFaq() {
    faq.classList.remove("hidden");
    window.location.hash = "#faq"
}

document.getElementById("installTrigger").addEventListener("click", () => {hideAll(); triggerInstall();})
function triggerInstall() {
    down.classList.remove("hidden");
    window.location.hash = "#install"
}

document.getElementById("newsTrigger").addEventListener("click", () => {hideAll(); triggerNews();})
function triggerNews() {
    news.classList.remove("hidden");
    window.location.hash = "#news"
}

window.addEventListener("load", () => {subpageChanger(); checkForm();})
function subpageChanger() {
    let hash = window.location.hash;
    if(hash == "") {
        triggerDescription();
    } else if(hash == "#description") {
        triggerDescription();
    } else if(hash == "#instructions") {
        triggerInstructions();
    } else if(hash == "#instructionsSubpage") {
        triggerInstructionsSubpage();
    } else if(hash == "#instructionsSubpageTwo") {
        triggerInstructionsSubpageTwo();
    } else if(hash == "#instructionsSubpageThree") {
        triggerInstructionsSubpageThree();
    } else if(hash == "#instructionsSubpageFour") {
        triggerInstructionsSubpageFour();
    } else if(hash == "#faq") {
        triggerFaq();
    } else if(hash == "#install") {
        triggerInstall();
    } else {
        triggerNews();
    }
}

// Download Validation 
// function checkForm() {
//     let f = document.forms["downloadForm"].elements;
//     let cansubmit = true;
//     const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     document.getElementById('submitInfo').classList.remove("disabled");

//     for (let i = 0; i < f.length; i++) {
//         if (f[i].value.length == 0) {
//             cansubmit = false;
//             document.getElementById('submitInfo').classList.add("disabled");
//         }
//         if (!emailInput.value.match(emailPattern)) {
//             cansubmit = false;
//             document.getElementById('submitInfo').classList.add("disabled");
//           }
//     }
//     document.getElementById('submitInfo').disabled = !cansubmit;
// }

function toPCA_PAM50() {
    const link = document.createElement('a');
    link.setAttribute('href', 'pca-pam50.html');
    document.body.appendChild(link);
    link.click();
    link.remove();
}
