import './style.css';

export default function Repository({ note }) {
  return (
    <div id='repository'>
      <p className='paragraph'>ID: {note.id}</p>
      <p className='paragraph'>Conteúdo: {note.text}</p>
    </div>
  );
}