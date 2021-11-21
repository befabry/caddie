import { useEffect } from 'react';
import { useAddItemMutation } from 'src/slices';

export const NewItem: React.FC = () => {
  const [addNewPost, { isLoading }] = useAddItemMutation();

  useEffect(() => {
    const test = async () => {
      await addNewPost({ name: 'React Test', price: 5, type: 'Fruit' });
    };
    test();
  }, []);

  if (isLoading) {
    return <div>Creating Item...</div>;
  }

  return <div>Item Created</div>;
};
