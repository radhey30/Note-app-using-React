import React from "react";
import Note from "./Note";
import AddIcon from "@mui/icons-material/Add";

function Input(props) {
  const [note, setNote] = React.useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.addNote(note);
    setNote({
        title: "",
        content: ""
    })
  }

  return (
    <div className="input">
      <div>
        <input
          type="text"
          name="title"
          placeholder="Enter title"
          value={note.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="content"
          placeholder="Enter content"
          value={note.content}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleSubmit}>
        <AddIcon />
      </button>
    </div>
  );
}

export default Input;
