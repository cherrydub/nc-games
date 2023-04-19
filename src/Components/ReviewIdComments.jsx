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

  if (comments.length > 0) {
    return (
      <div className="ReviewIdComments">
        {comments.map((comment) => {
          return <CommentCard key={comments.comment_id} {...comment} />;
        })}
      </div>
    );
  }
}
