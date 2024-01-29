// BookEdit component = child component of BookShow component.
import { useState } from 'react';
export default function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);

  const handleChange = e => {
    setTitle(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(book.id, title);
    // onSubmit();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='book-edit'>
        <input className='input' value={title} onChange={handleChange} />
        <button className='button is-primary'>Save</button>
      </form>
    </>
  );
}
