import React from 'react';
import Welcome from './Welcome'

const App = () => {
  return (
    <div>
      <Welcome 
        name='John' 
        email='a@a.com' 
        phone='123-123-4123' 
      />
    </div>
  );
}

export default App;