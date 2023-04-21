import React, { useEffect } from "react";
import { getReviewIdcomments } from "../api";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";

export default function ReviewIdComments({ comment, comments, setComments }) {
  const { review_id } = useParams();

  useEffect(() => {
    getReviewIdcomments(review_id).then((data) => {
      setComments(data);
    });
  }, [review_id, setComments]);

  if (comments.length === 0)
    return <h1 className="bg-orange-200">Sorry no comments</h1>;
  else {
    return (
      <>
        <div className="ReviewIdComments bg-green-200">
          {comments.map((comment) => {
            return (
              <CommentCard
                key={crypto.randomUUID()}
                {...comment}
                setComments={setComments}
              />
            );
          })}
        </div>
      </>
    );
  }
}
