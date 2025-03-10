import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from "./App";
import { BrowserRouter } from 'react-router';
createRoot(document.getElementById('root')).render(React.createElement(StrictMode, null,
    React.createElement(BrowserRouter, null,
        React.createElement(App, null))));
