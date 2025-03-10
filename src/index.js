import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from './components/Layouts';
import About from './pages/About';
import Category from './pages/Category';
import Community from './pages/Community';
import Faq from './pages/Faq';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <MainLayout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/category' element={<Category/>}/>
          <Route path='/community' element={<Community/>}/>
          <Route path='/faq' element={<Faq/>}/>
        </Routes>
      </MainLayout>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
