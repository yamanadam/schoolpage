import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  return (
    <div className="container ">
      <div className=" row text-center d-flex justify-content-center  ">
        <div className="col-sm-12 col-md-6 col-lg-4">
          <h5>Our Exam Achievements</h5>
          <p>The best academy certificate of the year</p>
          <button onClick={() => navigate("exam")} className="btn btn-success">
            Detail
          </button>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <h5>Our Sporting Achievements</h5>
          <p>Interscholastic football tournament Dec. 1.</p>
          <button
            onClick={() => navigate("sporting")}
            className="btn btn-success"
          >
            Detail
          </button>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <h5>Our Social And Cultural Achievements</h5>
          <p>Interscholastic football tournament Dec. 1.</p>
          <button
            onClick={() => navigate("social")}
            className="btn btn-success"
          >
            Detail
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Success;
