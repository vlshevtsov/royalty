export function initializeCommissionCalculations() {
  /* как работает сейчас */
  const ttlComissionInput = document.getElementById('ttl-comission');
  const afltComissionInput = document.getElementById('aflt-comission');
  const tpComissionInput = document.getElementById('tp-comission');

  const oldAfltRoyaltyInput = document.getElementById('old-aflt-royalty');
  const oldABaseProfitInput = document.getElementById('old-base-profit');
  const oldTpAfltRatioInput = document.getElementById('old-tp-aflt-ratio');

  const newAfltRoyaltyInput = document.getElementById('new-aflt-royalty');
  const newBaseProfitInput = document.getElementById('new-base-profit');
  const newTpAfltRatioInput = document.getElementById('new-tp-aflt-ratio');

  function calcCurrentComission() {
    const ttlComission = parseFloat(ttlComissionInput.value) || 0;
    const afltComission = parseFloat(afltComissionInput.value) || 0;
    const tpComission = ttlComission - afltComission;
    const oldAfltRoyalty = afltComission / ttlComission;
    const oldTpAfltRatio = (1 / oldAfltRoyalty) - 1;
    const newAfltRoyalty = afltComission / 100;
    const newTpAfltRatio = tpComission / afltComission;
    const newBaseProfit = (afltComission * (1 + newTpAfltRatio)) / 100;

    if (ttlComission && afltComission) {
      tpComissionInput.value = tpComission >= 0 ? tpComission.toFixed(4) : 0;
      oldAfltRoyaltyInput.value = oldAfltRoyalty.toFixed(4);
      oldABaseProfitInput.value = 1;
      oldTpAfltRatioInput.value = oldTpAfltRatio.toFixed(4);
      newAfltRoyaltyInput.value = newAfltRoyalty.toFixed(4);
      newBaseProfitInput.value = newBaseProfit.toFixed(4);
      newTpAfltRatioInput.value = newTpAfltRatio.toFixed(4);
    }
  };

  ttlComissionInput.addEventListener('input', calcCurrentComission);
  afltComissionInput.addEventListener('input', calcCurrentComission);

  /* повышка на стороне тп */
  const ttlComissionIncInput = document.getElementById('ttl-comission_inc');
  const afltComissionIncInput = document.getElementById('aflt-comission_inc');
  const tpComissionIncInput = document.getElementById('tp-comission_inc');

  const newAfltRoyaltyIncInput = document.getElementById('new-aflt-royalty_inc');
  const newBaseProfitIncInput = document.getElementById('new-base-profit_inc');
  const newTpAfltRatioIncInput = document.getElementById('new-tp-aflt-ratio_inc');

  function calcIncreasedComissionTp() {
    const ttlIncComission = parseFloat(ttlComissionIncInput.value) || 0;
    const afltIncComission = parseFloat(afltComissionIncInput.value) || 0;
    const tpIncComission = ttlIncComission - afltIncComission;
    const newAfltRoyaltyInc = afltIncComission / 100;

    if (ttlIncComission && afltIncComission) {
      tpComissionIncInput.value = tpIncComission >= 0 ? tpIncComission.toFixed(4) : 0;
      newAfltRoyaltyIncInput.value = newAfltRoyaltyInc.toFixed(4);
      newBaseProfitIncInput.value = newBaseProfitInput.value;
      newTpAfltRatioIncInput.value = (tpIncComission / afltIncComission).toFixed(4);
    }
  };

  ttlComissionIncInput.addEventListener('input', calcIncreasedComissionTp);
  afltComissionIncInput.addEventListener('input', calcIncreasedComissionTp);

  /* повышка на стороне бренда */
  const ttlComissionBrandIncInput = document.getElementById('ttl-comission-brand_inc');
  const afltComissionBrandIncInput = document.getElementById('aflt-comission-brand_inc');
  const tpComissionIncBrandInput = document.getElementById('tp-comission-brand_inc');

  const oldAfltRoyaltyBrandInput = document.getElementById('old-aflt-royalty-brand_inc');
  const oldBaseProfitBrandInput = document.getElementById('old-base-profit-brand_inc');
  const oldTpAfltRatioBrandInput = document.getElementById('old-tp-aflt-ratio-brand_inc');

  const newAfltRoyaltyBrandInput = document.getElementById('new-aflt-royalty-brand_inc');
  const newBaseProfitBrandInput = document.getElementById('new-base-profit-brand_inc');
  const newTpAfltRatioBrandInput = document.getElementById('new-tp-aflt-ratio-brand_inc');

  function calcIncreasedComissionBrand() {
    const ttlComissionBrandInc = parseFloat(ttlComissionBrandIncInput.value) || 0;
    const afltComissionBrandInc = parseFloat(afltComissionBrandIncInput.value) || 0;
    const tpComissionIncBrand = ttlComissionBrandInc - afltComissionBrandInc;
    const oldAfltRoyaltyBrand = afltComissionBrandInc / ttlComissionBrandInc;
    const oldTpAfltRatioBrand = (1 / oldAfltRoyaltyBrand) - 1;
    const newTpAfltRatioBrand = tpComissionIncBrand / afltComissionBrandInc;

    if (ttlComissionBrandInc && afltComissionBrandInc) {
      tpComissionIncBrandInput.value = tpComissionIncBrand >= 0 ? tpComissionIncBrand.toFixed(4) : 0;
      oldAfltRoyaltyBrandInput.value = oldAfltRoyaltyBrand.toFixed(4);
      oldBaseProfitBrandInput.value = 1;
      oldTpAfltRatioBrandInput.value = oldTpAfltRatioBrand.toFixed(4);
      newAfltRoyaltyBrandInput.value = (afltComissionBrandInc / 100).toFixed(4);
      newTpAfltRatioBrandInput.value = newTpAfltRatioBrand.toFixed(4);
      newBaseProfitBrandInput.value = (afltComissionBrandInc * (1 + newTpAfltRatioBrand)) / 100;
    }
  };

  ttlComissionBrandIncInput.addEventListener('input', calcIncreasedComissionBrand);
  afltComissionBrandIncInput.addEventListener('input', calcIncreasedComissionBrand);
}
