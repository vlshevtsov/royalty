export function initializeCommissionCalculations() {
  let newBaseProfitNow = 0;
  const calculateCommission = (event) => {
    const container = event.target.closest('.container');
    const section = container.dataset.section;
    
    const ttlComissionInput = document.getElementById(`ttl-comission_${section}`);
    const afltComissionInput = document.getElementById(`aflt-comission_${section}`);
    const tpComissionInput = document.getElementById(`tp-comission_${section}`);
    const oldAfltRoyaltyInput = document.getElementById(`old-aflt-royalty_${section}`);
    const oldBaseProfitInput = document.getElementById(`old-base-profit_${section}`);
    const oldTpAfltRatioInput = document.getElementById(`old-tp-aflt-ratio_${section}`);
    const newAfltRoyaltyInput = document.getElementById(`new-aflt-royalty_${section}`);
    const newBaseProfitInput = document.getElementById(`new-base-profit_${section}`);
    const newTpAfltRatioInput = document.getElementById(`new-tp-aflt-ratio_${section}`);

    const ttlComission = parseFloat(ttlComissionInput.value) || 0;
    const afltComission = parseFloat(afltComissionInput.value) || 0;
    const tpComission = ttlComission - afltComission;
    const oldAfltRoyalty = afltComission / ttlComission;
    const oldTpAfltRatio = (1 / oldAfltRoyalty) - 1;
    const oldBaseProfit = 1
    const newAfltRoyalty = afltComission / 100;
    const newTpAfltRatio = tpComission / afltComission;
    const newBaseProfit = (afltComission * (1 + newTpAfltRatio)) / 100;

    if (ttlComission && afltComission) {
      tpComissionInput.value = tpComission >= 0 ? tpComission.toFixed(4) : 0;

      if (section != 'tpside') {
        oldAfltRoyaltyInput.value = oldAfltRoyalty.toFixed(4);
        oldTpAfltRatioInput.value = oldTpAfltRatio.toFixed(4);
        oldBaseProfitInput.value = oldBaseProfit;
      };

      newAfltRoyaltyInput.value = newAfltRoyalty.toFixed(4);
      newBaseProfitInput.value = (section == 'tpside') ? newBaseProfitNow.toFixed(4) : newBaseProfit.toFixed(4);
      newTpAfltRatioInput.value = newTpAfltRatio.toFixed(4);

      if (section == 'now') {
        newBaseProfitNow = newBaseProfit;
      };
    }
  };

  document.addEventListener('input', event => {
    if (event.target.matches('[id^="ttl-comission"], [id^="aflt-comission"]')) {
      calculateCommission(event);
    }
  });
}
