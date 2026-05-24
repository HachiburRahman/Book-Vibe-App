import React from 'react';

const Book = ({singleBook}) => {
    console.log(singleBook)
    const {bookName,image}=singleBook;
    return (
       <div className="card bg-base-100 w-88 shadow-sm border-gray-300 border mx-auto">
  <figure className='bg-gray-100 p-3 rounded-xl'>
    <img className='h-40 bg-gray-100'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Card Title
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
    );
};

export default Book;