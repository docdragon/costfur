// Add your JavaScript here

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('calculate-btn').addEventListener('click', function() {
    // Get input values
    const materialCost = parseFloat(document.getElementById('material-cost').value) || 0;
    const laborCost = parseFloat(document.getElementById('labor-cost').value) || 0;
    const overheadCost = parseFloat(document.getElementById('overhead-cost').value) || 0;

    // Calculate total cost
    const totalCost = materialCost + laborCost + overheadCost;

    // Display result
    document.getElementById('total-cost').textContent = totalCost.toFixed(2);
  });
});
