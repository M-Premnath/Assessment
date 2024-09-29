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
  const startupMonthlyPrice = 240 + (sliderValue / 10) * (3416 - 240); // Increase by $80 per step
  const startupAnnuallyPrice = 300 + (sliderValue / 10) * (4270 - 300); // Increase by $100 per step
  const startupMAU = 3000 + (sliderValue / 10) * (300000 - 3000); // Increase by 1,000 MAUs per step

  // Pro Card Calculations (Base: $680, $850, 10,000 MAUs)
  const proMonthlyPrice = 680 + (sliderValue / 10) * (3720 - 680); // Increase by $80 per step
  const proAnnuallyPrice = 850 + (sliderValue / 10) * (4650 - 850); // Increase by $100 per step
  const proMAU = 10000 + (sliderValue / 10) * (300000 - 10000); // Increase by 1,000 MAUs per step

  // Ensure the min and max values are applied correctly
  document.getElementById('startup-monthly-price').textContent = `$${Math.round(startupMonthlyPrice)}`;
  document.getElementById('startup-annually-price-value').textContent = `$${Math.round(startupAnnuallyPrice)}`;
  document.getElementById('startup-mau-value').textContent = `${Math.round(startupMAU)}`;

  document.getElementById('pro-monthly-price').textContent = `$${Math.round(proMonthlyPrice)}`;
  document.getElementById('pro-annually-price-value').textContent = `$${Math.round(proAnnuallyPrice)}`;
  document.getElementById('pro-mau-value').textContent = `${Math.round(proMAU)}`;
}

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('nav');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    navbar.classList.add('shadow-md', 'bg-white');
  } else {
    navbar.classList.remove('shadow-md', 'bg-white');
  }
});