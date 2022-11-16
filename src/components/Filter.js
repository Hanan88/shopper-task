import React, { useState } from "react";

const Filter = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const filterForm = (
    <div className="filter_box">
      <div>
        <label htmlFor="basic-url">Purchase Date from</label>
        <input
          type="date"
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
        />
      </div>

      <div>
        <label htmlFor="basic-url">Purchase Date to</label>
        <input
          type="date"
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
        />
      </div>
      <div>
        <label htmlFor="basic-url">Total base from</label>
        <input
          type="number"
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
        />
      </div>
      <div>
        <label htmlFor="basic-url">Total base to</label>
        <input
          type="number"
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
        />
      </div>
      <div>
        <label htmlFor="basic-url">Total Purchase from</label>
        <input
          type="number"
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
        />
      </div>
      <div>
        <label htmlFor="basic-url">Total Purchase to</label>
        <input
          type="number"
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
        />
      </div>
      <div>
        <label htmlFor="basic-url">subTotal from</label>
        <input
          type="number"
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
        />
      </div>
      <div>
        <label htmlFor="basic-url">subTotal to</label>

        <input
          type="number"
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
        />
      </div>
      <div>
        <label htmlFor="basic-url">Shipping cost from</label>

        <input
          type="number"
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
        />
      </div>

      <div>
        <label htmlFor="basic-url">Shipping cost to</label>

        <input
          type="number"
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
        />
      </div>
      <div>
        <label htmlFor="basic-url">Refund from</label>

        <input
          type="number"
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
        />
      </div>
      <div>
        <label htmlFor="basic-url">Refund to</label>
        <input
          type="number"
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
        />
      </div>
      <div>
        <label htmlFor="basic-url">Bill to name</label>
        <input
          type="number"
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
        />
      </div>
      <div>
        <label htmlFor="basic-url">Ship to name</label>
        <input
          type="number"
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
        />
      </div>

      <div>
        <label htmlFor="status">status</label>
        <select name="status" id="status">
          {}
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>

      {/* <div className="w-50 mb-3"></div> */}
    </div>
  );

  return (
    <div>
      <button type="button" className="btn_filter" onClick={handleOpen}>
        Filters
      </button>

      {open ? filterForm : null}
    </div>
  );
};

export default Filter;
