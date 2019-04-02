import React from 'react';
import Greeting from './greeting';

function App(){
  return (
    <div>
      <Greeting name="sally" />
      <Greeting name="sarah" />
      <Greeting name="sigourney" />
      <h1>
        I am The App. All other apps shall bow before me.
      </h1>
    </div>
  )
}

export default App;