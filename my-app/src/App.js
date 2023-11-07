import React, { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import Form from "./components/Form";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((preNotes) => {
      return [...preNotes, note];
    });
  }

  return (
    <div>
      <Header />
      <Form addNote={addNote} />
      <Note />
      <Note />
      <Note />
      <Footer />
    </div>
  );
}

export default App;
