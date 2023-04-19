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

  if (comments.length === 0)
    return <h1 className="bg-orange-200">Sorry no comments</h1>;
  else {
    return (
      <>
        <div className="ReviewIdComments bg-green-200">
          {comments.map((comment) => {
            return <CommentCard key={comments.comment_id} {...comment} />;
          })}
        </div>
      </>
    );
  }
}
