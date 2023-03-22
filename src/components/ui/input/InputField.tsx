import React, { FC, ChangeEvent, ReactNode, useState, useEffect } from 'react';

import { InputContent, Label, Input, Field } from './InputStyles';
import { SupportingText } from './SupportingText';

export interface InputTypes {
  type?: 'text' | 'number' | 'email' | 'password' | 'checkbox' | 'radio';
  id?: string;
  name: string;
  label: string;
  value?: string;
  placeholder?: string;
  isSupportingText?: boolean;
  supportingType?: 'error';
  supportingText?: string;
  isError?: boolean;
  required?: boolean;
  disabled?: boolean;
  action?: ReactNode;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const InputField: FC<InputTypes> = ({
  type = 'text',
  name,
  value,
  label,
  placeholder = 'Ingrese un texto',
  isSupportingText = false,
  supportingType = 'error',
  supportingText = 'Este campo no debe estar vacío',
  isError = false,
  required = false,
  disabled = false,
  action = '',
  onChange,
  onBlur,
}) => {
  const [isAction, setIsAction] = useState(false);

  useEffect(() => {
    action !== '' ? setIsAction(true) : setIsAction(false);
  }, [action]);

  return (
    <InputContent>
      <Label htmlFor={name}>
        {label}
        {required === true && <span> *</span>}
      </Label>
      <Field action={isAction}>
        <Input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          isError={isError}
          autoComplete="off"
        />
        {action}
      </Field>
      {isSupportingText === true && (
        <SupportingText type={supportingType} message={supportingText} />
      )}
    </InputContent>
  );
};
