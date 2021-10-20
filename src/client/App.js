import React from 'react';
import { renderRoutes } from 'react-router-config';
import Navbar from './components/shared/Navbar';

const App = ({ route }) => {
  return (
    <div>
      <Navbar />
      {renderRoutes(route.routes)}
    </div>
  );
};

export default { component: App };
