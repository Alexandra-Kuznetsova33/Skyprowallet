import styled from 'styled-components';

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 48px;
`;

export const NavLabel = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-weight: ${props => (props.isActive ? 600 : 400)};
  font-size: 14px;
  line-height: 170%;
  color: ${props => (props.isActive ? '#7334EA' : '#000000')};
  transition: color 0.2s, font-weight 0.2s;
`;

export const Underline = styled.div`
  width: 100%;
  height: 0;
  border: 1px solid #7334ea;
  opacity: 0;
  transition: opacity 0.2s;

  &.active {
    opacity: 1;
  }
`;

export const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;

  &:hover ${NavLabel} {
    color: #7334ea;
    font-weight: 600;
  }
`;
