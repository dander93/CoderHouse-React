import React from 'react';
import ReactDOM from 'react-dom/client';

import './assets/css/styles.css';
import "bootstrap/dist/css/bootstrap.css"

import App from './components/App/App';
import CategoryContext from './components/Context/CategoryContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <CategoryContext>
            <App />
        </CategoryContext>
    </>
);