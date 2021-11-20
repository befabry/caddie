import { useGetItemQuery, useGetItemsQuery } from './slices';

function App() {
  const { data: items } = useGetItemsQuery(null);
  const { data: item } = useGetItemQuery(1);

  console.log(items);

  console.log(item);

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
