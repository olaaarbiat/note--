import React, { useState } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([{ id: 1, content: '', backgroundColor: '#f8f8ff' }]);

  const addNote = () => {
    const newNote = {
      id: Math.random(),
      content: '',
      backgroundColor: '#f8f8ff'
    };
    setNotes([...notes, newNote]);
  };

  const handleNoteChange = (id, content) => {
    const updatedNotes = notes.map(note => {
      if (note.id === id) {
        return { ...note, content };
      }
      return note;
    });
    setNotes(updatedNotes);
  };

  const handleNoteColorChange = (id, color) => {
    const updatedNotes = notes.map(note => {
      if (note.id === id) {
        return { ...note, backgroundColor: color };
      }
      return note;
    });
    setNotes(updatedNotes);
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="App">
      <h1>My Notes</h1>
      <div className="notes-grid">
        {notes.map(note => (
          <Note key={note.id} id={note.id} content={note.content} backgroundColor={note.backgroundColor} onNoteChange={handleNoteChange} onNoteColorChange={handleNoteColorChange} />
        ))}
        <div className="note add-note" onClick={addNote}>
          <span>+</span>
        </div>
      </div>
    </div>
  );
}

function Note({ id, content, backgroundColor, onNoteChange, onNoteColorChange }) {
  const handleChange = (e) => {
    onNoteChange(id, e.target.value);
  };

  const handleColorChange = () => {
    const newColor = getRandomColor();
    onNoteColorChange(id, newColor);
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="note" style={{ backgroundColor, borderRadius: '10px' }}>
      <textarea value={content} onChange={handleChange} placeholder="Write your note here..."></textarea>
      <button onClick={handleColorChange}>Change Color</button>
    </div>
  );
}

export default App;
