import React from 'react';
import ReactDOMClient from 'react-dom/client';
import ColorUpgrade from './components/ColorUpgrade'
import App from './App.css';


const root = document.getElementById('root');
ReactDOMClient.createRoot(root).render(<ColorUpgrade/>)


