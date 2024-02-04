import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MenuBarProvider from "./context/SidebarContext";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MenuBarProvider>
      <App />
    </MenuBarProvider>
  </React.StrictMode>
);

