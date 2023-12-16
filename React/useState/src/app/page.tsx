'use client';

import Counter from '@/components/page';
import React from 'react';


const App: React.FC = () => {
  return (
    <div>
      <h1 className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-lg'>Exemplo useState</h1>
      <Counter />
    </div>
  );
};

export default App;
