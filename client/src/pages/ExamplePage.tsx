import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

function ExamplePage({ match }: RouteComponentProps) {
  // eslint-disable-next-line no-console
  console.log(match);

  return <div>Coding Notes with React</div>;
}

export default ExamplePage;
