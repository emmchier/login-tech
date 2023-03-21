import { NextPage } from 'next';

import { Page, Section } from '../components';

const RecoverPasswordPage: NextPage = () => {
  return (
    <Page
      title="Recuperar contraseña"
      description="Aquí podrás recuparar tu contraseña."
      keywords="contraseña, password, credenciales"
    >
      <Section>
        <h2>Recuperar contraseña</h2>
      </Section>
    </Page>
  );
};

export default RecoverPasswordPage;
