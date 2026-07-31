import styled from 'styled-components';

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const Chip = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 20px;
  gap: 12px;
  height: 31px;
  background: ${(props) => (props.selected ? '#F1EBFD' : '#F4F5F6')};
  border: none;
  border-radius: 30px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: ${(props) => (props.selected ? '#7334EA' : '#000000')};
  cursor: pointer;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: ${(props) => (props.selected ? '#F1EBFD' : '#F1EBFD')};
    color: ${(props) => (props.selected ? '#7334EA' : '#000000')};
  }

  span:first-child {
    width: 14px;
    height: 14px;
  }
`;
