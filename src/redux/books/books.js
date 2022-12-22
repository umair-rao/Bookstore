export const addBook = (book) => ({
  type: 'add',
  payload: book,
});

export const removeBook = (book) => ({
  type: 'remove',
  payload: book,
});
