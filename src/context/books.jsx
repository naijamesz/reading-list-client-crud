import { createContext, useState } from 'react';
import axios from 'axios';

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');
    
    setBooks(response.data);
  };

  // Function to update the books array when a book is edited
  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
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
    // Update the state with the new books array after deletion
    setBooks(updatedBooks);
  };

  // Function to create a new book with a random id and the provided title
  const createBook = async title => {
    const response = await axios.post('http://localhost:3001/books', { title });
    const updatedBooks = [...books, response.data];
    // Update the state with the new books array
    setBooks(updatedBooks);
  };

  const valueToShare = {
    books,
    deleteBookById,
    editBookById,
    createBook,
    fetchBooks
  };

  return <BooksContext.Provider value={valueToShare}>{children}</BooksContext.Provider>;
}

export {Provider}
export default BooksContext;
