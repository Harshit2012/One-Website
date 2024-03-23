async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
  
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
    const data = await response.json();
    const rate = data.rates[toCurrency];
    const convertedAmount = amount * rate;
  
    document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
  }
  
  async function populateCurrencies() {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const data = await response.json();
    const currencies = Object.keys(data.rates);
  
    const fromCurrencySelect = document.getElementById('fromCurrency');
    const toCurrencySelect = document.getElementById('toCurrency');
  
    currencies.forEach(currency => {
      const option = document.createElement('option');
      option.value = currency;
      option.innerText = currency;
      fromCurrencySelect.appendChild(option);
  
      const option2 = document.createElement('option');
      option2.value = currency;
      option2.innerText = currency;
      toCurrencySelect.appendChild(option2);
    });
  }
  
populateCurrencies();  