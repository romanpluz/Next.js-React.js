import '../styles/global.scss';
import { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }
