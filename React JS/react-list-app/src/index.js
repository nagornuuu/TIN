import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Pobiera element DOM o identyfikatorze 'root'
const root = document.getElementById('root');

// Dodatkowo, używa React.StrictMode, co pomaga w wykrywaniu potencjalnych problemów
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    root
);
