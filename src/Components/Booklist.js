import React from 'react';
import { useSelector } from 'react-redux';
import Books from './Books';
import Inputform from './Inputform';

const Booklist = () => {
  const Booklist = useSelector((state) => state.book);
  return (
    <div>
      {Booklist.map((book) => (
        <Books key={book.id} title={book.title} author={book.author} id={book.id} />
      ))}
      <Inputform />
    </div>
  );
};

export default Booklist;
