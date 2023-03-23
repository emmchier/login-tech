import { useRouter } from 'next/router';
import React, { ChangeEvent, SyntheticEvent, useContext, useState } from 'react';

import { Button, InputField, PasswordInput, Toast } from '../../../components';
import { UIContext } from '../../../context/UIContext';

import { LoginActions, Form, InputGroup, Alerts } from './FormStyles';

export const LoginForm = () => {
  const { push } = useRouter();
  const { showLoading, hideLoading } = useContext(UIContext);
  const [showToast, setShowToast] = useState(false);

  const initialState = {
    user: '',
    password: '',
  };

  const [values, setValues] = useState(initialState);
  const { user, password } = values;

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    showLoading();
    setTimeout(() => {
      hideLoading();
      setShowToast(true);
    }, 2000);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Alerts>
        {showToast === true && (
          <Toast
            type="error"
            message="El nombre de usuario o la contraseña son incorrectos"
            fullWidth
          />
        )}
      </Alerts>
      <InputGroup>
        <InputField
          type="text"
          name="user"
          onChange={handleChange}
          value={user}
          label="Usuario"
          placeholder="Ingresá tu usuario"
          required
        />
        <PasswordInput
          name="password"
          label="Contraseña"
          onChange={handleChange}
          value={password}
          placeholder="Ingresá tu contraseña"
          required
        />
      </InputGroup>
      <LoginActions>
        <Button type="submit" ariaLabel="ingresar sesión" fullWidth>
          Ingresar
        </Button>
        <Button
          onClick={() => push('/recuperar-contrasena')}
          ariaLabel="link a Recuperar contraseña"
          variant="link"
        >
          Olvidé mi contraseña
        </Button>
      </LoginActions>
    </Form>
  );
};
