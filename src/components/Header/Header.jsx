import { useAuth } from '../../hooks/useAuth';
import Navigation from '../Navigation/Navigation';
import { HeaderWrapper, Logo, CenterNav, ExitButton } from './Header.styled';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  if (!isAuthenticated) return null;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <HeaderWrapper>
      <Logo>
        <Link to="/">
          <img src="./images/Logo.png" alt="logo" />
        </Link>
      </Logo>
      <CenterNav>
        <Navigation />
      </CenterNav>
      <ExitButton onClick={handleLogout}>Выйти</ExitButton>
    </HeaderWrapper>
  );
}
