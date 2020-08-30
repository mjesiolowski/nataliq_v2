import CollectionWrapper from '../components/CollectionWrapper';
import withApollo from '../lib/apollo';

const App = () => (
  <CollectionWrapper />
);

export default withApollo()(App);
