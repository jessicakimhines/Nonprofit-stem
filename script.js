// Interactive scripts for smooth scrolling, form validation, and dynamic icon initializations
document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 3. Form Submission Handling with Feedback Animation
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = form.querySelector('button');
            const originalText = submitBtn.textContent;
            
            // Visual feedback transition
            submitBtn.disabled = true;
            submitBtn.textContent = 'Submitting...';
            submitBtn.classList.add('opacity-75');

            setTimeout(() => {
                submitBtn.textContent = 'Submitted Successfully! 🎉';
                submitBtn.classList.remove('bg-neonCyan', 'bg-neonYellow', 'opacity-75');
                submitBtn.classList.add('bg-green-500', 'text-white');
                form.reset();

                // Reset button back to normal after 3 seconds
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('bg-green-500', 'text-white');
                    submitBtn.classList.add(form.id === 'contact' ? 'bg-neonCyan' : 'bg-neonYellow');
                }, 3000);
            }, 1000);
        });
    });
});
