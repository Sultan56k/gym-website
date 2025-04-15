// Header Scroll Effect
let header = document.querySelector('.header');

window.onscroll = () => {
    if(window.scrollY > 100) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}

// Mobile Menu Toggle
let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// Scroll Top Button
let scrollTop = document.querySelector('#scroll-top');

window.onscroll = () => {
    if(window.scrollY > 300) {
        scrollTop.style.display = 'block';
    } else {
        scrollTop.style.display = 'none';
    }
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission
document.querySelector('.contact form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    let name = this.querySelector('input[type="text"]').value;
    let email = this.querySelector('input[type="email"]').value;
    let phone = this.querySelector('input[type="number"]').value;
    let message = this.querySelector('textarea').value;
    
    // Simple validation
    if(name === '' || email === '' || message === '') {
        alert('Please fill in all required fields');
        return;
    }
    
    // Here you would typically send the data to a server
    // For this example, we'll just show a success message
    alert(`Thank you, ${name}! Your message has been sent. We'll contact you soon.`);
    
    // Reset the form
    this.reset();
});

// Pricing Plan Hover Effect
document.querySelectorAll('.pricing .box').forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.style.transform = 'scale(1.05)';
    });
    
    box.addEventListener('mouseleave', () => {
        box.style.transform = 'scale(1)';
    });
});

// Trainer Social Media Hover Effect
document.querySelectorAll('.trainers .share a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'rotate(360deg)';
    });
    
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'rotate(0deg)';
    });
});

// Animation on Scroll
window.addEventListener('scroll', reveal);

function reveal() {
    let reveals = document.querySelectorAll('.about, .services, .trainers, .pricing, .contact');
    
    for(let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 150;
        
        if(revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

// Initialize animations
reveal();