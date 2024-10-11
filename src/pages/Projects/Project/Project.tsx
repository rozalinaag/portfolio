import React from 'react';
import { useParams } from 'react-router-dom';

export default function Project() {
  const { projectId } = useParams();
  console.log(projectId);
  return <div>{projectId} AALALLAL</div>;
}
