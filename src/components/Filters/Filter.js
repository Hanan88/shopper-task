import React, { useEffect, useState } from "react";

const Filter = () => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState([]);

  const getStatus = () => {
    fetch(process.env.PUBLIC_URL + "Data/Status.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setStatus(data.status);
      });
  };
  useEffect(() => {
    getStatus();
  }, []);

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
        <label htmlFor="status">status</label>
        <select name="status" id="status" className="form-select">
          {status.length > 0
            ? status.map((item) => (
                <option value={item.id} key={item.id}>
                  {item.status}
                </option>
              ))
            : null}
        </select>
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
    </div>
  );
  return (
    <div className="text-end">
      <button type="button" className="btn_filter" onClick={handleOpen}>
        Filters
      </button>

      {open ? filterForm : null}
    </div>
  );
};

export default Filter;
