import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux';
import { store } from './Store/Store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    
    <Provider store={store}>

      <GoogleOAuthProvider>

      <App />

      </GoogleOAuthProvider>

   
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
