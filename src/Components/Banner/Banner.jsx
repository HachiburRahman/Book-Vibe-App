/* eslint-disable no-unused-vars */
import React from 'react';
import bookImg from "../../assets/books.jpg"
import bookImg1 from "../../assets/pngwing 1.png"

const Banner = () => {
    return (
        <div className="hero bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img className='h-90'
      src={bookImg1}
    />
    <div>
      <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
      <p className="py-2">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary bg-[#23BE0A] text-white">View The Listg</button>
    </div>
  </div>
</div>
    );
};

export default Banner;