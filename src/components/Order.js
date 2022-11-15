import React from 'react'

const Order = () => {
    return (
        <div>Order
            <table className='table'>
                <thead><tr>
                    <th scope="col">
                        <input type='checkbox' />
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
                </tr></thead>
                <tbody><tr>
                    <th scope="row"><input type='checkbox' /></th>
                    <td>Mark</td>
                    <td>
                        <button type="button" className="btn_primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            view
                        </button>


                    </td>
                </tr></tbody>
            </table>
            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order