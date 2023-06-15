import React from "react";
import { Link } from "react-router-dom";

export default function HomeBody({ redirectReviews }) {
  return (
    <div className="bg-white bg-opacity-50 p-4">
      <div className="">
        Welcome to NC Games,{" "}
        {!redirectReviews
          ? "all files loaded"
          : "please allow a bit of time for the Reviews to be fetched"}
      </div>
      {!redirectReviews ? (
        <div>
          <Link to={`/reviews`} key={crypto.randomUUID()}>
            <button className="border  rounded-full text-black hover:text-orange-400 opacity-100 px-4 py-2 hover:bg-grey-400 bg-white">
              Proceed
            </button>
          </Link>
        </div>
      ) : (
        <p>Loading...Loading...</p>
      )}
    </div>
  );
}
