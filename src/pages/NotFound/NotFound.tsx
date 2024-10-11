import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      The page was not found, go <Link to="/">Home</Link>
    </div>
  );
}
