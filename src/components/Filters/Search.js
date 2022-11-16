import React, { useState } from "react";

const Search = ({ orders, setOrders, filterOrders, setFilterOrders }) => {
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
    setFilterOrders(filterData);
  };
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    handleFilter(searchTerm)
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
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Search;
