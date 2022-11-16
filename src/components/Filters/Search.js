import React, { useState } from "react";

const Search = ({ orders, setOrders }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleFilter = (customerName) => {
    const filterData = orders.filter((item) => {
      if (
        item.customerName
          .toString()
          .toLowerCase()
          .includes(customerName.toLowerCase())
      ) {
        return item;
      }
    });
    setOrders(filterData);
  };

  console.log(searchTerm, "====");
  return (
    <div className=" ">
      <div className="col-4 ms-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Search
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
