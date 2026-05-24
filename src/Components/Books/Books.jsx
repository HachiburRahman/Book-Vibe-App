import React from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
    return (
        <div className='text-center text-2xl font-bold p-5'>
            <h1>Books</h1>
            <ul className=" grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    data.map(singleBook=><Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                }
            </ul>
        </div>
    );
};

export default Books;