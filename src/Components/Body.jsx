import { Route, Routes } from "react-router-dom";
import Reviews from "./Reviews";
import ReviewSingle from "./ReviewSingle";
import { useState, useEffect } from "react";
import { getReviews } from "../api";
import HomeBody from "./HomeBody";
import ReviewIdComments from "./ReviewIdComments";

export default function Body({
  users,
  setUsers,
  userLoggedIn,
  setUserLoggedIn,
}) {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getReviews().then((data) => {
      setReviews(data);
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <h1>Loading buddy</h1>
  ) : (
    <div className="Body mb-10 mt-10 p-5" id="body-top">
      <Routes>
        <Route path="/" element={<HomeBody />} />
        <Route path="/reviews" element={<Reviews reviews={reviews} />} />
        <Route
          path="/reviews/:review_id"
          element={<ReviewSingle userLoggedIn={userLoggedIn} />}
        />
      </Routes>
    </div>
  );
}
