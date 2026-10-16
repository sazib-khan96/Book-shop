import React from "react";

const Books = ({ book }) => {
  const { id, title, category, price, image } = book;

  return (
    <div className="text-center mt-8 py-5 md:p-8 bg-gray-100 mx-auto rounded-lg">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-xl font-bold">Product ID: {id}</h1>

        <img
          src={image}
          alt={title}
          className="w-[300px] h-[300px] object-contain mix-blend-multiply"
        />
      </div>

      <div className="flex-1">
        <h1 className="text-2xl font-bold mt-3">{title}</h1>

        <p className="py-5 text-gray-500">Category: {category}</p>

        <h3 className="py-5 text-2xl font-bold">Price: ${price}</h3>

        {/* {rating && (
          <p className="mb-5">
            ⭐ {rating.rate} ({rating.count} reviews)
          </p>
        )} */}
      </div>
    </div>
  );
};

export default Books;
