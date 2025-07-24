 document.addEventListener('DOMContentLoaded', function() {
            // Mobile Navigation
            const burger = document.querySelector('.burger');
            const navLinks = document.querySelector('.nav-links');
            const navItems = document.querySelectorAll('.nav-links li');
            
            burger.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                burger.classList.toggle('active');
            });
            
            navItems.forEach(item => {
                item.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                    burger.classList.remove('active');
                });
            });
            
            // Sticky Header
            window.addEventListener('scroll', () => {
                const header = document.querySelector('header');
                header.classList.toggle('scrolled', window.scrollY > 0);
                
                // Back to Top Button
                const backToTop = document.querySelector('.back-to-top');
                backToTop.classList.toggle('active', window.scrollY > 300);
            });
            
            // Smooth Scrolling for Anchor Links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // Portfolio Filter
            const filterBtns = document.querySelectorAll('.filter-btn');
            const portfolioItems = document.querySelectorAll('.portfolio-item');
            
            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Remove active class from all buttons
                    filterBtns.forEach(btn => btn.classList.remove('active'));
                    
                    // Add active class to clicked button
                    btn.classList.add('active');
                    
                    const filter = btn.getAttribute('data-filter');
                    
                    portfolioItems.forEach(item => {
                        if (filter === 'all' || item.getAttribute('data-category') === filter) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                });
            });
            
            // Testimonial Slider
            const testimonialSlides = document.querySelectorAll('.testimonial-slide');
            const prevBtn = document.querySelector('.prev-btn');
            const nextBtn = document.querySelector('.next-btn');
            let currentSlide = 0;
            
            function showSlide(index) {
                testimonialSlides.forEach(slide => slide.classList.remove('active'));
                testimonialSlides[index].classList.add('active');
            }
            
            function nextSlide() {
                currentSlide = (currentSlide + 1) % testimonialSlides.length;
                showSlide(currentSlide);
            }
            
            function prevSlide() {
                currentSlide = (currentSlide - 1 + testimonialSlides.length) % testimonialSlides.length;
                showSlide(currentSlide);
            }
            
            nextBtn.addEventListener('click', nextSlide);
            prevBtn.addEventListener('click', prevSlide);
            
            // Auto slide change every 5 seconds
            setInterval(nextSlide, 5000);
            
            // Form Submission
            const contactForm = document.getElementById('contactForm');
            
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form values
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const subject = document.getElementById('subject').value;
                const message = document.getElementById('message').value;
                
                // Here you would typically send the form data to a server
                // For this example, we'll just log it and show an alert
                console.log({ name, email, subject, message });
                
                alert('Thank you for your message, Romanus will get back to you soon.');
                contactForm.reset();
            });
            
            // Set current year in footer
            document.getElementById('year').textContent = new Date().getFullYear();
            
            // Animate elements on scroll
            const animateOnScroll = function() {
                const elements = document.querySelectorAll('.about-content, .services-grid, .portfolio-grid, .contact-content');
                
                elements.forEach(element => {
                    const elementPosition = element.getBoundingClientRect().top;
                    const windowHeight = window.innerHeight;
                    
                    if (elementPosition < windowHeight - 100) {
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                    }
                });
            };
            
            // Set initial state for animation
            const animateElements = document.querySelectorAll('.about-content, .services-grid, .portfolio-grid, .contact-content');
            animateElements.forEach(element => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(50px)';
                element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            });
            
            window.addEventListener('scroll', animateOnScroll);
            window.addEventListener('load', animateOnScroll);
        });