import React, { FC, ChangeEvent, ReactNode, useState, useEffect } from 'react';

import { SupportingText } from './SupportingText';

import { InputContent, Label, Input, Field } from './InputStyles';

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
  isRequiredLabel?: boolean;
  required?: boolean;
  disabled?: boolean;
  actionField?: ReactNode;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const InputField: FC<InputTypes> = ({
  type = 'text',
  name,
  value,
  label,
  placeholder = '',
  isSupportingText = false,
  supportingType = 'error',
  supportingText = '',
  isError = false,
  isRequiredLabel = false,
  required = false,
  disabled = false,
  actionField = '',
  onChange,
  onBlur,
}) => {
  const [isAction, setIsAction] = useState(false);

  useEffect(() => {
    actionField !== '' ? setIsAction(true) : setIsAction(false);
  }, [actionField]);

  return (
    <InputContent>
      <Label htmlFor={name}>
        {label}
        {isRequiredLabel === true && <span> *</span>}
      </Label>
      <Field isAction={isAction}>
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
        {actionField}
      </Field>
      {isSupportingText === true && (
        <SupportingText type={supportingType} message={supportingText} />
      )}
    </InputContent>
  );
};
