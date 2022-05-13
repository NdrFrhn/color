import React from 'react';
import ReactDOMClient from 'react-dom/client';
import Colors from './components/Colors'
import App from './App.css';


const root = document.getElementById('root');
ReactDOMClient.createRoot(root).render(<Colors/>)


