// BookEdit component = child component of BookShow component.
import { useState } from 'react';
export default function BookEdit({ book, onEdit, onSubmit }) {
  const [title, setTitle] = useState(book.title);

  const handleChange = event => {
    setTitle(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    onEdit(book.id, title);
    onSubmit();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='book-edit'>
        <input className='input-edit' value={title} onChange={handleChange} />
        <button className='button-save'>Save</button>
      </form>
    </>
  );
}
