import '@solana/wallet-adapter-react-ui/styles.css';
import '../styles/globals.css';

import {
  ConnectionProvider,
  WalletProvider
} from '@solana/wallet-adapter-react';
import {
  WalletModalProvider,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';

const NETWORK = process.env.NEXT_PUBLIC_SOLANA_NETWORK || 'https://api.devnet.solana.com';
const wallets = [ new PhantomWalletAdapter() ];

export default function App({ Component, pageProps }) {
  return (
    <ConnectionProvider endpoint={NETWORK}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <div className="p-4">
            <WalletMultiButton />
            <Component {...pageProps} />
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
