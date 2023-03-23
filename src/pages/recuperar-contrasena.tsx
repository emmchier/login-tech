import { NextPage } from 'next';

import { Page, Section, TemplateScreen, RecoverPasswordForm } from '../components';

const RecoverPasswordPage: NextPage = () => {
  return (
    <Page
      title="Recuperar contraseña"
      description="Aquí podrás recuparar tu contraseña."
      keywords="contraseña, password, credenciales"
    >
      <Section auto={false}>
        <TemplateScreen title="Olvidé mi contraseña">
          <RecoverPasswordForm />
        </TemplateScreen>
      </Section>
    </Page>
  );
};

export default RecoverPasswordPage;
