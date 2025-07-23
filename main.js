// Simple script for basic tab switching
document.addEventListener('DOMContentLoaded', () => {
    const tabItems = document.querySelectorAll('.dashboard li');
    const tabContents = document.querySelectorAll('.tab-content');

    tabItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all items and contents
            tabItems.forEach(i => i.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Add active class to the clicked item and corresponding content
            item.classList.add('active');
            const targetTab = item.getAttribute('data-tab');
            document.getElementById(targetTab).classList.add('active');
        });
    });
});
