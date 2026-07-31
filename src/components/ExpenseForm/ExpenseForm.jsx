import { useState } from 'react';
import { useExpenses } from '../../hooks/useExpenses';
import CategorySelector from '../CategorySelector/CategorySelector';
import { validateAmount, validateDescription } from '../../utils/validation';
import { FormCard, Title, FieldGroup, Label, StyledInput, SubmitButton, CategoriesWrapper } from './ExpenseForm.styled';

export default function ExpenseForm() {
  const { addExpense } = useExpenses();
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [amount, setAmount] = useState('');

  const [submitted, setSubmitted] = useState(false);

  const [descError, setDescError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [amountError, setAmountError] = useState(false);

  const resetErrors = () => {
    if (submitted) {
      setSubmitted(false);
      setDescError(false);
      setCategoryError(false);
      setDateError(false);
      setAmountError(false);
    }
  };

  const handleDescChange = (e) => {
    const val = e.target.value;
    setDescription(val);
    resetErrors();
  };

  const handleCategorySelect = (catId) => {
    setCategory(catId);
    resetErrors();
  };

  const handleDateChange = (e) => {
    const val = e.target.value;
    setDate(val);
    resetErrors();
  };

  const handleAmountChange = (e) => {
    const val = e.target.value.replace(/[^0-9.]/g, '');
    setAmount(val);
    resetErrors();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const descValid = validateDescription(description);
    const categoryValid = category !== '';
    const year = new Date(date).getFullYear();
    const dateValid = year >= 2020;
    const amountValid = validateAmount(amount);

    if (!descValid || !categoryValid || !dateValid || !amountValid) {
      setDescError(!descValid);
      setCategoryError(!categoryValid);
      setDateError(!dateValid);
      setAmountError(!amountValid);
      setSubmitted(true);
      return;
    }

    addExpense({
      description,
      category,
      date,
      amount: parseFloat(amount),
    });

    setDescription('');
    setCategory('');
    setDate(new Date().toISOString().slice(0, 10));
    setAmount('');
    setSubmitted(false);
    setDescError(false);;
    setCategoryError(false);
    setDateError(false);
    setAmountError(false);
  };

  const isButtonDisabled = submitted;

  const showDescError = submitted && descError;
  const showCategoryError = submitted && categoryError;
  const showDateError = submitted && dateError;
  const showAmountError = submitted && amountError;


  return (
    <FormCard onSubmit={handleSubmit}>
      <Title>Новый расход</Title>

      <FieldGroup>
        <Label htmlFor="description" $isError={showDescError}>Описание</Label>
        <StyledInput
          id="description"
          type="text"
          placeholder="Введите описание"
          value={description}
          onChange={handleDescChange}
          $isError={showDescError}
        />
      </FieldGroup>

      <FieldGroup>
        <Label $isError={showCategoryError}>Категория</Label>
        <CategoriesWrapper>
          <CategorySelector selected={category} onSelect={handleCategorySelect} />
        </CategoriesWrapper>
      </FieldGroup>

      <FieldGroup>
        <Label $isError={showDateError} htmlFor="date">Дата</Label>
        <StyledInput
          id="date"
          type="date"
          value={date}
          onChange={handleDateChange}
          $isError={showDateError}
        />
      </FieldGroup>

      <FieldGroup>
        <Label $isError={showAmountError} htmlFor="amount">Сумма</Label>
        <StyledInput
          id="amount"
          type="text"
          placeholder="Введите сумму"
          value={amount}
          onChange={handleAmountChange}
          $isError={showAmountError}
          inputMode="decimal"
        />
      </FieldGroup>

      <SubmitButton
        type="submit"
        disabled={isButtonDisabled}
      >
        Добавить новый расход
      </SubmitButton>
    </FormCard>
  );
}
