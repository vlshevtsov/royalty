import { getBrands } from './brands.js';
import { initializeCommissionCalculations } from './calc.js';
import { updateCode, setupCopyButton } from './snippet.js';

document.addEventListener('DOMContentLoaded', () => {
  getBrands((brandId) => {
    updateCode({ campaign_id: Number(brandId) });
  });
  initializeCommissionCalculations();
  setupCopyButton();
});
