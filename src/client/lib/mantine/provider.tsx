import 'dayjs/locale/ja';

import { MantineProvider as BaseMantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import type { ReactNode } from 'react';

type MantineProviderProps = {
  children: ReactNode;
};

export const MantineProvider = ({ children }: MantineProviderProps) => {
  return (
    <BaseMantineProvider withGlobalStyles withNormalizeCSS>
      <ModalsProvider>
        <Notifications />
        {children}
      </ModalsProvider>
    </BaseMantineProvider>
  );
};
