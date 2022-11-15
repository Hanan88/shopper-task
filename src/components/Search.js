import React from "react";
import Filter from "./Filter";

const Search = () => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="col-4 ms-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Search
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <Filter />
    </div>
  );
};

export default Search;
