import React from "react";
import ReviewCard from "./ReviewCard";
import ReviewCategoryFilter from "./ReviewCategoryFilter";

export default function Reviews({
  categories,
  reviews,
  reviewCategory,
  setReviewCategory,
}) {
  console.log(categories, "reviews");
  return (
    <>
      <ReviewCategoryFilter
        categories={categories}
        reviewCategory={reviewCategory}
        setReviewCategory={setReviewCategory}
      />
      <div className="Reviews flex flex-wrap gap-4 justify-center">
        {reviews.map((review) => {
          return <ReviewCard key={review.review_id} {...review} />;
        })}
      </div>
    </>
  );
}
