import React, { useEffect, useState } from "react";

const Filter = () => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState([]);
  const [filtersValue, setFiltersValue] = useState({
    purchaseDateFrom: "",
    purchaseDateTo: "",
    status: "",
    totalBaseFrom: "",
    totalBaseTo: "",
    totalPurchaseFrom: "",
    totalPurchaseTo: "",
    subTotalFrom: "",
    subTotalTo: "",
    shippingCostFrom: "",
    shippingCostTo: "",
    refundFrom: "",
    refundTo: "",
    billToName: "",
    shipToName: "",
  });
  const {
    purchaseDateFrom,
    purchaseDateTo,
    // status,
    totalBaseFrom,
    totalBaseTo,
    totalPurchaseFrom,
    totalPurchaseTo,
    subTotalFrom,
    subTotalTo,
    shippingCostFrom,
    shippingCostTo,
    refundFrom,
    refundTo,
    billToName,
    shipToName,
  } = filtersValue;
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
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFiltersValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const filterForm = (
    <div className="filter_box">
      <div>
        <label htmlFor="basic-url">Purchase Date from</label>
        <input
          type="date"
          name="purchaseDateFrom"
          value={purchaseDateFrom}
          onChange={handleChange}
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
        />
      </div>
      <div>
        <label htmlFor="basic-url">Purchase Date to</label>
        <input
          type="date"
          name="purchaseDateTo"
          value={purchaseDateTo}
          onChange={handleChange}
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
        />
      </div>
      <div>
        <label htmlFor="status">status</label>
        <select
          name="status"
          id="status"
          className="form-select"
          onChange={handleChange}
        >
          {status.length > 0
            ? status.map((item) => (
                <option value={item.name} key={item.id} name={item.status}>
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
          name="totalBaseFrom"
          value={totalBaseFrom}
          onChange={handleChange}
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
        />
      </div>

      <div>
        <label htmlFor="basic-url">Total base to</label>
        <input
          type="number"
          name="totalBaseTo"
          value={totalBaseTo}
          onChange={handleChange}
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
        />
      </div>

      <div>
        <label htmlFor="basic-url">Total Purchase from</label>
        <input
          type="number"
          name="totalPurchaseFrom"
          value={totalPurchaseFrom}
          onChange={handleChange}
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
        />
      </div>
      <div>
        <label htmlFor="basic-url">Total Purchase to</label>
        <input
          type="number"
          name="totalPurchaseTo"
          value={totalPurchaseTo}
          onChange={handleChange}
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
        />
      </div>

      <div>
        <label htmlFor="basic-url">subTotal from</label>
        <input
          type="number"
          name="subTotalFrom"
          value={subTotalFrom}
          onChange={handleChange}
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
        />
      </div>
      <div>
        <label htmlFor="basic-url">subTotal to</label>

        <input
          type="number"
          name="subTotalTo"
          value={subTotalTo}
          onChange={handleChange}
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
        />
      </div>

      <div>
        <label htmlFor="basic-url">Shipping cost from</label>

        <input
          type="number"
          name="shippingCostFrom"
          value={shippingCostFrom}
          onChange={handleChange}
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
        />
      </div>
      <div>
        <label htmlFor="basic-url">Shipping cost to</label>

        <input
          type="number"
          name="shippingCostTo"
          value={shippingCostTo}
          onChange={handleChange}
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
        />
      </div>

      <div>
        <label htmlFor="basic-url">Refund from</label>

        <input
          type="number"
          name="refundFrom"
          value={refundFrom}
          onChange={handleChange}
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
        />
      </div>
      <div>
        <label htmlFor="basic-url">Refund to</label>
        <input
          type="number"
          name="refundTo"
          value={refundTo}
          onChange={handleChange}
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
        />
      </div>
      <div>
        <label htmlFor="basic-url">Bill to name</label>
        <input
          type="text"
          name="billToName"
          value={billToName}
          onChange={handleChange}
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
        />
      </div>
      <div>
        <label htmlFor="basic-url">Ship to name</label>
        <input
          type="text"
          name="shipToName"
          value={shipToName}
          onChange={handleChange}
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
        />
      </div>
    </div>
  );

  console.log(filtersValue, "filtersValue");
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
