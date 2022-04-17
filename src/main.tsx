import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthProvider } from './Context/auth'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { AdSenseProvider } from './Context/adsense'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AdSenseProvider>
        <AuthProvider>
          <GlobalStyle />
          <App />
        </AuthProvider>
      </AdSenseProvider>
    </BrowserRouter>
  </React.StrictMode>
)
