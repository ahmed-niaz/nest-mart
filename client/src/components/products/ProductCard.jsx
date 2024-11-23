const ProductCard = ({ product }) => {
  const { image, title, brand, category, price, description } = product;

  return (
    <div className="card shadow-xl w-full">
      <figure>
        <img
          src={image}
          alt={title}
          className="h-[220px] w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-xs">
          {description && description.length > 0
            ? description.length < 50
              ? description
              : `${description.slice(0, 50)}...`
            : "No description available"}
        </p>
        <p className="text-gray-500 text-sm">Brand: {brand}</p>
        <p className="text-gray-500 text-sm">Category: {category}</p>
        <p className="font-bold text-lg">${price?.toFixed(2)}</p>
        <div className="card-actions justify-end">
          <button className="btn bg-black border-none rounded-none hover:text-red-600  text-white">
            details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
