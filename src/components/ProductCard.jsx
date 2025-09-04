function ProductCard({ product }) {
  return (
    <div
      key={product.id}
      className="shdadow flex flex-col rounded-lg bg-white p-4"
    >
      <img
        src={product.image}
        alt={product.name}
        className="mb-4 h-40 rounded object-cover"
      />
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="mb-2 text-sm text-gray-500">{product.description}</p>
      <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
    </div>
  );
}

export default ProductCard;
