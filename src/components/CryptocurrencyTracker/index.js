import CryptocurrenciesList from '../CryptocurrenciesList'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CrytocurrencyTracker = () => (
  <div className="cryptocurrency-container">
    <CryptocurrenciesList />
    <CryptocurrencyItem />
  </div>
)
export default CrytocurrencyTracker
