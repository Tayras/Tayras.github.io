function scrollToElement(elementSelector, instance = 0) {
    const elements = document.querySelectorAll(elementSelector)
    if(elements.length > instance) {
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const aboutLink = document.getElementById("about");
const skillsLink = document.getElementById("skills");

aboutLink.addEventListener('click', () => {
    scrollToElement('.about')
})

skillsLink.addEventListener('click', () => {
    scrollToElement('.skills')
})
