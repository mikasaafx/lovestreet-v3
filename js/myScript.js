document.addEventListener('DOMContentLoaded', function() {
    var accordionButtons = document.querySelectorAll('.accordion button');

    accordionButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var content = this.nextElementSibling;
            var isOpen = this.getAttribute('aria-expanded') === 'true';

            if (isOpen) {
                this.setAttribute('aria-expanded', 'false');
                content.classList.remove('show');
            } else {
                this.setAttribute('aria-expanded', 'true');
                content.classList.add('show');
            }
        });
    });
    
    
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('open');
        navList.classList.toggle('open');
    });

    const navItems = document.querySelectorAll('.nav-list li');
    navItems.forEach(function(item) {
        item.addEventListener('click', function() {
            menuToggle.classList.remove('open');
            navList.classList.remove('open');
        });
    });
    
    //scroll
    const pageSections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-list ul li a');

 
    window.addEventListener('scroll', function() {
        let fromTop = window.scrollY + 300; 

        pageSections.forEach(section => {
            let sectionId = section.getAttribute('id');
            let navLink = document.querySelector(`.nav-list ul li a[href="#${sectionId}"]`);

            if (navLink) {
                let sectionOffset = section.offsetTop;
                let sectionHeight = section.offsetHeight;

                if (fromTop >= sectionOffset && fromTop < sectionOffset + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                    });

                    navLink.classList.add('active');
                }
            }
        });
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });

            this.classList.add('active');

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    
    
});


