import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Books = (props) => {
  const {
    type, author, title, id,
  } = props;
  const dispatch = useDispatch();
  const removeBookHandler = () => {
    dispatch(removeBook(id));
  };
  return (
    <div>
      <p>{type}</p>
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
  type: PropTypes.string.isRequired,
};

export default Books;
