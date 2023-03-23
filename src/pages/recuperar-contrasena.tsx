import { NextPage } from 'next';

import { Page, Section } from '../components';
import { RecoverPasswordForm } from '../components/ui/form/RecoverPasswordForm';

const RecoverPasswordPage: NextPage = () => {
  return (
    <Page
      title="Recuperar contraseña"
      description="Aquí podrás recuparar tu contraseña."
      keywords="contraseña, password, credenciales"
    >
      <Section auto={false}>
        <RecoverPasswordForm />
      </Section>
    </Page>
  );
};

export default RecoverPasswordPage;
