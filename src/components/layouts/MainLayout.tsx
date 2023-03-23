import { useContext } from 'react';
import { FCC } from '../../types';

import { UIContext } from '../../context/UIContext';

import { LoadingScreen } from '../ui/loading/LoadingScreen';

export const MainLayout: FCC = ({ children }) => {
  const { loading } = useContext(UIContext);

  return (
    <>
      <LoadingScreen isLoading={loading} />
      <main>{children}</main>
    </>
  );
};
