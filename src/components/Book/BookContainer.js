import React, { Fragment ,useEffect, useState, useCallback} from 'react';
import BookInfo from './BookInfo';
import BooksList from './BooksList';
import {getBooks} from "../../store/bookSlice";
import { useDispatch , useSelector } from "react-redux";

import './book.css';

const PostContainer = () => {
  const [selectedData, setSelectedData] = useState(null);
  const {isLoading , books} = useSelector(state => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks())
  }, [dispatch]);


  // const getBookHandler = useCallback((data) => {
  //   if (data) {
  //     setSelectedData(data);
  //     console.log(selectedData);
  //   }
  // }, []);
  

  const getBookHandler = (data) => {
    if (data) {
      setSelectedData(data);
      console.log(selectedData);
    }
  }
  


  


  return (
    <Fragment>
  
              <hr className='my-5' />
      <div className='row'>
        <div className='col'>
          <BooksList
          isLoading={isLoading}
          books={books}
          getBook={getBookHandler}
          
          />
        </div>
        <div className='col side-line'>
          <BookInfo data={selectedData} />
        </div>
      </div>
      

    </Fragment>
  );
};

export default PostContainer;
