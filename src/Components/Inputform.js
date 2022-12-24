import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const Inputform = () => {
  const [data, setData] = useState({
    title: '',
    author: '',
    category: 'Fiction',
  });
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      ...data,
    };
    dispatch(addBook(newBook));
  };
  return (
    <div>
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form className="add-form">
        <input
          className="input title-input"
          type="text"
          name="title"
          value={data.title}
          onChange={changeHandler}
          placeholder="Book Title"
        />
        <input
          className="input category-input"
          type="text"
          name="author"
          value={data.author}
          onChange={changeHandler}
          placeholder="Author"
        />
        <button type="submit" className="add-book-btn" onClick={submitHandler}>Add Book</button>
      </form>
    </div>
  );
};

export default Inputform;
