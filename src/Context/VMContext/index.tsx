import React from 'react';

import Compose from '@/utils/Compose';

import { LogProvider } from './LogContext';
import { MachineProvider } from './MachineContext';
import { WalletProvider } from './WalletContext';

export const VMProvider = ({ children }: { children: React.ReactNode }) => {
  return <Compose components={[LogProvider, MachineProvider, WalletProvider]}>{children}</Compose>;
};
