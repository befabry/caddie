import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Item, ItemsList, NewItem } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" /* element={<App />} */>
          <Route index element={<Home />} />
          <Route path="items" /* element={<Layout />} */>
            <Route path="new" element={<NewItem />} />
            <Route path=":itemId" element={<Item />} />
            <Route index element={<ItemsList />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
