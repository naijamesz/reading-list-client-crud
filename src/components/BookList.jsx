// BookList component is a child component of App component and BookList= parent component and BookShow = child component.
import BookShow from './BookShow';
import useBooksContext from '../hooks/use-books-context';

export default function BookList() {
  const { books } = useBooksContext();

  
  const renderedBooks = books.map(book => {
    return <BookShow key={book.id} book={book} />;
  });

  return <div className='book-list'>{renderedBooks}</div>;
}
