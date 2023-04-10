import React from 'react';
import {useSelector} from 'react-redux';

const BooksList = ({isLoading, books}) => {
  const {error} = useSelector(state => state.books);


  const bookList = books.map((item) => (
  
<li key={item.id} className='list-group-item d-flex  justify-content-between align-items-center'>
          <div>{item.title}</div>
          <div className='btn-group' role='group'>
            <button type='button' className='btn btn-primary'>
              Read
            </button>
            <button type='button' className='btn btn-danger'>
              Delete
            </button>
          </div>
        </li>
  ));



  return (
    
    <div>
      <h2>Books List</h2>
      {isLoading ? ('Loading...') :
      (

        <ul className='list-group'>
        {bookList}
        {error && (
          <p>there is an error </p>
        )}

      </ul>
      )}
      
    </div>
  );
};

export default BooksList;
