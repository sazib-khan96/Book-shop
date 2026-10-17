import React from "react";

const ReadListBook = ({ list }) => {
    console.log(list)
    const {title,price, rating ,brand,image} = list
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="card-body items-center text-center flex">
        <div>
            <img src={image} alt=""  className="w-20"/>
        </div>
        
        <div className="flex justify-between gap-8 p-3">
           <h2 className="card-title">{title}</h2>
           <p className="text-blue-500 font-bold">{price}</p>  
        </div>
      </div>
      <div className="flex gap-5">
        <button className="my-btn mt-5">Romove Item</button>
        <button className="border px-3 mt-5">Buy Now</button>
      </div>
    </div>
  );
};

export default ReadListBook;
