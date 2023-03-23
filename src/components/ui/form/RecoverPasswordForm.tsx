import { useRouter } from 'next/router';
import React, { ChangeEvent, SyntheticEvent, useState } from 'react';

import { Button, InputField, PasswordInput, SelectField } from '../../../components';

import { Form, InputGroup, RecoverActions } from './FormStyles';

export const RecoverPasswordForm = () => {
  const { push } = useRouter();
  const [handleError, setHandleError] = useState(false);
  const [loading, setLoading] = useState(false);

  const initialState = {
    docType: '',
    docValue: '',
  };

  const [values, setValues] = useState(initialState);
  const { docType, docValue } = values;

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  const validateFilledInputs = () =>
    docValue === '' || docValue.length < 1 ? setHandleError(true) : setHandleError(false);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    validateFilledInputs();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setValues(initialState);
    }, 3000);
  };

  const options = [
    { value: 'DNI', label: 'DNI' },
    { value: 'LC', label: 'LC' },
    { value: 'LE', label: 'LE' },
    { value: 'CI', label: 'CI' },
  ];

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <SelectField
          name="docType"
          options={options}
          defaultValue={options[0].value}
          //   onChange={handleChange}
          value={docType}
          label="Tipo de documento"
          placeholder="DNI"
          required
        />
        <InputField
          type="number"
          name="docValue"
          onChange={handleChange}
          label="Número de documento"
          placeholder="Ingresá tu número de documento"
          isError={handleError}
          isSupportingText={handleError}
          supportingText="Este campo no debe estar vacío"
          //   required
        />
      </InputGroup>
      <RecoverActions>
        <Button
          onClick={() => push('/')}
          ariaLabel="link de vuelta a Login"
          variant="outline"
          fullWidth
        >
          Volver
        </Button>
        <Button
          type="submit"
          ariaLabel="recuperar contraseña"
          fullWidth
          isLoading={handleError === false && loading}
        >
          Continuar
        </Button>
      </RecoverActions>
    </Form>
  );
};
