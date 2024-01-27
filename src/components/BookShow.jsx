// BookShow is a Parent Component of BookEdit
import { useState } from 'react';
// import BookEdit from './BookEdit';

export default function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);
  const [title, setTitle] = useState(book.title);
  const handleDeleteClick = () => {
    onDelete(book.id);
  };
  const handleEditClick = event => {
    setShowEdit(!showEdit);
    setTitle(title.event.target.value);
  };
  const handleSubmit = () => {
    setShowEdit(false);
  };

  const handleSubmit1 = event => {
    event.preventDefault();

    onEdit(book.id, title);
    onSubmit();
  };
  const handleChange = event => {
    setTitle(event.target.value);
  };
  // let content = <h2>{book.title}</h2>
  // showEdit ? content = <BookEdit book={book} onEdit={onEdit} onSubmit={handleSubmit} /> : content = <h2>{book.title}</h2>

  let content = <h2>{book.title}</h2>;
  if (showEdit) {
    // content = <BookEdit onSubmit={handleSubmit} onEdit={onEdit} book={book} />;
    content = <input className='input-edit' value={title} onChange={handleChange} />;
  }

  return (
    <div className='book'>
      <h2 className='title'>{content}</h2>
      <form onSubmit={handleSubmit1} className='book-edit'>
        <button className={showEdit ? 'button-edit' : 'button-update'} onClick={handleEditClick}>
          {showEdit ? 'Update' : 'Edit'}
        </button>
        <button className='button-delete' onClick={handleDeleteClick}>
          Delete
        </button>
      </form>
    </div>
  );
}
