// BookEdit component = child component of BookShow component.
import { useState } from 'react';
export default function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);

  const handleChange = event => {
    setTitle(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(book.id, title);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='book-edit'>
        <input className='input is-rounded' value={title} onChange={handleChange} />
        <button className='button is-primary'>Save</button>
      </form>
    </>
  );
}
