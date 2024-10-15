import { useParams } from 'react-router-dom';
import Layout from '../../../app/Layout/Layout';

export default function Project() {
  const { projectId } = useParams();
  console.log(projectId);
  return <Layout>{projectId} AALALLAL</Layout>;
}
