// BookList component = child component of App component.
import { useState, useEffect } from 'react';
import axios from 'axios';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

export default function App() {
  const [books, setBooks] = useState([]);
  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');

    setBooks(response.data);
  };

  // DONT DO THIS: Because it will cause an infinite loop
  // fetchBooks();

  useEffect(() => {
    fetchBooks();
  }, []);
  // Function to update the books array when a book is edited
  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle
    });
    console.log(response.data);
    const updatedBooks = books.map(book => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }

      return book;
    });

    setBooks(updatedBooks);
  };
  // Function to delete the books by id in array when a book is edited
  const deleteBookById = async id => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBooks = books.filter(book => {
      return book.id !== id;
    });
    // Update the state with the new books array
    setBooks(updatedBooks);
  };
  // Function to create a new book with a random id and the provided title

  const createBook = async title => {
    const response = await axios.post('http://localhost:3001/books', { title });
    const updatedBooks = [...books, response.data];
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
