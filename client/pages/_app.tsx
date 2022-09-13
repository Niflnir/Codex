import '../styles/globals.css';
import buildClient from '../api/build-client';
import { AppContext, AppProps } from 'next/app';

const AppComponent = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

AppComponent.getInitialProps = async (appContext: AppContext)  => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get('/api/users/currentuser');

  let pageProps = {};
  if(appContext.Component.getInitialProps){ 
    pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  }

  return {
    pageProps,
    ...data
  };
};

export default AppComponent;

