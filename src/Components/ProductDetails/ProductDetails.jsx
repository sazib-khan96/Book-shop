import React from "react";
import { useLoaderData, useNavigate } from "react-router";


const ProductDetails = () => {
  const navigate = useNavigate();
  const productDetail = useLoaderData();

  const { id, title, image, price, category, description, rating } =
    productDetail;

  const goBackHandle = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col md:flex-row gap-10 mt-8 max-w-5xl p-8 bg-gray-100 mx-auto rounded-lg">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-xl font-bold">Product ID: {id}</h1>

        <img
          src={image}
          alt={title}
          className="w-[300px] h-[300px] object-contain mix-blend-multiply"
        />

        <button
          onClick={goBackHandle}
          className="border px-4 py-2 bg-amber-200 rounded"
        >
          Go Back
        </button>
      </div>

      <div className="flex-1">
        <h1 className="text-3xl font-bold mt-3">{title}</h1>

        <p className="py-5 text-gray-500">Category: {category}</p>

        <p className="leading-7">{description}</p>

        <h3 className="py-5 text-2xl font-bold">Price: ${price}</h3>

        {rating && (
          <p className="mb-5">
            ⭐ {rating.rate} ({rating.count} reviews)
          </p>
        )}

        <div className="flex flex-wrap gap-3">
          <button className="my-btn">Order Now</button>

          <button className="border px-4 py-2 rounded">Add to wishlist</button>
        </div>
        <button>
          <a
            href="https://wa.me/8801962523796"
            target="blank"
            rel="noopener noreferrer"
          ></a>
          Whats App
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
