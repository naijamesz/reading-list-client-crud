// BookList component is a child component of App component and BookList= parent component and BookShow = child component.
import BookShow from './BookShow';

export default function BookList({ books, onDelete, onEdit }) {
  const renderedBooks = books.map(book => {
    return (
      <>
        <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />
      </>
    );
  });

  return <div className='book-list'>{renderedBooks}</div>;
}
