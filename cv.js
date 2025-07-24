 // Add simple animations when elements come into view
        document.addEventListener('DOMContentLoaded', function() {
            // Animate progress bars
            const progressBars = document.querySelectorAll('.skill-progress');
            
            // Intersection Observer for animations
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Animate progress bars
                        progressBars.forEach(bar => {
                            const width = bar.parentElement.previousElementSibling.querySelector('span:last-child').textContent;
                            bar.style.width = width;
                        });
                        
                        // Animate timeline items
                        const timelineItems = document.querySelectorAll('.timeline-item');
                        timelineItems.forEach((item, index) => {
                            setTimeout(() => {
                                item.style.opacity = "1";
                                item.style.transform = "translateY(0)";
                            }, index * 200);
                        });
                    }
                });
            }, { threshold: 0.1 });
            
            // Observe sections
            document.querySelectorAll('.section').forEach(section => {
                observer.observe(section);
            });
            
            // Set initial state for animations
            progressBars.forEach(bar => {
                bar.style.width = '0';
            });
            
            const timelineItems = document.querySelectorAll('.timeline-item');
            timelineItems.forEach(item => {
                item.style.opacity = "0";
                item.style.transform = "translateY(20px)";
                item.style.transition = "opacity 0.5s ease, transform 0.5s ease";
            });
        });