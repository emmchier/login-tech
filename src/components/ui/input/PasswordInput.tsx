import React, { FC, useEffect, useState } from 'react';

import { Button, HideIcon, ShowIcon } from '../../../components';

import { InputField, InputTypes } from './InputField';

type InputPasswordTypes = 'password' | 'text';

export const PasswordInput: FC<InputTypes> = ({
  name,
  value,
  label,
  placeholder = 'Ingrese una contraseña',
  isSupportingText = false,
  supportingType = 'error',
  supportingText = 'Este campo no debe estar vacío',
  isError = false,
  required = false,
  disabled = false,
  onChange,
  onBlur,
}) => {
  const [typeInput, setTypeInput] = useState<InputPasswordTypes>('password');
  const [showPassword, setShowPassword] = useState(false);
  console.log(typeInput);

  const handleClick = () => setShowPassword(!showPassword);

  useEffect(() => {
    showPassword === true ? setTypeInput('text') : setTypeInput('password');
  }, [showPassword]);

  return (
    <>
      {/* This hidden input fix an autocomplete bug */}
      <input
        type="text"
        autoComplete="username"
        defaultValue="{{username}}"
        style={{ display: 'none' }}
      />
      <InputField
        type={typeInput}
        name={name}
        value={value}
        label={label}
        placeholder={placeholder}
        isSupportingText={isSupportingText}
        supportingType={supportingType}
        supportingText={supportingText}
        isError={isError}
        required={required}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
        action={
          <Button
            onClick={handleClick}
            ariaLabel={showPassword === false ? 'password hidden' : 'password shown'}
            variant="icon"
          >
            {showPassword === false ? <HideIcon /> : <ShowIcon />}
          </Button>
        }
      />
    </>
  );
};
