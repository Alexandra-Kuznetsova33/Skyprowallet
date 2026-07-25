import { StyledButton } from './Button.styled';

export default function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}
