import { WarningIcon } from '../components';

export const getIconByType = (type: string) => {
  if (type === 'error') return <WarningIcon />;
  return '';
};
