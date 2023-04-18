import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewId, getReviewIdcomments } from "../api";
import { Link } from "react-router-dom";
import ReviewIdComments from "./ReviewIdComments";

export default function ReviewSingle() {
  const { review_id } = useParams();
  const [singleReview, setSingleReview] = useState([]);

  useEffect(() => {
    getReviewId(review_id).then((data) => {
      setSingleReview(data);
    });
  }, [review_id]);

  return (
    <div className="ReviewSingle">
      <ul>
        <li>Owner: {singleReview.owner}</li>
        <li>Title: {singleReview.title}</li>
        <li>Review: {singleReview.review_body}</li>
        <li>Cateogry: {singleReview.category}</li>
        <li>
          <img src={singleReview.review_img_url} alt={singleReview.title} />
        </li>
        <li>Votes: {singleReview.votes}</li>
        <li>Designer: {singleReview.designer}</li>
      </ul>
      <p>view comments link</p>
      Comments:
      <ReviewIdComments />
      {/* <Link to={`/reviews/${review_id}/comments`} key={review_id}>
        <button className="rounded-full text-black opacity-50 px-4 py-2 hover:opacity-100 bg-orange-300">
          Check out comments
        </button>
      </Link> */}
    </div>
  );
}
