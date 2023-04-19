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
    <div className="flex justify-center">
      <div className="ReviewSingle border-black border max-w-xs">
        <img src={singleReview.review_img_url} alt={singleReview.title} />
        <div className="p-1">
          <ul>
            <li>
              <span className="font-bold">Owner: </span>
              {singleReview.owner}
            </li>
            <li>
              <span className="font-bold">Title: </span> {singleReview.title}
            </li>
            <li>
              <span className="font-bold">Review: </span>
              {singleReview.review_body}
            </li>
            <li>
              <span className="font-bold">Category: </span>
              {singleReview.category}
            </li>

            <li>
              <span className="font-bold">Votes: </span>
              {singleReview.votes}
            </li>
            <li>
              <span className="font-bold">Designer: </span>
              {singleReview.designer}
            </li>
          </ul>
          <span className="font-bold">Comments: </span>
          <ReviewIdComments />
        </div>
      </div>
    </div>
  );
}
