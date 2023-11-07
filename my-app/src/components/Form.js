import { Fab, Paper, TextField } from "@mui/material";
import React, { useState } from "react";

function Form({ addNote }) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function clickHandler() {
    addNote(note);
    setNote({
      title: "",
      content: "",
    });
  }

  function changeHandler(event) {
    const { name, value } = event.target;
    setNote((preValues) => {
      return {
        ...preValues,
        [name]: value,
      };
    });
  }
  return (
    <Paper style={{ margin: "10px 10%", padding: "25px 50px" }}>
      <form>
        <TextField
          onChange={changeHandler}
          name="title"
          value={note.title}
          label="Title"
          fullWidth
          autoComplete="off"
        />
        <TextField
          onChange={changeHandler}
          name="content"
          value={note.content}
          label="Content"
          fullWidth
          autoComplete="off"
          multiline
          rows={4}
        />
        <Fab onClick={clickHandler} style={{ marginTop: "20px" }}>
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 1v16M1 9h16"
            />
          </svg>
        </Fab>
      </form>
    </Paper>
  );
}

export default Form;
