const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navLinks = document.getElementsByClassName('nav-links')[0]

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active')
});


const artvid = document.querySelectorAll('.artvid');
for (let i = 0; i<artvid.length; i++) {
    artvid[i].addEventListener('loadedmetadata', function(e) {
        this.currentTime = 5;
    }, false)
    artvid[i].addEventListener('mouseenter', function(e) {
        artvid[i].play()
    })
    artvid[i].addEventListener('mouseout', function(e) {
        artvid[i].pause()

    })
}