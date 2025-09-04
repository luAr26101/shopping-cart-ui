import React, { useEffect, useState } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");

        if (!res.ok) throw new Error("Failed to fetch products.");

        const data = await res.json();
        console.log(data);
        setProducts(data);
      } catch (err) {
        console.log(err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="mb-6 text-3xl font-bold">🛒 Product Catalog</h1>
      {loading && <p>Loading...</p>}
      {error && <div className="error">❌ {error}</div>}

      <ProductList products={products} />
    </div>
  );
}

export default App;
