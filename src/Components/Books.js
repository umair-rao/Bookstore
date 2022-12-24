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
    <div className="book">
      <div className="book-content">
        <div className="book-info">
          <h4 className="book-type">{type}</h4>
          <h2 className="book-title">{title}</h2>
          <h4 className="book-author">{author}</h4>
          <div className="action-buttons">
            <buttton className="comment-btn" type="button">Comments</buttton>
            <div className="divider" />
            <button className="remove-btn" type="button" onClick={() => removeBookHandler(id)}>Remove</button>
            <div className="divider" />
            <button className="edit-btn" type="button">Edit</button>
          </div>
        </div>
        <div className="progress-container">
          <div className="circular-progress-container">
            <div className="circular-progress" />
          </div>
          <div className="progress-stat">
            <p className="percent-complete">64%</p>
            <p className="completed">Completed</p>
          </div>
          <div className="progress-divider" />
          <div className="current-chapter-container">
            <div>
              <p className="current-chapter-label">CURRENT CHAPTER</p>
              <p className="current-chapter">Chapter 17</p>
            </div>
            <div>
              <button className="primary-button" type="button">UPDATE PROGRESS</button>
            </div>
          </div>
        </div>
      </div>
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
