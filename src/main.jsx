import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store/store.js';
import { Provider } from 'react-redux';
import { AlertProvider } from './context/AlertContext.jsx';
import { ScrollProvider } from './context/ScrollContext.jsx';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
