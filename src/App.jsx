// BookList component = child component of App component.
import { useContext, useEffect } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from './context/books';

export default function App() {
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
      <div className='app'>
        <h1>Reading List</h1>
        <BookList />
        <BookCreate />
      </div>
    </>
  );
}
