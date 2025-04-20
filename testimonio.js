// JavaScript para el carrusel de testimonios
document.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelectorAll('.testimonial-card');
    const dotsContainer = document.querySelector('.testimonial-dots');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    let currentIndex = 0;
    
    // Crear puntos indicadores
    testimonials.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.dataset.index = index;
        dotsContainer.appendChild(dot);
        
        dot.addEventListener('click', () => {
            goToTestimonial(index);
        });
    });
    
    const dots = document.querySelectorAll('.dot');
    dots[0].classList.add('active');
    
    function updateTestimonials() {
        testimonials.forEach((testimonial, index) => {
            testimonial.style.display = index === currentIndex ? 'block' : 'none';
        });
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    function goToTestimonial(index) {
        currentIndex = index;
        updateTestimonials();
    }
    
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateTestimonials();
    });
    
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        updateTestimonials();
    });
    
    // Auto-rotación cada 5 segundos
    setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateTestimonials();
    }, 5000);
    
    // Inicializar
    updateTestimonials();
});