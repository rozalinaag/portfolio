import { useParams } from 'react-router-dom';
import Layout from '../../../app/Layout/Layout';
import { useEffect } from 'react';

export default function Project() {
  const { projectId } = useParams();

  useEffect(() => {
    //getting project by Id
  }, []);

  return (
    <Layout>
      <div>
        <div>
          {projectId}
          <div>Name of project </div>
          <div>Description</div>
        </div>

        <a>link to deploy</a>
      </div>
    </Layout>
  );
}
