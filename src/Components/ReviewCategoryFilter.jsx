import React from "react";

export default function ReviewCategoryFilter({
  categories,
  reviewCategory,
  setReviewCategory,
}) {
  console.log(categories, "filterpage");
  return (
    <>
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
              <option key={crypto.randomUUID()} value={category}>
                {category}
              </option>
            );
          })}
        </select>
      </div>
      <br />
    </>
  );
}
