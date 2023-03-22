import React, { FC, ChangeEvent } from 'react';

import { InputContent, Label, InputField } from './InputStyles';
import { SupportingText } from './SupportingText';

interface InputTypes {
  type?: 'text' | 'number' | 'email' | 'password' | 'checkbox' | 'radio';
  id?: string;
  name: string;
  label: string;
  value?: string;
  placeholder?: string;
  supportingType?: 'error';
  supportingText?: string;
  isOptional?: boolean;
  required?: boolean;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputTypes> = ({
  type = 'text',
  name,
  value,
  label,
  placeholder = 'Ingrese un texto',
  supportingType = 'error',
  supportingText = 'Esto es un mensaje de error',
  isOptional = false,
  required,
  disabled,
  onChange,
  onBlur,
}) => {
  return (
    <InputContent>
      <Label htmlFor={name}>
        {label}
        {isOptional === true && <span>*</span>}
      </Label>
      <InputField
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
      />
      <SupportingText type={supportingType} message={supportingText} />
    </InputContent>
  );
};
