import React, { useState } from 'react';
import { Input, Label, LabelText } from './styles';

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, label }) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.checked;
    setIsChecked(value);
    onChange(value);
  };

  return (
    <Label>
      <Input type="checkbox" checked={isChecked} onChange={handleInputChange} />
      {label && <LabelText>{label}</LabelText>}
    </Label>
  );
};
