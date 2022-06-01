import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './pages/App';
import{ BrowserRouter} from 'react-router-dom';
import Notfound from './pages/Notfound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App /><Notfound/>
    </BrowserRouter>
   
  </React.StrictMode>
);


