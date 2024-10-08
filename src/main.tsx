import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <div className="bg-cream min-h-screen">
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </div>
    </React.StrictMode>,
);
