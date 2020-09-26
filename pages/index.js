import CollectionCardList from '../components/CollectionCardList';
import About from '../components/About';
import withApollo from '../lib/apollo';

const App = () => (
  <>
    <CollectionCardList />
    <About />
  </>
);

export default withApollo()(App);
