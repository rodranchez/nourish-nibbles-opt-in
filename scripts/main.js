document.addEventListener('DOMContentLoaded', () => {
    // Accordion functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const answer = header.nextElementSibling;
            const icon = header.querySelector('.accordion-icon svg');
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
            icon.style.transform = answer.style.display === 'block' ? 'rotate(180deg)' : 'rotate(0deg)';
        });
    });

    // Pop-up functionality
    const ctaButtons = document.querySelectorAll('.cta-button');
    const popup = document.getElementById('popup');
    const popupOverlay = document.getElementById('popup-overlay');
    const popupForm = document.getElementById('popup-form');
    const closeButton = document.querySelector('.popup-close');

    // Show pop-up when any CTA button is clicked
    ctaButtons.forEach(button => {
        button.addEventListener('click', () => {
            popup.classList.add('active');
            popupOverlay.classList.add('active');
        });
    });

    // Close pop-up when overlay is clicked
    popupOverlay.addEventListener('click', () => {
        popup.classList.remove('active');
        popupOverlay.classList.remove('active');
    });

    // Close pop-up when close button is clicked
    closeButton.addEventListener('click', () => {
        popup.classList.remove('active');
        popupOverlay.classList.remove('active');
    });

    // Handle form submission
    popupForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission
        const name = popupForm.querySelector('input[type="text"]').value;
        const email = popupForm.querySelector('input[type="email"]').value;
        console.log('Form submitted:', { name, email }); // Log form data
        // Add your form submission logic here (e.g., send to server)
        popup.classList.remove('active'); // Close pop-up
        popupOverlay.classList.remove('active');
    });
});