import { useLocation, useNavigate } from 'react-router-dom';
import { Nav, NavItem, NavLabel, Underline } from './Navigation.styled';

export default function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Nav>
      <NavItem width="100px" onClick={() => navigate('/expenses')}>
        <NavLabel $isActive={location.pathname === '/expenses'}>
          Мои расходы
        </NavLabel>
        <Underline className={location.pathname === '/expenses' ? 'active' : ''} />
      </NavItem>
      <NavItem width="126px" onClick={() => navigate('/analytics')}>
        <NavLabel $isActive={location.pathname === '/analytics'}>
          Анализ расходов
        </NavLabel>
        <Underline className={location.pathname === '/analytics' ? 'active' : ''} />
      </NavItem>
    </Nav>
  );
}
