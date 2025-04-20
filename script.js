// JavaScript para el efecto de scroll
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.main-header');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    // Efecto de scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });
    
    // Menú móvil
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        mobileMenuBtn.innerHTML = navMenu.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // Cerrar menú al hacer clic en enlace
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
});


 // Slider de testimonios
 document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.testimonials-slider');
    const cards = document.querySelectorAll('.testimonial-card');
    const dotsContainer = document.querySelector('.slider-dots');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    
    let currentIndex = 0;
    
    // Crear puntos indicadores
    cards.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.classList.add('slider-dot');
        dot.setAttribute('data-index', index);
        dotsContainer.appendChild(dot);
        
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
    });
    
    const dots = document.querySelectorAll('.slider-dot');
    dots[0].classList.add('active');
    
    function updateSlider() {
        slider.scrollTo({
            left: currentIndex * slider.offsetWidth,
            behavior: 'smooth'
        });
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
    }
    
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % cards.length;
        updateSlider();
    });
    
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateSlider();
    });
    
    // Estilo para puntos activos
    const style = document.createElement('style');
    style.textContent = `
        .slider-dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            border: none;
            background: #e0d0f5;
            cursor: pointer;
            transition: all 0.3s;
        }
        .slider-dot.active {
            background: #6e48aa;
            width: 20px;
            border-radius: 6px;
        }
    `;
    document.head.appendChild(style);
});     





// Funcionalidad de pestañas
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover clase active de todos los botones y contenidos
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Agregar active al botón clickeado
            button.classList.add('active');
            
            // Mostrar el contenido correspondiente
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Guardar versículos
    const saveButtons = document.querySelectorAll('.save-verse');
    
    saveButtons.forEach(button => {
        button.addEventListener('click', function() {
            const verse = this.getAttribute('data-verse');
            // Aquí podrías implementar la lógica para guardar en localStorage
            this.innerHTML = '<i class="fas fa-check"></i> Guardado';
            this.style.background = '#e0f5e0';
            this.style.color = '#2e7d32';
            this.style.borderColor = '#c8e6c9';
            
            setTimeout(() => {
                this.innerHTML = '<i class="far fa-bookmark"></i> Guardar';
                this.style.background = 'transparent';
                this.style.color = '#6e48aa';
                this.style.borderColor = '#e0d0f5';
            }, 2000);
        });
    });
    
    // Video triggers
    const videoTriggers = document.querySelectorAll('.video-trigger');
    
    videoTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const videoId = this.getAttribute('data-video');
            // Aquí podrías implementar un modal con el video
            alert('Mostrar video: ' + videoId);
        });
    });
});




