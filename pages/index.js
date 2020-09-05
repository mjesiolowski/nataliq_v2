import CollectionList from '../components/CollectionList';
import withApollo from '../lib/apollo';

const App = () => (
  <CollectionList />
);

export default withApollo()(App);
