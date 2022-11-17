import React from "react";
import { CSVLink, CSVDownload } from "react-csv";
import { CiExport } from "react-icons/ci";

const Order = ({ filterOrders, setFilterOrders }) => {
  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempOrder = filterOrders.map((order) => {
        return { ...order, isChecked: checked };
      });
      setFilterOrders(tempOrder);
    } else {
      let tempOrder = filterOrders.map((order) =>
        order.customerName === name ? { ...order, isChecked: checked } : order
      );
      setFilterOrders(tempOrder);
    }
  };
  const FilterData = filterOrders.map((order) => (
    <tr key={order.id}>
      <td scope="row">
        <input
          type="checkbox"
          name={order.customerName}
          onChange={handleChange}
          checked={order?.isChecked || false}
        />
      </td>
      <td>{order.id}</td>
      <td>{order.orderDate}</td>
      <td>{order.billName}</td>
      <td>{order.shippingName}</td>
      <td>{order.grandTotalBase}</td>
      <td>{order.grandTotalPurchased}</td>
      <td>{order.status}</td>
      <td>{order.billAddress}</td>
      <td>{order.shippingAddress}</td>
      <td>{order.customerEmail}</td>
      <td>{order.customerGroup}</td>
      <td>{order.subTotal}</td>
      <td>{order.shippingFees}</td>
      <td>{order.customerName}</td>
      <td>{order.paymentMethod}</td>
      <td>{order.totalRefund}</td>
    </tr>
  ));

  return (
    <div>
      <CSVLink data={filterOrders}>
        <CiExport className="table-svg" />
      </CSVLink>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">
              <input type="checkbox" name="allSelect" onChange={handleChange} />
            </th>
            <th scope="col">ID</th>
            <th scope="col">Order Created</th>
            <th scope="col">Bill to time</th>
            <th scope="col">Bill to name</th>
            <th scope="col">Grad total(Base)</th>
            <th scope="col">Grad total(Purchased)</th>
            <th scope="col">status</th>
            <th scope="col">Billing Address</th>
            <th scope="col">Shipping Address</th>
            <th scope="col">Customer Email</th>
            <th scope="col">Customer Group</th>
            <th scope="col">Subtotal</th>
            <th scope="col">Shipping Fees</th>
            <th scope="col">Customer Name</th>
            <th scope="col">Payment Method</th>
            <th scope="col">total Refund</th>
          </tr>
        </thead>
        <tbody>{filterOrders ? FilterData : null}</tbody>
      </table>
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
