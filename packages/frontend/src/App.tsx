import { useEffect } from 'react';
import {
  useAddItemMutation,
  useGetItemQuery,
  useGetItemsQuery,
} from './slices';

function App() {
  // const { data: items } = useGetItemsQuery();
  // const { data: item } = useGetItemQuery(1);

  const [addNewPost, { isLoading }] = useAddItemMutation();

  useEffect(() => {
    const test = async () => {
      await addNewPost({ name: 'React Test', price: 5, type: 'Fruit' });
    };
    test();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
