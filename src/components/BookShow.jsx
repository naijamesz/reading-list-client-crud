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

  let content = <h3 className="title">{book.title}</h3>;
  if (showEdit) {
    // content = <BookEdit onSubmit={handleSubmit} onEdit={onEdit} book={book} />;
    content = <input className='input is-medium is-rounded' style={{marginBottom:'.25rem'}} value={title} onChange={handleChange} />;
  }

  return (
    <div className='book-show'>
    <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
      <h3 className="title">{content}</h3>
      <div classNames="actions">
      <form onSubmit={handleSubmit1} className=''>
        <button className={showEdit ? 'edit' : 'edit'} onClick={handleEditClick}>
Edit</button>
        <button className='delete' onClick={handleDeleteClick}>
          Delete
        </button>
      </form>
        
      </div>
    </div>
  );
}