document.addEventListener('DOMContentLoaded', function() {
    // Filtrado de oradores
    const filterButtons = document.querySelectorAll('.filter-button');
    const speakerCards = document.querySelectorAll('.speaker-card');
    
    // Mostrar todos inicialmente
    speakerCards.forEach(card => {
        if (card.dataset.category === 'pastores' || card.dataset.category === 'psicologos' || card.dataset.category === 'lideres') {
            card.classList.add('active');
        }
    });
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Actualizar botones activos
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            
            // Filtrar oradores
            speakerCards.forEach(card => {
                card.classList.remove('active');
                
                if (filter === 'all' || card.dataset.category === filter) {
                    setTimeout(() => {
                        card.classList.add('active');
                    }, 10);
                }
            });
        });
    });
    
    // Modal de detalles de sesión
    const modal = document.getElementById('sessionModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalSpeaker = document.getElementById('modalSpeaker');
    const modalTime = document.getElementById('modalTime').querySelector('span');
    const modalLocation = document.getElementById('modalLocation').querySelector('span');
    const modalDescription = document.getElementById('modalDescription');
    const modalLearnings = document.getElementById('modalLearnings');
    const closeModal = document.querySelector('.close-modal');
    const detailButtons = document.querySelectorAll('.session-details');
    
    // Datos de las sesiones (podrían venir de una API)
    const sessions = {
        1: {
            title: "Cómo procesar el duelo con esperanza bíblica",
            speaker: "Dr. Juan Martínez",
            time: "Viernes 15 Nov - 4:00 PM",
            location: "Salón Principal",
            description: "Taller práctico donde exploraremos el proceso bíblico del duelo, aprendiendo a transitar el dolor con esperanza y fe. Basado en los Salmos y las enseñanzas de Jesús sobre el sufrimiento.",
            learnings: [
                "Identificar las etapas del duelo desde una perspectiva cristiana",
                "Herramientas prácticas para manejar el dolor emocional",
                "Cómo apoyar a otros que están en duelo",
                "Versículos clave para momentos de dolor"
            ],
            image: "img/oradores/pastor-juan.jpg"
        },
        2: {
            title: "Señales de alerta de depresión en adolescentes",
            speaker: "Dra. Lucía Ramírez",
            time: "Sábado 16 Nov - 10:00 AM",
            location: "Salón de Conferencias A",
            description: "Charla informativa donde la Dra. Ramírez compartirá las señales de alerta que padres y líderes deben conocer, combinando conocimiento psicológico con principios bíblicos.",
            learnings: [
                "Diferenciar entre tristeza normal y depresión clínica",
                "Cómo abordar el tema con adolescentes",
                "Cuándo buscar ayuda profesional",
                "Recursos cristianos para apoyo emocional"
            ],
            image: "img/oradores/dra-lucia.jpg"
        },
        3: {
            title: "De la desesperación al propósito: Mi historia de redención",
            speaker: "Andrés Castro",
            time: "Sábado 16 Nov - 6:30 PM",
            location: "Auditorio Central",
            description: "Testimonio poderoso de transformación, donde Andrés compartirá cómo Cristo lo rescató de las drogas y la depresión, dándole un nuevo propósito.",
            learnings: [
                "Cómo encontrar propósito en el dolor",
                "El poder transformador de la gracia",
                "Superando adicciones con fe",
                "Cómo ser luz para otros en situaciones similares"
            ],
            image: "img/oradores/andres-castro.jpg"
        },
        4: {
            title: "Sanando relaciones familiares heridas",
            speaker: "Lic. David Rojas",
            time: "Domingo 17 Nov - 11:00 AM",
            location: "Salón de Talleres B",
            description: "Taller interactivo donde aprenderemos principios bíblicos para restaurar relaciones rotas, con ejercicios prácticos y tiempo para preguntas.",
            learnings: [
                "Patrones de comunicación saludable",
                "Cómo perdonar ofensas profundas",
                "Establecer límites con amor",
                "Restauración según el modelo de Cristo"
            ],
            image: "img/oradores/david-rojas.jpg"
        }
    };
    
    // Abrir modal
    detailButtons.forEach(button => {
        button.addEventListener('click', function() {
            const sessionId = this.dataset.session;
            const session = sessions[sessionId];
            
            modalTitle.textContent = session.title;
            modalImage.src = session.image;
            modalImage.alt = session.speaker;
            modalSpeaker.textContent = session.speaker;
            modalTime.textContent = session.time;
            modalLocation.textContent = session.location;
            modalDescription.textContent = session.description;
            
            // Limpiar y agregar aprendizajes
            modalLearnings.innerHTML = '';
            session.learnings.forEach(learning => {
                const li = document.createElement('li');
                li.textContent = learning;
                modalLearnings.appendChild(li);
            });
            
            modal.style.display = "block";
            document.body.style.overflow = "hidden";
        });
    });
    
    // Cerrar modal
    closeModal.addEventListener('click', function() {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    });
    
    // Cerrar al hacer clic fuera
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
    
    // Funcionalidad de agendar
    document.querySelector('.add-to-schedule').addEventListener('click', function() {
        alert(`"${modalTitle.textContent}" ha sido agregado a tu agenda personal`);
        // Aquí podrías implementar la lógica para guardar en localStorage
    });
    
    // Funcionalidad de compartir
    document.querySelector('.share-session').addEventListener('click', function() {
        // Aquí podrías implementar la API de compartir o un modal personalizado
        alert(`Compartir información sobre "${modalTitle.textContent}"`);
    });
});





document.addEventListener('DOMContentLoaded', function() {
    // Acordeón de FAQs
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            this.classList.toggle('active');
            const answer = this.nextElementSibling;
            
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
    
    // Formulario de contacto
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simular envío
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            submitButton.disabled = true;
            
            setTimeout(() => {
                submitButton.innerHTML = '<i class="fas fa-check"></i> Enviado';
                alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
                contactForm.reset();
                
                setTimeout(() => {
                    submitButton.innerHTML = originalText;
                    submitButton.disabled = false;
                }, 2000);
            }, 1500);
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    // Validación simple del formulario de newsletter
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            
            if (emailInput.value && emailInput.checkValidity()) {
                // Simular envío
                const submitButton = this.querySelector('button');
                const originalText = submitButton.innerHTML;
                
                submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
                submitButton.disabled = true;
                
                setTimeout(() => {
                    submitButton.innerHTML = '<i class="fas fa-check"></i> ¡Gracias!';
                    emailInput.value = '';
                    
                    setTimeout(() => {
                        submitButton.innerHTML = originalText;
                        submitButton.disabled = false;
                    }, 2000);
                }, 1500);
            }
        });
    }
});