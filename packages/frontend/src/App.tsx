import { useEffect } from 'react';
import {
  useAddItemMutation,
  useGetItemQuery,
  useGetItemsQuery,
  useUpdateItemMutation,
} from './slices';

function App() {
  // const { data: items } = useGetItemsQuery();
  // const { data: item } = useGetItemQuery(1);
  // const [addNewPost, { isLoading }] = useAddItemMutation();
  const [updateItem, { isLoading: isUpdating, data: updatedData }] =
    useUpdateItemMutation();

  useEffect(() => {
    const test = async () => {
      //await addNewPost({ name: 'React Test', price: 5, type: 'Fruit' });
      console.log(await updateItem({ id: 4, name: 'React Update' }).unwrap());
    };
    test();
  }, []);

  console.log(updatedData);

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
