import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import {
  Background,
  Card,
  Form,
  Title,
  InputField,
  SubmitButton,
  LinkContainer,
  UnderlinedLink,
  ErrorMessage,
} from './LoginPage.styled';

export default function LoginPage() {
  const [fieldValues, setFieldValues] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: false, password: false });
  const [showError, setShowError] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {
      email: !/^\S+@\S+\.\S+$/.test(fieldValues.email),
      password: fieldValues.password.trim().length === 0,
    };
    setErrors(newErrors);
    const hasError = Object.values(newErrors).some(Boolean);
    if (hasError) {
      setShowError(true);
    }
    return !hasError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (login(fieldValues.email, fieldValues.password)) {
      navigate('/expenses');
    } else {
      setErrors({ email: true, password: true });
      setShowError(true);
    }
  };

  const handleChange = (field, value) => {
    setFieldValues(prev => ({ ...prev, [field]: value }));
    if (showError) {
      setShowError(false);
      setErrors({ email: false, password: false });
    }
  };

  const displayValue = (field) => {
    if (showError && errors[field]) {
      return fieldValues[field] ? fieldValues[field] + '*' : '*';
    }
    return fieldValues[field];
  };

  return (
    <Background>
      <Card>
        <Form onSubmit={handleSubmit} noValidate>
          <Title>Вход</Title>
          <InputField
            type="email"
            placeholder="Email"
            value={displayValue('email')}
            onChange={(e) => handleChange('email', e.target.value)}
            $isError={showError && errors.email}
          />
          <InputField
            type="password"
            placeholder="Пароль"
            value={displayValue('password')}
            onChange={(e) => handleChange('password', e.target.value)}
            $isError={showError && errors.password}
          />
          {showError && (
            <ErrorMessage>
              Упс! Введенные вами данные некорректны. <br />
              Введите данные корректно и повторите попытку.
            </ErrorMessage>
          )}
          <SubmitButton
            type="submit"
            disabled={showError}
            $isError={showError}
          >
            Войти
          </SubmitButton>
          <LinkContainer>
            <span>Нужно зарегистрироваться?</span>
            <UnderlinedLink onClick={() => navigate('/register')}>
              Регистрируйтесь здесь
            </UnderlinedLink>
          </LinkContainer>
        </Form>
      </Card>
    </Background>
  );
}
