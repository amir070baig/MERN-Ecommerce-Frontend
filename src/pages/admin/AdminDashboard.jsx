import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="space-x-4">
        <Link
          to="/admin/products"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Manage Products
        </Link>
        <Link
          to="/admin/orders"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Manage Orders
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
