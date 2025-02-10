import React from 'react';
import RandomImage from './RandomImage';
import Footer from './Footer';
const Search = () => {
  return (
    <>
      <div>
        <form className="d-flex search">
          <input 
            style={{ backgroundColor: "black" }} 
            className="form-control me-2" 
            type="search" 
            placeholder="Search" 
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        <div>
        <RandomImage/>  
        </div>
      </div>
      <div className="m-5"><Footer /></div>
    </>
  );
};

export default Search;
