import React, { useState } from "react";
import { postComment } from "../api";
import { useParams } from "react-router-dom";

export default function CommentFormPost({
  userLoggedIn,
  comments,
  setComments,
}) {
  const { review_id } = useParams({});
  const [submittedComment, setSubmittedComment] = useState(false);
  const [comment, setComment] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    postComment(review_id, userLoggedIn, comment).then((newComment) => {
      setComments([newComment, ...comments]);
    });
    setComment("");
    setSubmittedComment(true);
    // setTimeout(() => {
    //   setSubmittedComment(false);
    // }, 15000);
  };

  const isSubmitDisabled = comment.trim() === "";
  const buttonClassName = isSubmitDisabled
    ? "bg-red-500 text-white opacity-50 cursor-not-allowed px-2"
    : "bg-orange-300 text-black opacity-100 hover:opacity-75 px-2";

  return submittedComment ? (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1 className="text-center">
        Thank you <span className="font-bold">{userLoggedIn}</span> for your
        comment!
      </h1>
      <br></br>
      <br></br>
      <br></br>
    </>
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
            className={buttonClassName}
            type="submit"
            disabled={isSubmitDisabled}
          >
            Submit
          </button>
        </p>
      </form>
    </div>
  );
}
