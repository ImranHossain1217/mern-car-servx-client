import React, { useContext, useEffect, useState } from "react";
import OrderRow from "../components/OrderRow";
import { AuthContext } from "../context/AuthProvider";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`https://mern-carservx-server.vercel.app/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  });
  return (
    <div>
      <h2 className="text-3xl my-5 uppercase font-semibold text-center">
        You Have {orders.length} Orders
      </h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-11/12 my-10 mx-auto">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Name</th>
              <th>Title</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <OrderRow key={order._id} order={order}></OrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
