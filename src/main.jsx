import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthProvider';
import { ExpensesProvider } from './contexts/ExpensesProvider';
import App from './App';
import './App.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ExpensesProvider>
          <App />
        </ExpensesProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
