const toggle = document.getElementsByClassName('toggle')[0]
const navlinks = document.getElementsByClassName('navLinks')[0]

toggle.addEventListener('click', function(){
    navlinks.classList.toggle('active')
})