let Currency = document.getElementById("Currency");
function getExchangeRate()
{
    let selectedCurrency = document.getElementById("Currency").value;
    let exchangerates = {
        "USD": 39.35,
        "EUR": 42.76,
        "JPY": 0.25,
        "GBP": 49.80,
        "CNY": 5.45
    };

    let result = document.getElementById("result");
    result.value = exchangerates[selectedCurrency] + " грн";
}

Currency.addEventListener('change', getExchangeRate);