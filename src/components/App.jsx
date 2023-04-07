import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Input from "./Input";
import Note from "./Note";

function App() {
  const [notes, setNotes] = React.useState([]);

  function addNote(note) {
    setNotes((prevNotes) => [...prevNotes, note]);
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
        return prevNotes.filter((item,index)=>{
            return index !== id
        })
    })
  }

  function addNotes(note, index) {
    return <Note key={index} id={index} title={note.title} content={note.content} deleteNote={deleteNote}/>;
  }

  return (
    <div>
      <Header />
      <Input addNote={addNote} />
      <div className="note-container">{notes.map(addNotes)}</div>
      <Footer />
    </div>
  );
}

export default App;
