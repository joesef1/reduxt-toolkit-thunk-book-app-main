import React, { Fragment ,useEffect} from 'react';
import BookInfo from './BookInfo';
import BooksList from './BooksList';
import {getBooks} from "../../store/bookSlice";
import { useDispatch , useSelector } from "react-redux";

import './book.css';

const PostContainer = () => {
  const {isLoading , books} = useSelector(state => state.books);
  const dispatch = useDispatch();

useEffect(() => {
  dispatch(getBooks())
}, [dispatch]);

  return (
    <Fragment>
      <hr className='my-5' />
      <div className='row'>
        <div className='col'>
          <BooksList
           isLoading={isLoading}
           books={books}
           />
        </div>
        <div className='col side-line'>
          <BookInfo />
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;