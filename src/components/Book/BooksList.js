import React from 'react';

const BooksList = ({isLoading, books}) => {

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
      </ul>
      )}
      
    </div>
  );
};

export default BooksList;
