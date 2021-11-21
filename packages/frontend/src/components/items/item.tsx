import { useParams } from 'react-router-dom';
import { useGetItemQuery } from 'src/slices';

export const Item: React.FC = () => {
  const { itemId } = useParams<'itemId'>();
  const { data: item, isLoading, isSuccess } = useGetItemQuery(itemId ?? 1);

  let content: JSX.Element;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess && item) {
    content = <div>{item.name}</div>;
  } else {
    content = <p>Not found</p>;
  }

  return <div>{content}</div>;
};
