import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/CardetailsStyles.css";

const CarDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState({});
  const [relatedCars, setRelatedCars] = useState([]);

  //initalp details
  useEffect(() => {
    if (params?.slug) getCar();
  }, [params?.slug]);
  //getCar
  const getCar = async () => {
    try {
      const { data } = await axios.get(`/api/v1/cars/get-car/${params.slug}`);
      setCar(data?.car);
      getSimilarCar(data?.car._id, data?.car.category._id);
    } catch (error) {
      console.log(error);
    }
  };

  //get similar car
  const getSimilarCar = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/cars/related-car/${pid}/${cid}`
      );
      setRelatedCars(data?.cars);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="row container car-details">
        <div className="col-md-6">
          <img
            src={`/api/v1/cars/car-photo/${car._id}`}
            className="card-img-top"
            alt={car.name}
            height="300"
            width={"350px"}
          />
        </div>
        <div className="col-md-6 car-details-info">
          <h1 className="text-center">Car Details</h1>
          <hr />
          <h6>Name : {car.name}</h6>
          <h6>Description : {car.description}</h6>
          <h6>
            Price :
            {car?.price?.toLocaleString("en-US", {
              style: "currency",
              currency: "NPR",
            })}
          </h6>
          <h6>Category : {car?.category?.name}</h6>
          <button class="btn btn-secondary ms-1">BOOK NOW</button>
        </div>
      </div>
      <hr />
      <div className="row container similar-cars">
        <h4>Similar Cars ➡️</h4>
        {relatedCars.length < 1 && (
          <p className="text-center">No Similar Cars found</p>
        )}
        <div className="d-flex flex-wrap">
          {relatedCars?.map((p) => (
            <div className="card m-2">
              <img
                src={`/api/v1/cars/car-photo/${p._id}`}
                className="card-img-top"
                alt={p.name}
              />
              <div className="card-body">
                <div className="card-name-price">
                  <h5 className="card-title">{p.name}</h5>
                  <h5 className="card-title card-price">
                    {p.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </h5>
                </div>
                <p className="card-text ">
                  {p.description.substring(0, 60)}...
                </p>
                <div className="card-name-price">
                  <button
                    className="btn btn-info ms-1"
                    onClick={() => navigate(`/car/${p.slug}`)}
                  >
                    More Details
                  </button>
                  {/* <button
                  className="btn btn-dark ms-1"
                  onClick={() => {
                    setCart([...cart, p]);
                    localStorage.setItem(
                      "cart",
                      JSON.stringify([...cart, p])
                    );
                    toast.success("Item Added to cart");
                  }}
                >
                  ADD TO CART
                </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CarDetails;
