import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthProvider';
import { ExpensesProvider } from './contexts/ExpensesProvider';
import App from './App';
import './App.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/Skyprowallet"
  future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AuthProvider>
        <ExpensesProvider>
          <App />
        </ExpensesProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
