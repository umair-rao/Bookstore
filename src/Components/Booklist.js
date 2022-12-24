import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../redux/books/books';
import Books from './Books';
import Inputform from './Inputform';

const Booklist = () => {
  const books = useSelector((state) => state.book);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return (
    <div className="book-list">
      <div>
        {books.map((book) => (
          <Books
            key={Math.random()}
            type={book.category}
            title={book.title}
            author={book.author}
            id={book.item_id}
          />
        ))}
      </div>
      <div className="horizontal-divider" />

      <Inputform />
    </div>
  );
};

export default Booklist;
