import { StyledInput } from './Input.styled';

export default function Input({ isValid, ...props }) {
  return <StyledInput isValid={isValid} {...props} />;
}
