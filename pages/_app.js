import '@/styles/globals.css'

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css';

function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Redirige vers /home lorsque l'utilisateur accède à l'URL de base /
    if (router.pathname === '/') {
      router.push('/home');
    }
  }, []);

  return <Component {...pageProps} />;
}

export default App;
