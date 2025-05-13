// components/ClientProviders.tsx
'use client';

import WalletContextProvider from './WalletContextProvider';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <WalletContextProvider>
      {children}
    </WalletContextProvider>
  );
}