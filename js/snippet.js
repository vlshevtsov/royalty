export const code = {
  campaign_id: 86,
  valid_from: '2024-05-23',
  valid_until: '2024-06-23',
  affiliate_royalty: 0.1,
  base_profit: 1,
  tp_affiliate_ratio: 0.5,
  referral: false,
  comment: 'Правило для акции Tiqets'
};

export function updateCode(newValues) {
  Object.assign(code, newValues);
  const codeElement = document.querySelector('#code');
  codeElement.innerHTML = Object.entries(code)
    .map(([key, value]) => {
      if (typeof value === 'string') {
        value = `'${value}'`;
      }
      return `<span class="d-block ps-3">${key}: ${value},</span>`;
    })
    .join('');
}

export function setupCopyButton() {
  const mainContainer = document.getElementById('main');
  const codeConfig = document.getElementById('code-wrapper');
  const handleCopyClick = document.getElementById('copy_btn');

  handleCopyClick.addEventListener('click', () => {
    const spans = codeConfig.querySelectorAll('span');
    let codeText = '';
    spans.forEach(span => {
      codeText += span.innerText + '\n';
    });
    navigator.clipboard.writeText(codeText.trim())
      .then(() => {
        const alertWrapper = document.createElement('div');
        alertWrapper.className = 'alert alert-success m-3 position-fixed bottom-0 end-0';
        alertWrapper.role = 'alert';
        alertWrapper.textContent = 'Copied!';
        mainContainer.appendChild(alertWrapper);

        setTimeout(() => {
          alertWrapper.remove();
        }, 3000);
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  });
}
