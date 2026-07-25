import { useState, useEffect, useCallback } from 'react';
import { ExpensesContext } from './ExpensesContext';

const generateId = () => crypto.randomUUID();

export function ExpensesProvider({ children }) {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem('expenses');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = useCallback((expense) => {
    setExpenses(prev => [{ id: generateId(), ...expense }, ...prev]);
  }, []);

  const deleteExpense = useCallback((id) => {
    setExpenses(prev => prev.filter(e => e.id !== id));
  }, []);

  return (
    <ExpensesContext.Provider value={{ expenses, addExpense, deleteExpense }}>
      {children}
    </ExpensesContext.Provider>
  );
}
