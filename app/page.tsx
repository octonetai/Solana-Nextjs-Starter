// app/page.tsx
'use client';

import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export default function Home() {
  const { publicKey } = useWallet();
  
  return (
    <div
      style={{
        maxWidth: 1280,
        margin: '0 auto',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <h1>My Solana App</h1>
      <WalletMultiButton />
      
      {publicKey ? (
        <p>Your wallet is connected: {publicKey.toString()}</p>
      ) : (
        <p>Connect your wallet to continue</p>
      )}
    </div>
  );
}