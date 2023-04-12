import React from 'react';
import {useDispatch ,useSelector} from 'react-redux';
import { deleteBooks,readBook } from '../../store/bookSlice';

const BooksList = ({isLoading, books, getBook}) => {
  const {isLoggedIn} = useSelector(state => state.auth);
  const dispatch = useDispatch();


  const {error} = useSelector(state => state.books);


  const bookList =
  books.length > 0 ?
    books.map((item) => (
<li key={item.id} className='list-group-item d-flex  justify-content-between align-items-center'>
          <div>{item.title}</div>
          <div className='btn-group' role='group'>
            <button type='button' className='btn btn-primary'
            onClick={() => getBook(item)}
        
            >
              Read
            </button>
            <button onClick={()=>dispatch(deleteBooks(item)).unwrap()
              .then((originalPromiseResult) => {
                // console.log(originalPromiseResult);
                            })
              .catch((rejectedValueOrSerializedError) => {
                // handle error here
              })}
              
              type='button' className='btn btn-danger' disabled={!isLoggedIn}>
              Delete
            </button>
          </div>
        </li>
  ))
  : 'there is no books avilable';



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
