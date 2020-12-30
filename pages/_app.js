import { ApolloProvider } from '@apollo/react-hooks';
import { apolloClient } from '../lib/apollo';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
