import React, {useRef} from 'react';
import { useDispatch ,useSelector } from "react-redux";
import {insertBook} from "../store/bookSlice";
import { isDisabled } from '@testing-library/user-event/dist/utils';


const Addform = () => {
  const {isLoggedIn} = useSelector(state => state.auth);

  const dispatch = useDispatch();

  //refs
  const title = useRef(null);
  const price = useRef(null);
  const Description = useRef(null);

  const handelSubmit = (e) => {
    e.preventDefault();
    const databook ={
      title: title.current.value,
      price: price.current.value,
      Description: Description.current.value
    };
    dispatch(insertBook(databook));
    title.current.value = '';
    price.current.value = '';
    Description.current.value = '';
    };


  
  return (
    <div className='row'>
      <div className='col-6 offset-3 mt-3'>
        <h2>Insert Book</h2>
        <form onSubmit={handelSubmit}>
          <div className='form-group'>
            <label htmlFor='title'>Title</label>
            <input type='text' className='form-control' id='title' required ref={title} />
          </div>
          <div className='form-group'>
            <label htmlFor='price'>Price</label>
            <input type='number' className='form-control' id='price' required ref={price} />
          </div>
          <div className='form-group'>
            <label  htmlFor='Description'>Description</label>
            <textarea
            ref={Description}
              className='form-control'
              id='Description'
              rows='3'
              required
            ></textarea>
          </div>
          <button type='submit' className='btn btn-primary' disabled={!isLoggedIn}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addform;
