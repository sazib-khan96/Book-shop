import React from "react";
import imgs from "../../assets/bookimg.png";
import { useNavigate } from "react-router";

const HeroBanner = () => {

    const navigate = useNavigate()
    const backToProduct =() => {
        navigate('/products')
    }
  return (
    <div className="py-20 bg-amber-300 rounded-b-3xl">
      <div className="md:text-center">
        <img
          alt="Tailwind CSS hero component"
          src={imgs}
          className="mx-auto rounded-lg max-w-4xl"
        />
        <div className="text-center">
          <h1 className="text-5xl font-bold">Book Vive</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button onClick={backToProduct} className="btn btn-primary my-btn">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
