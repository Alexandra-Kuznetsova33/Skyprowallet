import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  width: 100%;
  min-height: 15px;
  transition: background 0.2s;
  background: ${(props) => (props.$isHovered ? '#F4F0FF' : 'transparent')};
`;

export const Cell = styled.div`
  width: ${(props) => props.width || 'auto'};
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const DeleteIcon = styled.button`
  width: 12px;
  height: 12px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.$isHovered ? 1 : 0.5)};
  transition: opacity 0.2s;
  color: #999999;
    &:hover {
    color: #7334ea;
  }

  svg {
    width: 12px;
    height: 12px;
    fill: currentColor;
  }
`;
