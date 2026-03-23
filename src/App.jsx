import React from 'react';
import MyComponent from './components/MyComponent';
import MyComponentFunc from './components/MyComponentFunc';

const App = () => {
  return (
    <>
      <MyComponent  name="리액트" />
      <MyComponent name={3} />
      <hr/>
      <MyComponentFunc />
    </>
  );
};

export default App;