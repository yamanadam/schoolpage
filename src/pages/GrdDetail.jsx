import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import NotFound from "./NotFound";

const GrdDetail = () => {
  //   const { state: person } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  const [error, setError] = useState(false);
  const [person, setPerson] = useState("");

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        if (!res.ok) {
          setError(true);
          throw new Error("Something went wrong");
        }
        return res.json();
      })
      .then((data) => {
        setPerson(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (error) {
    return <NotFound />;
  } else if (!person) {
    return (
      <div>
        <h3 className="text-danger">Data Loading...</h3>
      </div>
    );
  } else {
    return (
      <>
        <div className="container text-center">
          <h4>
            {" "}
            {person.first_name} {person.last_name}
          </h4>
          <img className="rounded" src={person.avatar} alt="img" />
          <p>{person.email}</p>
        </div>
        <div className="container text-center mt-4">
          <button onClick={() => navigate(-1)} className="btn btn-info me-2">
            Back
          </button>
          <button onClick={() => navigate("/")} className="btn btn-info">
            Home
          </button>
        </div>
      </>
    );
  }
};

export default GrdDetail;
