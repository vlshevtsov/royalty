export function initializeCommissionCalculations() {
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
      tpComissionInput.value = tpComission >= 0 ? tpComission.toFixed(3) : 0;
      oldAfltRoyaltyInput.value = oldAfltRoyalty.toFixed(3);
      oldABaseProfitInput.value = 1;
      oldTpAfltRatioInput.value = oldTpAfltRatio.toFixed(3);
      newAfltRoyaltyInput.value = newAfltRoyalty.toFixed(3);
      newBaseProfitInput.value = newBaseProfit.toFixed(3);
      newTpAfltRatioInput.value = newTpAfltRatio.toFixed(3);
    }
  }

  ttlComissionInput.addEventListener('input', calcCurrentComission);
  afltComissionInput.addEventListener('input', calcCurrentComission);

  const ttlComissionIncInput = document.getElementById('ttl-comission_inc');
  const afltComissionIncInput = document.getElementById('aflt-comission_inc');
  const tpComissionIncInput = document.getElementById('tp-comission_inc');

  const newAfltRoyaltyIncInput = document.getElementById('new-aflt-royalty_inc');
  const newBaseProfitIncInput = document.getElementById('new-base-profit_inc');
  const newTpAfltRatioIncInput = document.getElementById('new-tp-aflt-ratio_inc');

  function calcIncreasedComission() {
    const ttlIncComission = parseFloat(ttlComissionIncInput.value) || 0;
    const afltIncComission = parseFloat(afltComissionIncInput.value) || 0;
    const tpIncComission = ttlIncComission - afltIncComission;
    const newAfltRoyaltyInc = afltIncComission / 100;

    if (ttlIncComission && afltIncComission) {
      tpComissionIncInput.value = tpIncComission >= 0 ? tpIncComission.toFixed(3) : 0;
      newAfltRoyaltyIncInput.value = newAfltRoyaltyInc.toFixed(3);
      newBaseProfitIncInput.value = newBaseProfitInput.value;
      newTpAfltRatioIncInput.value = tpIncComission / afltIncComission;
    }
  }

  ttlComissionIncInput.addEventListener('input', calcIncreasedComission);
  afltComissionIncInput.addEventListener('input', calcIncreasedComission);
}
