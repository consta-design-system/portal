import './SnackBarContainer.css';

import { SnackBar } from '@consta/uikit/SnackBar';
import { useAtom } from '@reatom/npm-react';
import React from 'react';

import { snackBarAtom } from '##/modules/snackBar';
import { cn } from '##/utils/bem';

const cnSnackBarContainer = cn('SnackBarContainer');

export const SnackBarContainer: React.FC = () => {
  const [items] = useAtom(snackBarAtom);
  return <SnackBar className={cnSnackBarContainer()} items={items} />;
};
