import { Route, Routes } from "react-router-dom";
import Reviews from "./Reviews";
import ReviewSingle from "./ReviewSingle";
import { useState, useEffect } from "react";
import { getReviews, getCategories } from "../api";
import HomeBody from "./HomeBody";
import ReviewCategoryFilter from "./ReviewCategoryFilter";

export default function Body({ userLoggedIn }) {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [reviewCategory, setReviewCategory] = useState("");
  const [redirectReviews, setRedirectReviews] = useState(false);

  //backup till here

  useEffect(() => {
    setIsLoading(true);
    getReviews().then((data) => {
      setReviews(data);
      setIsLoading(false);
      setRedirectReviews(true);
    });
  }, []);

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(
        data.map((d) => {
          return d.slug;
        })
      );
    });
  }, []);

  const filteredReviews = reviews.filter((review) => {
    return review.category.includes(reviewCategory);
  });

  return isLoading ? (
    <HomeBody />
  ) : (
    // <h1>
    //   Loading...Sorry this is using a free ElephantSQL to hosts PostgreSQL...may
    //   take longer than expected to fetch the queries
    // </h1>
    <div className="mb-10 mt-10 p-5" id="body-top">
      {/* <ReviewCategoryFilter
        categories={categories}
        reviewCategory={reviewCategory}
        setReviewCategory={setReviewCategory}
      /> */}
      <Routes>
        <Route
          path="/"
          element={<HomeBody redirectReviews={redirectReviews} />}
        />
        <Route
          // path={reviewCategory ? `/reviews/${reviewCategory}` : "/reviews"}
          path="/reviews"
          element={
            <Reviews
              categories={categories}
              reviews={filteredReviews}
              reviewCategory={reviewCategory}
              setReviewCategory={setReviewCategory}
            />
          }
        />

        <Route
          path="/reviews/:review_id"
          element={<ReviewSingle userLoggedIn={userLoggedIn} />}
        />
      </Routes>
    </div>
  );
}
