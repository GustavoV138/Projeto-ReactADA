import React from "react";
import { Navbar } from './components/Navbar/Navbar';
import { Article } from './components/Article/Article';

import './styles/App.css';

class App extends React.Component {
 render() { 
    return (
      <>
        <Navbar />
        <section id="articles">
          <Article title="Eu te pego e te Jooorge!" subtitle="SBT"/>
          <Article title="Serjao Foguetes" subtitle="SPACE TODAY"/>
          <Article />
        </section>
      </>
    )
  }
}

export default App;
