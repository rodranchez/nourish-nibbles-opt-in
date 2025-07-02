document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const answer = header.nextElementSibling;
            const icon = header.querySelector('.accordion-icon svg');
            // Toggle display of the answer
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
            // Toggle rotation of the icon
            icon.style.transform = answer.style.display === 'block' ? 'rotate(180deg)' : 'rotate(0deg)';
        });
    });
});
