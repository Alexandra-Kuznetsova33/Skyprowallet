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
  const [isDescValid, setIsDescValid] = useState(false);
  const [isAmountValid, setIsAmountValid] = useState(false);

  const handleDescChange = (e) => {
    const val = e.target.value;
    setDescription(val);
    setIsDescValid(validateDescription(val));
  };

  const handleAmountChange = (e) => {
    const val = e.target.value;
    setAmount(val);
    setIsAmountValid(validateAmount(val));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isDescValid || !category || !isAmountValid) return;

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
    setIsDescValid(false);
    setIsAmountValid(false);
  };

  return (
    <FormCard onSubmit={handleSubmit}>
      <Title>Новый расход</Title>

      <FieldGroup>
        <Label htmlFor="description">Описание</Label>
        <StyledInput
          id="description"
          type="text"
          placeholder="Введите описание"
          value={description}
          onChange={handleDescChange}
          className={isDescValid ? 'valid' : ''}
        />
      </FieldGroup>

      <FieldGroup>
        <Label>Категория</Label>
        <CategoriesWrapper>
          <CategorySelector selected={category} onSelect={setCategory} />
        </CategoriesWrapper>
      </FieldGroup>

      <FieldGroup>
        <Label htmlFor="date">Дата</Label>
        <StyledInput
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </FieldGroup>

      <FieldGroup>
        <Label htmlFor="amount">Сумма</Label>
        <StyledInput
          id="amount"
          type="text"
          placeholder="Введите сумму"
          value={amount}
          onChange={handleAmountChange}
          className={isAmountValid ? 'valid' : ''}
        />
      </FieldGroup>

      <SubmitButton
        type="submit"
        disabled={!isDescValid || !category || !isAmountValid}
      >
        Добавить новый расход
      </SubmitButton>
    </FormCard>
  );
}
