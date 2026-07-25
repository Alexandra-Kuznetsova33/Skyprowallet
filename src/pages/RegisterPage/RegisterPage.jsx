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
} from './RegisterPage.styled';

export default function RegisterPage() {
  const [fieldValues, setFieldValues] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({ name: false, email: false, password: false });
  const [showError, setShowError] = useState(false);
  const { register, login } = useAuth();
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {
      name: fieldValues.name.trim().length === 0,
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

    if (register(fieldValues.name, fieldValues.email, fieldValues.password)) {
      login(fieldValues.email, fieldValues.password);
      navigate('/expenses');
    } else {
      setErrors({ name: false, email: true, password: false });
      setShowError(true);
    }
  };

  const handleChange = (field, value) => {
    setFieldValues(prev => ({ ...prev, [field]: value }));
    if (showError) {
      setShowError(false);
      setErrors({ name: false, email: false, password: false });
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
          <Title>Регистрация</Title>
          <InputField
            type="text"
            placeholder="Имя"
            value={displayValue('name')}
            onChange={(e) => handleChange('name', e.target.value)}
            $isError={showError && errors.name}
          />
          <InputField
            type="email"
            placeholder="Эл. почта"
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
            Зарегистрироваться
          </SubmitButton>
          <LinkContainer>
            <span>Уже есть аккаунт?</span>
            <UnderlinedLink onClick={() => navigate('/login')}>
              Войдите здесь
            </UnderlinedLink>
          </LinkContainer>
        </Form>
      </Card>
    </Background>
  );
}
