import React from 'react'

import './App.css';
import Header from "./components/Header";
import Footer from './components/Footer';
import Note from './components/Note';
import Form from './components/Form';

function App() {
  return (
    <div >
      <Header />
      <Form />
      <Note />
      <Note />
      <Note />
      <Footer />
    </div>
  );
}

export default App;
