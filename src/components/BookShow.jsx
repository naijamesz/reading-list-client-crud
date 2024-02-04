// BookShow is a Parent Component of BookEdit
import { useState } from 'react';
import BookEdit from './BookEdit';

export default function BookShow({ book, onDelete, onEdit }) {
  // state
  const [showEdit, setShowEdit] = useState(false);
  // const [title, setTitle] = useState(book.title);

  const handleDeleteClick = () => {
    onDelete(book.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };

  // let content = <h2>{book.title}</h2>
  // showEdit ? content = <BookEdit book={book} onEdit={onEdit} onSubmit={handleSubmit} /> : content = <h2>{book.title}</h2>

  let content = (
    <h4 className='title' style={{ fontSize: '1.5rem', padding: '0rem 0rem', fontWeight: '400' }}>
      {book.title}
    </h4>
  );
  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} onEdit={onEdit} book={book} />;
    // } else {
    //   content = (
    //     <input
    //       className='input is-rounded'
    //       style={{ fontSize: '1.75rem', top: '0rem', padding: '0rem', height: '2rem', marginBottom: '.25rem' }}
    //       value={title}
    //       onChange={handleChange}
    //     />
    //   );
  }

  return (
    <div className='book-show'>
      <img alt='books' src={`https://picsum.photos/seed/${book.id}/300/200`} />
      <h4 className='title' style={{ marginBottom: '0.5rem', padding: '0rem 0rem' }}>
        {content}
      </h4>
      <div classNames='actions'>
        <button className='edit' style={{ padding: '1rem' }} onClick={handleEditClick}>
          Edit
        </button>
        <button className='delete' style={{ padding: '1rem' }} onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}
