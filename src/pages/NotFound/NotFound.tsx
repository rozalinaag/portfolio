import { Link } from 'react-router-dom';
import Layout from '../../app/Layout/Layout';

export default function NotFound() {
  return (
    <Layout>
      The page was not found, go <Link to="/">Home</Link>
    </Layout>
  );
}
