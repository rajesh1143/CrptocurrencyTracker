const CryptocurrencyItem = props => {
  const {cryptoDataDetails} = props
  const {usdValue, euroValue, currencyName, currencyLogo} = cryptoDataDetails

  return (
    <li>
      <div className="logo-name-container">
        <img className="currency-logo" src={currencyLogo} alt={currencyName} />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="currency-value-container">
        <p className="usd-value">{usdValue}</p>
        <p className="euro-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
