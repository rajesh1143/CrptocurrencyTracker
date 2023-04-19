import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptoData: []}

  componentDidMount() {
    this.getCryptoData()
  }

  getCryptoData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
    }))

    this.setState({
      cryptoData: updatedData,
    })
  }

  render() {
    const {cryptoData} = this.state

    return (
      <div className="crypto-list-container">
        <h1 className="crypto-heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        <ul className="cryptocurrencies-list-container">
          {cryptoData.map(eachData => (
            <CryptocurrencyItem
              key={eachData.id}
              cryptoDataDetails={eachData}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default CryptocurrenciesList
