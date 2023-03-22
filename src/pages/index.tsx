import { NextPage } from 'next';
import Image from 'next/legacy/image';

import { Heading, Page, Section, Text, Button } from '../components';
import { Input } from '../components/ui/input/Input';
import { LoadingIcon } from '../components/ui/svg/Svg';
import { theme } from '../styles/theme';

const LoginPage: NextPage = () => {
  return (
    <Page
      title="Iniciar sesión"
      description="Ingresa en tu cuenta con tu usuario y contraseña."
      keywords="login, iniciar sesion, credenciales, usuario, contraseña"
    >
      <Section>
        {/* <Heading>Login Page</Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo consequuntur possimus quae
          quia dolore error, exercitationem voluptatum eos, facere fuga in molestiae laudantium
          libero, nulla nam. Esse facilis adipisci distinctio!
        </Text>

        <Button ariaLabel="ingresar">Ingresar</Button>
        <Button ariaLabel="ingresar">Ingresar</Button>
        <Button ariaLabel="ingresando..." isLoading>
          Ingresando...
        </Button>
        <Button ariaLabel="ingresar" variant="outline">
          Ingresar
        </Button>
        <Button ariaLabel="ingresar" variant="outline" disabled>
          Ingresar
        </Button>
        <Button ariaLabel="ingresar" variant="link">
          Ingresar
        </Button>
        <Button ariaLabel="ingresar" variant="link" disabled>
          Ingresar
        </Button>
        <Button ariaLabel="ingresar" variant="icon">
          <LoadingIcon color={theme.color.black} />
        </Button>
        <Button ariaLabel="ingresar" variant="icon" disabled>
          <LoadingIcon color={theme.color.black} />
        </Button>
        <Button ariaLabel="ingresar" fullWidth>
          Ingresar
        </Button>
        <Button ariaLabel="ingresar" fullWidth disabled>
          Ingresar
        </Button>
        <Button ariaLabel="ingresar" disabled>
          Ingresar
        </Button> */}

        {/* <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <Image
            src="/assets/hero.png"
            alt="Picture of the author"
            height="0"
            width="0"
            layout="responsive"
            objectFit="contain"
            priority
          />
        </div> */}
        <Input
          type="text"
          name="user"
          label="Usuario"
          onChange={() => {}}
          onBlur={() => {}}
          isOptional
        />
      </Section>
    </Page>
  );
};

export default LoginPage;
