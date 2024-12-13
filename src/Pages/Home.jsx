import React from 'react';
import Card from '../components/Card';

function Home() {
  return (
    <div>
      <h2>Welcome to the Helpdesk</h2>
      <Card title="Feature 1" description="Description of Feature 1" />
      <Card title="Feature 2" description="Description of Feature 2" />
    </div>
  );
}

export default Home;
