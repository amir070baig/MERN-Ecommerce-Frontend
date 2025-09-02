import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../slices/productSlice";
import { addToCart } from "../slices/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        _id: product._id,
        name: product.name,
        price: product.price,
        image: product.image,
        qty: 1,
      })
    )
  };

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!product) return null;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-80 object-cover rounded"
      />
      <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
      <p className="text-lg text-gray-600 mt-2">₹{product.price}</p>
      <p className="mt-4">{product.description}</p>
      <button
        onClick={handleAddToCart}
        className="mt-4 bg-green-600 text-white py-2 px-4 rounded">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
