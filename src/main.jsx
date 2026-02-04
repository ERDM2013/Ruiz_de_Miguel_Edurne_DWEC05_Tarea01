// Este es el archivo que hace de puente, entre React y el HTML, el que renderiza App.jsx


import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css' // para darle estilo

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)