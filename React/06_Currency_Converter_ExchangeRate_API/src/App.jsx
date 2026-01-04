import { useState,useEffect } from "react"


function App() {
  const [amount, setAmount] = useState(1)
  const [fromCurrency, setFromCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('EUR')
  const [exchangeRate, setExchangeRate] = useState(null)
  const [convertedAmount, setConvertedAmount] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchExchangeRate() {
      setLoading(true)
      setError(null)
      try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/c33eeee214c1b95dbad1cd24/latest/${fromCurrency}`)
        if (!response.ok) {
          throw new Error('Failed to fetch exchange rate')
        }
        const data = await response.json()
        const rate = data.conversion_rates[toCurrency]
        console.log(rate);
        
        console.log(data);
        
        setExchangeRate(data.conversion_rates)
        setConvertedAmount((amount * rate).toFixed(2))
        setLoading(false)
      } catch (error) {
        setError(error.message)
        setLoading(false)
      }
    }

    fetchExchangeRate()
  }, [amount, fromCurrency, toCurrency])

  function handleAmountChange(e) {
    setAmount(e.target.value)
  }

  function handleFromCurrencyChange(e) {
    setFromCurrency(e.target.value)
  }

  function handleToCurrencyChange(e) {
    setToCurrency(e.target.value)
  }
  const currencyOptions = Object.keys(exchangeRate || {})
  console.log(currencyOptions);
  
  return (
    <>
      <div>
        <h1>Currency Converter</h1>
        <div>
          <input type="number" value={amount} onChange={handleAmountChange} />
          <select value={fromCurrency} onChange={handleFromCurrencyChange}>
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
          <span>to</span>
          <select value={toCurrency} onChange={handleToCurrencyChange}>
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          convertedAmount && (
            <p>
              {amount} {fromCurrency} = {convertedAmount} {toCurrency}
            </p>
          )
        )}
      </div>
    </>
  )
}

export default App
