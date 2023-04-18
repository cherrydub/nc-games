import { Route, Routes } from "react-router-dom";
import Reviews from "./Reviews";
import ReviewSingle from "./ReviewSingle";
import { useState, useEffect } from "react";
import { getReviews, getReviewID, getCategories } from "../api";
import { useParams } from "react-router-dom";

export default function Body() {
  const [reviews, setReviews] = useState([]);
  // const { item_id } = useParams();
  // const [singleReview, setSingleReview] = useState([]);

  useEffect(() => {
    // setIsLoading(true);
    getReviews().then((data) => {
      setReviews(data);
      // setIsLoading(false);
    });
  }, []);

  // useEffect(() => {
  //   getReviewID(item_id).then((data) => {
  //     setSingleReview(data);
  //   });
  // }, [item_id]);

  return (
    <div className="Body mb-10 mt-10 p-5">
      <Routes>
        <Route path="/reviews" element={<Reviews reviews={reviews} />} />
        <Route path="/reviews/:review_id" element={<ReviewSingle />} />
      </Routes>
    </div>
  );
}
