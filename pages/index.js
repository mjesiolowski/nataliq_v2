import CollectionCardList from '../components/CollectionCardList';
import withApollo from '../lib/apollo';

const App = () => (
  <CollectionCardList />
);

export default withApollo()(App);
