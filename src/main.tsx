import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthProvider } from './Context/auth'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <GlobalStyle />
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
