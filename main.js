// Simple script for basic tab switching
document.addEventListener('DOMContentLoaded', () => {
    const tabItems = document.querySelectorAll('.dashboard li');
    const tabContents = document.querySelectorAll('.tab-content');
    const storageAmountInput = document.getElementById('storageAmount');

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

    // Add event listener for storageAmountInput if it exists
    if (storageAmountInput) {
        storageAmountInput.addEventListener('input', () => {
            // Calculator logic goes here
            const storageAmount = storageAmountInput.value;
            const costDisplay = document.getElementById('costDisplay');
            // Assuming a simple cost calculation, e.g., $0.023 per GB
            const estimatedCost = storageAmount * 0.023;
            costDisplay.textContent = `$${estimatedCost.toFixed(2)}`;
        });
    }
});
