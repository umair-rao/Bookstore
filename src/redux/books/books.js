const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

export const addBook = (book) => (dispatch) => {
  dispatch({ type: ADD_BOOK, payload: book });
};

export const removeBook = (id) => (dispatch) => {
  dispatch({ type: REMOVE_BOOK, payload: id });
};

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default booksReducer;
