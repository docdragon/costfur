// Add your JavaScript here

document.addEventListener('DOMContentLoaded', function() {
  const materialCostInput = document.getElementById('material-cost');
  const laborCostInput = document.getElementById('labor-cost');
  const overheadCostInput = document.getElementById('overhead-cost');
  const totalCostElement = document.getElementById('total-cost');

  function calculateTotalCost() {
    const materialCost = parseFloat(materialCostInput.value) || 0;
    const laborCost = parseFloat(laborCostInput.value) || 0;
    const overheadCost = parseFloat(overheadCostInput.value) || 0;

    const totalCost = materialCost + laborCost + overheadCost;
    totalCostElement.textContent = totalCost.toFixed(2);
  }

  // Add event listeners for input changes
  materialCostInput.addEventListener('input', calculateTotalCost);
  laborCostInput.addEventListener('input', calculateTotalCost);
  overheadCostInput.addEventListener('input', calculateTotalCost);

  // Initial calculation on page load
  calculateTotalCost();
});
