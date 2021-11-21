import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div>
      <Link to={'/items'}>Items List</Link>
    </div>
  );
};
