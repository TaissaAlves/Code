import './style.css';
import React, { useEffect, useState } from 'react';
import Note from '../../components/Note';
import Repository from '../../components/Repository';

export default function Home() {
 const [notes, setNotes] = useState([])
 const [count, setCount] = useState(0)

useEffect(() =>{
  setCount(notes.length);
}, [notes])

  const addNote = () => {
    const newNote = {
      id: Date.now(),
      text: ''
    };
    //os três pontos serve para dizer que eu quero manter o conteúdo de notes, mas adicionar o newNote, então é como um push, adiciona 
    //a nota no final do array  
    setNotes ([...notes, newNote])
  };

  const updateNote = (id, text) =>{
    setNotes (notes.map ((note) => (note.id === id ? {...note, text} : note)))
  }

  //filter, filtra o vetor, então, no array atual, quero todas as notas em que o id seja diferente do id atual (assim, remove o id passado)
  const deleteNote = (id) => {
    setNotes (notes.filter((note) => note.id !== id));
  }

  return (
    <div id='container'>
      <h1 id='titulo'>Sistema de Notas</h1>
      <button className='btn' onClick={addNote}>Adicionar Nota</button>
      <p className='paragraph'>Quantidade de Notas: {count}</p>
     {notes.map((note) => {
      return(
        <Note note = {note} updateNote={updateNote} deleteNote={deleteNote}></Note>
      )
     })}
      <h2 id='subtitulo'>Repositório de notas</h2>
      {notes.map(note => (<Repository note={note} />))}
    </div>
  );
}