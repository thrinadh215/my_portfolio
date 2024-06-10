document.addEventListener('DOMContentLoaded', (event) => {
    var i = 0;
    var text = "FrontEnd Developer...";
    var speed = 50;
  
    function myfun() {
        if (i < text.length) {
            document.getElementById('element').innerHTML += text.charAt(i);
            i++;
            setTimeout(myfun, speed);
        }
    }
    myfun();

    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav ul li a');


    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');
            if (top > offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('active');
                });
            }
        });
    };

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });
});


const toggleBtn = document.querySelector('.toggle');
const toggleIcon = document.querySelector('.toggle i');
const dropdownMenu = document.querySelector('.drop-menu');

toggleBtn.onclick = function() {
    dropdownMenu.classList.toggle('open');

    const isOpen = dropdownMenu.classList.contains('open');

    toggleIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars';
}
