import React from 'react';

import Header from './components/header';
import Slideshow from './components/slideshow';
import Shelf from './components/shelf';
import Newsletter from './components/newsletter';
import Footer  from './components/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header items="5"></Header>
      <Slideshow></Slideshow>
      <Shelf></Shelf>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
}

export default App;
