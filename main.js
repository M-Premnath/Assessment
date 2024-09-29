document.getElementById('pricing__startup-slider').addEventListener('input', function() {
  const sliderValue = this.value;
  updateValues(sliderValue);
  document.getElementById('pricing__pro-slider').value = sliderValue;
});

document.getElementById('pricing__pro-slider').addEventListener('input', function() {
  const sliderValue = this.value;
  updateValues(sliderValue);
  document.getElementById('pricing__startup-slider').value = sliderValue;
});

function updateValues(sliderValue) {
  // Startup Card Calculations (Base: $240, $300, 3,000 MAUs)
  const startupMonthlyPrice = 240 + sliderValue * 80; // Increase by $80 per step
  const startupAnnuallyPrice = 300 + sliderValue * 100; // Increase by $100 per step
  const startupMAU = 3000 + sliderValue * 1000; // Increase by 1,000 MAUs per step

  // Pro Card Calculations (Base: $680, $850, 10,000 MAUs)
  const proMonthlyPrice = 680 + sliderValue * 80; // Increase by $80 per step
  const proAnnuallyPrice = 850 + sliderValue * 100; // Increase by $100 per step
  const proMAU = 10000 + sliderValue * 1000; // Increase by 1,000 MAUs per step

  // Ensure the min and max values are applied correctly
  document.getElementById('startup-monthly-price').textContent = `$${startupMonthlyPrice}`;
  document.getElementById('startup-annually-price-value').textContent = `$${startupAnnuallyPrice}`;
  document.getElementById('startup-mau-value').textContent = `${startupMAU}`;

  document.getElementById('pro-monthly-price').textContent = `$${Math.round(proMonthlyPrice)}`;
  document.getElementById('pro-annually-price-value').textContent = `$${Math.round(proAnnuallyPrice)}`;
  document.getElementById('pro-mau-value').textContent = `${proMAU}`;
}