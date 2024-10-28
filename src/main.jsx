import { BrowserRouter as Router } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CoinProvider } from './context/coinContext.jsx'


createRoot(document.getElementById('root')).render(
    <Router>
      <CoinProvider>
      <App />
      </CoinProvider>
    </Router>
)
