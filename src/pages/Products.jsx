import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../slices/productSlice";
import { Link } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p className="text-center">Loading products...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {items.map((product) => (
        <div key={product._id} className="border rounded-lg shadow p-4">
          <img
            src={product.image}
            alt={product.name}
            className="h-40 w-full object-cover rounded"
          />
          <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
          <p className="text-gray-600">₹{product.price}</p>
          <Link
            to={`/products/${product._id}`}
            className="block mt-2 bg-blue-600 text-white py-1 px-3 rounded text-center"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
