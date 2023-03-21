import { NextPage } from 'next';

import { Page, Section } from '../components';

const LoginPage: NextPage = () => {
  return (
    <Page
      title="Iniciar sesión"
      description="Ingresa en tu cuenta con tu usuario y contraseña."
      keywords="login, iniciar sesion, credenciales, usuario, contraseña"
    >
      <Section>
        <h1>Login Page</h1>
      </Section>
    </Page>
  );
};

export default LoginPage;
