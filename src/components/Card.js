import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Spinner } from "reactstrap";
import "./Card.css";

const Card = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState(false);

  const [nasa, setNasa] = useState(null);
  const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_MY_API_KEY}`;

  const fetchImg = async () => {
    try {
      const resp = await axios(url);
      setNasa(resp.data);
    } catch (error) {
      setError(true);
      console.log(error);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchImg();
  }, []);

  if (isLoading)
    return (
      <div className="mt-5 d-flex justify-content-center align-content-center bg-white">
        <Spinner color="primary" type="grow">
          Loading...
        </Spinner>
        <Spinner color="secondary" type="grow">
          Loading...
        </Spinner>
        <Spinner color="success" type="grow">
          Loading...
        </Spinner>
        <Spinner color="danger" type="grow">
          Loading...
        </Spinner>
        <Spinner color="warning" type="grow">
          Loading...
        </Spinner>
        <Spinner color="info" type="grow">
          Loading...
        </Spinner>
        <Spinner color="secondary" type="grow">
          Loading...
        </Spinner>
        <Spinner color="dark" type="grow">
          Loading...
        </Spinner>
        <Spinner color="success" type="grow">
          Loading...
        </Spinner>
        <Spinner color="danger" type="grow">
          Loading...
        </Spinner>
      </div>
    );
  if (isError)
    return (
      <h2 className="text-danger fs-1 bg-white text-center mt-5">
        Fatal Error!!! Go back... :(((
      </h2>
    );

  return (
    <div>
      <div className="text-center p-5">
        <h3 className="text-white mb-5 fs-1">Astronomy Picture of the Day</h3>
        <p className="text-white fs-5">
          Discover the cosmos! Each day a different image or photograph of our
          fascinating universe is featured, along with a brief explanation
          written by a professional astronomer.
        </p>
        <p className="text-danger mt-4 fs-5">
          Today's Date:
          <span className="text-white"> {nasa.date}</span>
        </p>
        <div className="g-info bg-opacity-10 border border-info rounded-end border-3">
          <img src={nasa.url} className="w-100" alt="" />
        </div>
        <p className="text-danger mt-4 fs-5">
          Name:
          <span className="text-white"> {nasa.title}</span>
        </p>
        <p className="text-danger mt-4 fs-5">
          Image Credit & Copyright:
          <span className="text-white"> {nasa.copyright}</span>
        </p>
        <p className="text-danger mt-4 fs-5">
          Explanation :<span className="text-white"> {nasa.explanation}</span>
        </p>
      </div>
    </div>
  );
};
export default Card;
