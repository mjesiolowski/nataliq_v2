import { ApolloProvider } from '@apollo/react-hooks';
import { apolloClient } from '../lib/apollo';
import '../styles/global.scss';
import MetaTags from '../components/MetaTags/MetaTags';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient}>
      <MetaTags />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
