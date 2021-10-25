const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

const labels = document.querySelectorAll('.form-control label')

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}

labels.forEach(label => {
    label.innerHTML = label.textContent.replace(/\S/g, "<span>$&</span")
})