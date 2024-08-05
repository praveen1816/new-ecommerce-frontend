import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ShopContextProvider from './Context/ShopContext.jsx'
import Admin from '../Admin.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ShopContextProvider>
    {/* <App /> */}
    <Admin/>
</ShopContextProvider>
  
)
