import React, { Fragment, useEffect } from 'react';

const BookInfo = ({data}) => {
// console.log(data);
useEffect(() => {
  console.log(data);
}, [data]);


  return (
    <Fragment>
      <h2>Book Details</h2>
      <div className='alert alert-secondary' role='alert'>
        There is no books selected yet. Please select!
      </div>
      <div>
      {/* <p className='fw-bold'> Title: {data.title}</p> */}
        {/* <p className='fw-light'>Description: {Info.Description}</p> */}
        {/* <p className='fst-italic'>Price: {Info.price}</p>  */}
      </div>
    </Fragment>
  );
};

export default BookInfo;
