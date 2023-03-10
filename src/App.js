import React, {useState} from 'react';
import Header from './Components/Header/Header';
import CreateArea from './Components/CreateArea/CreateArea';
import Note from './Components/Note/Note';
import Footer from './Components/Footer/Footer';
import './App.css';


function App() {

const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote]
    })
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map((noteItem, index) => (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
      ))}
      <Footer />
    </div>
  )}

export default App;
