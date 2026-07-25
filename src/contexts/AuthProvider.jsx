import { useState, useCallback } from 'react';
import { AuthContext } from './AuthContext';

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return !!localStorage.getItem('token');
  });

  const [user, setUser] = useState(() => {
    const token = localStorage.getItem('token');
    return token ? { token } : null;
  });

  const login = useCallback((email, password) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const found = users.find(u => u.email === email && u.password === password);
    if (found) {
      localStorage.setItem('token', email);
      setUser({ token: email });
      setIsAuthenticated(true);
      return true;
    }
    return false;
  }, []);

  const register = useCallback((name, email, password) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find(u => u.email === email)) return false;
    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('token');
    setUser(null);
    setIsAuthenticated(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
