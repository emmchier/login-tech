import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import { useRouter } from 'next/router';
import { options } from '../../../domain/option-list';

import { Button, InputField, SelectField } from '../../../components';

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
      console.log(`Tipo de documento: ${docType}, Número de documento: ${docValue}`);
    }, 3000);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <SelectField
          name="docType"
          options={options}
          defaultValue={options[0].value}
          onChange={(option) => setValues({ ...values, docType: option.value })}
          value={docType}
          label="Tipo de documento"
          placeholder="DNI"
          isRequiredLabel={true}
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
          isRequiredLabel={true}
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
