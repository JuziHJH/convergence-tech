// Smooth scrolling function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// FAQ Toggle Function - Independent toggle (no auto-close)
function toggleFAQ(faqNumber) {
    const faqItem = document.querySelector(`.faq-v1-item[data-faq="${faqNumber}"]`);
    
    // Toggle current FAQ only
    faqItem.classList.toggle('faq-v1-active');
}

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(16, 16, 16, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = '#101010';
        header.style.backdropFilter = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for fade-in animation
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.introduction-page, .our-core, .why-convergence, .insight-section, .faqs-v1-section');
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
    
    // Animate steps on hover
    const steps = document.querySelectorAll('.step');
    steps.forEach((step, index) => {
        step.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Animate why cards on hover
    const whyCards = document.querySelectorAll('.why-card');
    whyCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
});

// Add active state to navigation links based on scroll position
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Parallax effect for landing page background
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const bgShapes = document.querySelectorAll('.bg-shape');
    
    bgShapes.forEach((shape, index) => {
        const speed = 0.5 + (index * 0.2);
        shape.style.transform = `translateY(${scrolled * speed}px) rotate(-6deg)`;
    });
});

// Mobile menu toggle (if needed in future)
function toggleMobileMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
}

// Add keyboard accessibility for FAQs
document.querySelectorAll('.faq-v1-question').forEach(question => {
    question.setAttribute('tabindex', '0');
    question.setAttribute('role', 'button');
    question.setAttribute('aria-expanded', 'false');
    
    question.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
        }
    });
});

// Update aria-expanded when FAQ is toggled
const originalToggleFAQ = window.toggleFAQ;
window.toggleFAQ = function(faqNumber) {
    const faqItem = document.querySelector(`.faq-v1-item[data-faq="${faqNumber}"]`);
    const question = faqItem.querySelector('.faq-v1-question');
    const isActive = faqItem.classList.contains('faq-v1-active');
    
    originalToggleFAQ(faqNumber);
    
    question.setAttribute('aria-expanded', !isActive);
};

// Preload images
window.addEventListener('load', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.complete) {
            img.style.opacity = '0';
            img.addEventListener('load', function() {
                this.style.transition = 'opacity 0.3s ease';
                this.style.opacity = '1';
            });
        }
    });
});

console.log('Convergence Tech Singapore - Website loaded successfully');
