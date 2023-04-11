import React from 'react';
import { useDispatch , useSelector } from "react-redux";
import {logInOut} from "../store/authSlice";


const Header = () => {
  const dispatch = useDispatch();
  const {isLoggedIn} = useSelector(state => state.auth);

  return (
    <nav className='navbar navbar-dark bg-dark'>
      <span className='navbar-brand mb-0 h1'>My Books</span>

      <button className='btn btn-outline-primary'
      type='submit'
      onClick={() => dispatch(logInOut())}
      >
        {isLoggedIn? 'Log out' : 'Log in'}
      </button>
    </nav>
  );
};

export default Header;
