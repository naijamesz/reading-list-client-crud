// BookList component = child component of App component.
import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

export default function App() {
  const [books, setBooks] = useState([]);

  // Function to update the books array when a book is edited
  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map(book => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }

      return book;
    });

    setBooks(updatedBooks);
  };
  // Function to delete the books by id in array when a book is edited
  const deleteBookById = id => {
    const updatedBooks = books.filter(book => {
      return book.id !== id;
    });
    // Update the state with the new books array
    setBooks(updatedBooks);
  };
  // Function to create a new book with a random id and the provided title
  const createBook = title => {
    const updatedBooks = [
      ...books,
      {
        id: Math.round(Math.random() * 9999),
        title,
      },
    ];
    // Update the state with the new books array
    setBooks(updatedBooks);
  };

  return (
    <>
      <div className='app'>
        <h1>Reading List</h1>
        <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
        <BookCreate onCreate={createBook} />
      </div>
    </>
  );
}

