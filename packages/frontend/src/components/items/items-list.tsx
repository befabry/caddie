import { Link } from 'react-router-dom';
import { useGetItemsQuery } from 'src/slices';

export const ItemsList: React.FC = () => {
  const { data: items, isLoading, isSuccess } = useGetItemsQuery();
  let content: JSX.Element;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess && items?.length) {
    content = (
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link to={`/items/${item.id}`}>
              {item.name}
              {item.type}
            </Link>
          </li>
        ))}
      </ul>
    );
  } else {
    content = <p>Not found</p>;
  }

  return (
    <section>
      <h2>Items</h2>

      {content}

      <h2>New Items</h2>
      <Link to={'/items/new'}>click</Link>
    </section>
  );
};
