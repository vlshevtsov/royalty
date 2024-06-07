export function getBrands(callback) {
  fetch('./brands.json')
    .then(response => response.json())
    .then(data => {
      const brandSelect = document.getElementById('brands');
      data.forEach(brand => {
        let opt = document.createElement("option");
        opt.value = brand.id;
        opt.textContent = brand.name;
        brandSelect.appendChild(opt);
      });

      if (data.length > 0 && callback) {
        callback(data[0].id);
      }

      brandSelect.addEventListener('change', event => {
        const selectedBrandId = event.target.value;
        if (callback) {
          callback(selectedBrandId);
        }
      });
    });
}