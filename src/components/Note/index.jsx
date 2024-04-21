import './style.css';

//Eu preciso passar um value sempre na função react.
//O onChange olha se o estado muda, se mudar, ele excuta o updateNote, onde e (evento), diz que o target desejado do evento é o value

export default function Note({ note, updateNote, deleteNote}) {
  return (
    <div className='note'>
      <textarea 
       value={note.text}
       onChange={(e) => updateNote(note.id, e.target.value)}
       cols="50" rows="4"/>
      <button className='btn' onClick={() => deleteNote(note.id)}>Deletar</button>
    </div>
  );

}