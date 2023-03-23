import { NextPage } from 'next';

import { Page, Section, LoginForm, TemplateScreen } from '../components';

const LoginPage: NextPage = () => {
  return (
    <Page
      title="Iniciar sesión"
      description="Ingresa en tu cuenta con tu usuario y contraseña."
      keywords="login, iniciar sesion, credenciales, usuario, contraseña"
    >
      <Section auto={false}>
        <TemplateScreen title="Iniciá sesión">
          <LoginForm />
        </TemplateScreen>
      </Section>
    </Page>
  );
};

export default LoginPage;
