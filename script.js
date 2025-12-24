// CONFIGURATION
const CONFIG = {
    whatsapp: '225002250576852723',
    telephone: '2250566277354',
    email: '718digital1@gmail.com'
};

// PRICING DATA
const PRICES = {
    vitrine: { simple: 150000, medium: 300000, complex: 600000 },
    ecommerce: { simple: 800000, medium: 1500000, complex: 2500000 },
    app: { simple: 2000000, medium: 3500000, complex: 5000000 }
};

// DOM Elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');
const calcBtn = document.getElementById('calc-btn');
const contactForm = document.getElementById('contact-form');

// Mobile Menu Toggle
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('active');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
}

// Close menu when clicking nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Price Calculator
if (calcBtn) {
    calcBtn.addEventListener('click', () => {
        const type = document.getElementById('calc-type').value;
        const complexity = document.getElementById('calc-complexity').value;
        
        if (!type) {
            alert('Veuillez sélectionner un type de projet');
            return;
        }
        
        const price = PRICES[type]?.[complexity];
        if (price) {
            document.getElementById('calc-price').textContent = 
                formatPrice(price) + ' FCFA';
            document.getElementById('calc-result').style.display = 'block';
        }
    });
}

// Format price with spaces
function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

// Contact Form Handler
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Build WhatsApp message
        const message = `📞 NOUVELLE DEMANDE DE CONTACT\n\n` +
                       `👤 Nom: ${data.name}\n` +
                       `📧 Email: ${data.email}\n` +
                       `📱 Téléphone: ${data.phone}\n` +
                       `💬 Message: ${data.message}\n\n` +
                       `🕐 Date: ${new Date().toLocaleString()}`;
        
        // Open WhatsApp
        window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
        
        // Reset form
        contactForm.reset();
        
        // Show success message
        alert('✅ Message envoyé ! Vous allez être redirigé vers WhatsApp.');
    });
}

// Service Cards - Open Modal
document.querySelectorAll('.pricing-card .btn').forEach(button => {
    button.addEventListener('click', function() {
        const service = this.getAttribute('data-service');
        const category = this.getAttribute('data-category');
        
        openServiceModal(service, category);
    });
});

// Open Service Modal
function openServiceModal(service, category) {
    // In a real implementation, you would show a modal
    // For simplicity, we'll redirect to WhatsApp
    const message = `🎯 DEMANDE DE SERVICE - 718 DIGITAL\n\n` +
                   `📋 Service: ${service}\n` +
                   `📁 Catégorie: ${category}\n\n` +
                   `👤 Veuillez nous fournir:\n` +
                   `- Votre nom\n` +
                   `- Votre numéro de téléphone\n` +
                   `- Détails de votre projet\n` +
                   `- Budget estimé\n` +
                   `- Délai souhaité`;
    
    window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
}

// Scroll animations
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(0, 0, 0, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.9)';
        header.style.backdropFilter = 'none';
    }
});

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    console.log('718 Digital site loaded');
    
    // Set current year in footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
