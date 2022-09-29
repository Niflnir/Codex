import '../styles/globals.css';
import { AppProps } from 'next/app';
import { wrapper } from '../redux/store';

const AppComponent = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(AppComponent);

