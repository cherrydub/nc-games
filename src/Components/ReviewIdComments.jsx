import React, { useState, useEffect } from "react";
import { getReviewIdcomments } from "../api";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";

export default function ReviewIdComments() {
  const { review_id } = useParams();
  const [comments, setcomments] = useState([]);

  useEffect(() => {
    getReviewIdcomments(review_id).then((data) => {
      setcomments(data);
    });
  }, [review_id]);

  if (comments.length === 0) return <h1>Sorry no comments</h1>;

  //whoever sees this PR, lets say there is only 1 item in array...
  //do i have to make a new condition if length === 1 and use comments[0]insertkey
  //or is map smart to know its a single item there so will just do it
  //automatically

  if (comments.length > 0) {
    return (
      <div className="ReviewIdComments">
        ReviewID: {review_id}
        {comments.map((comment) => {
          return <CommentCard key={comments.comment_id} {...comment} />;
        })}
      </div>
    );
  }
}
