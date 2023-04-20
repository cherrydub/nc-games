import React, { useState } from "react";
import { postComment } from "../api";

export default function CommentFormPost({ review_id, userLoggedIn }) {
  const [comment, setComment] = useState("");
  const [submittedComment, setSubmittedComment] = useState(false);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    postComment(10, userLoggedIn, comment);
    setComment("");
    setSubmittedComment(true);
  };

  return submittedComment ? (
    <h1>Thank you {userLoggedIn} for your comment!</h1>
  ) : (
    <div>
      <form onSubmit={handleCommentSubmit}>
        <p>
          <label htmlFor="comment">
            Comment as <span className="font-bold">{userLoggedIn}:</span>
          </label>
        </p>
        <textarea
          className="border-2 w-full h-32"
          type="comment"
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        />
        <p>
          <button
            className="text-black opacity-100 hover:opacity-75 bg-orange-300 px-2"
            type="submit"
          >
            Submit
          </button>
        </p>
      </form>
    </div>
  );
}
