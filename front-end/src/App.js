import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-violet-200">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
