import React from "react";
import ReviewCard from "./ReviewCard";

export default function Reviews({ reviews }) {
  return (
    <div className="Reviews flex flex-wrap gap-4">
      Reviews here
      <p></p>
      Card stuff here soon
      {reviews.map((review) => {
        return <ReviewCard key={crypto.randomUUID()} {...review} />;
      })}
    </div>
  );
}
