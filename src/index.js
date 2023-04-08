import React from 'react'
import ReactDom from 'react-dom/client'
import App from './routes/App'
/* import './style/global.css' */

const app = ReactDom.createRoot(document.getElementById('app'))
app.render(<App />)