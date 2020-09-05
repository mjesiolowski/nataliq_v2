import { withApollo } from 'next-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';

/* eslint-disable prefer-destructuring, no-console */
const SPACE = process.env.NEXT_PUBLIC_SPACE;
const TOKEN = process.env.NEXT_PUBLIC_TOKEN;
/* eslint-enable prefer-destructuring, no-console */

const CONTENTFUL_URL = `https://graphql.contentful.com/content/v1/spaces/${SPACE}`;

const apolloClient = new ApolloClient({
  uri: CONTENTFUL_URL, // Server URL (must be absolute)
  headers: {
    authorization: `Bearer ${TOKEN}`,
  },
  cache: new InMemoryCache(),
});

export default withApollo(apolloClient);
export { apolloClient };
