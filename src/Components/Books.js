import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Books = (props) => {
  const { author, title, id } = props;
  const dispatch = useDispatch();
  const removeBookHandler = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div>
      <h4>{title}</h4>
      <p>{author}</p>
      <button type="button" onClick={() => removeBookHandler(id)}>Remove Book</button>
    </div>
  );
};

Books.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Books;
