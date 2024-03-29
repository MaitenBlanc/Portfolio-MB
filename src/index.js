import 'bootstrap-icons/font/bootstrap-icons.css';
import i18next from "i18next";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from "react-i18next";
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

import global_en from './lang/en/global.json';
import global_es from './lang/es/global.json';

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
