(function () {
  var bikeButtons = document.querySelectorAll('.bike-row');
  var minsRange = document.getElementById('minsRange');
  var minsLabel = document.getElementById('minsLabel');
  var priceLabel = document.getElementById('priceLabel');
  var selectedPrice = 15;

  function updatePrice() {
    var mins = parseInt(minsRange.value, 10);
    minsLabel.textContent = mins + ' хв';
    var blocks = Math.ceil(mins / 30);
    var total = blocks * selectedPrice;
    priceLabel.textContent = total + ' ₴';
  }

  bikeButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      bikeButtons.forEach(function (b) {
        b.classList.remove('selected');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('selected');
      btn.setAttribute('aria-pressed', 'true');
      selectedPrice = parseInt(btn.getAttribute('data-price'), 10);
      updatePrice();
    });
  });

  minsRange.addEventListener('input', updatePrice);
  updatePrice();
})();
