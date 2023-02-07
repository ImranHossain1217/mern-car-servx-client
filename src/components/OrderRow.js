import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const OrderRow = ({ order }) => {
  const { price, serviceName, customer, phone, email, service, _id } = order;
  const [orderService, setOrderService] = useState({});

  const handleDelete = (id) => {
    const procced = window.confirm("Are You Sure,Cancel Your Order?");
    if (procced) {
      fetch(`https://mern-carservx-server.vercel.app/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.error("Order Cancel Seccessfully.");
          }
        });
    }
  };

  useEffect(() => {
    fetch(`https://mern-carservx-server.vercel.app/services/${service}`)
      .then((res) => res.json())
      .then((data) => setOrderService(data));
  }, [service]);
  return (
    <tr>
      <th>
        <label>
          <button onClick={() => handleDelete(_id)} className="btn btn-ghost">
            X
          </button>
        </label>
      </th>
      <td>
        <div class="avatar">
          <div class="mask mask-squircle w-20 h-20">
            <img src={orderService.img} alt={serviceName} />
          </div>
        </div>
      </td>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold">{serviceName}</div>
            <div className="text-sm opacity-50">Phone:{phone}</div>
          </div>
        </div>
      </td>
      <td>
        {serviceName}
        <br />
        <span className="badge badge-ghost badge-sm">${price}</span>
      </td>
      <td>{email}</td>
      <th>
        <button className="btn btn-ghost btn-xs">pending</button>
      </th>
    </tr>
  );
};

export default OrderRow;
