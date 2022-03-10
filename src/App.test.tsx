import store  from './store/store'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer';
import App from './App';

test('Snapshot Test: App component', () => {
  const tree = renderer
    .create( <Provider store={store}><App /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
