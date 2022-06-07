import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import Layout from './components/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<App />} />
            <Route index path='cart' element={<Cart />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
