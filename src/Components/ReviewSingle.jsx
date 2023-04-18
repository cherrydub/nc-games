import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewID } from "../api";

export default function ReviewSingle() {
  const { review_id } = useParams();
  const [singleReview, setSingleReview] = useState([]);

  useEffect(() => {
    getReviewID(review_id).then((data) => {
      setSingleReview(data);
    });
  }, [review_id]);

  return (
    <div className="ReviewSingle">
      <ul>
        <li>Owner: {singleReview.owner}</li>
        <li>Title: {singleReview.title}</li>
        <li>Review: {singleReview.review_body}</li>
        <li>Reiew ID: {singleReview.review_id}</li>
        <li>Cateogry: {singleReview.category}</li>
        <li>
          <img src={singleReview.review_img_url} alt={singleReview.title} />
        </li>
        <li>Votes: {singleReview.votes}</li>
        <li>Designer: {singleReview.designer}</li>
      </ul>
    </div>
  );
}
