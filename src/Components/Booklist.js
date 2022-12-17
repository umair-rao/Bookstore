import React from 'react';
import Books from './Books';
import Inputform from './Inputform';

const Booklist = () => (
  <div>
    <h2>My Book List</h2>
    <Books author="Robert" title="Death Case" />
    <Books author="Iqbal" title="Shikwa" />
    <Inputform />
  </div>
);

export default Booklist;
