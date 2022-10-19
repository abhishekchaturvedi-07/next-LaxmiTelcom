import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react';
import { StoreProvider } from '../utils/Store'

function MyApp({ Component, pageProps: { session, ...pageProps }  }) {
  return (
  // <StoreProvider><Component {...pageProps} /></StoreProvider>
  <SessionProvider session={session}>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </SessionProvider>
  )
}

export default MyApp
