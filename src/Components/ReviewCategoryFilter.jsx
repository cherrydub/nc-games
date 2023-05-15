import React from "react";
import { Link } from "react-router-dom";

export default function ReviewCategoryFilter({
  categories,
  reviewCategory,
  setReviewCategory,
}) {
  console.log(categories, "filterpage");
  return (
    <>
      <div>{/* <Link to={`/reviews?category=test`}>test</Link> */}</div>
      <div className="text-center">
        categories:
        <label htmlFor="categoryselect" className="text-sm"></label>
        <select
          id="categoryselect"
          name="categoryselect"
          value={reviewCategory}
          onChange={(e) => setReviewCategory(e.target.value)}
          className="border border-gray-400 p-2 text-m"
        >
          <option value="">all</option>
          {categories.map((category) => {
            return (
              <option key={category} value={category}>
                <Link to={`/reviews?category=${category}`}>{category}</Link>
              </option>
            );
          })}
        </select>
      </div>
      <br />
    </>
  );
}
