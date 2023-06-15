import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewId, patchVotes } from "../api";
import ReviewIdComments from "./ReviewIdComments";
import CommentFormPost from "./CommentFormPost";

export default function ReviewSingle({ userLoggedIn }) {
  const { review_id } = useParams();
  const [singleReview, setSingleReview] = useState([]);
  const [voteCount, setVoteCount] = useState(0);
  const [error, setError] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getReviewId(review_id).then((data) => {
      setSingleReview(data);
    });
  }, [review_id]);

  const handleVoteClick = (review_id) => {
    setVoteCount(1);
    patchVotes(review_id).catch((err) => {
      setError({ err });
      setVoteCount(0);
    });
  };

  return (
    <div className="flex justify-center">
      <div className="ReviewSingle border-black border max-w-xs bg-white bg-opacity-75">
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
              {singleReview.votes + voteCount}
              <span> </span>
              {voteCount ? (
                <span className="bg-blue-200">thanks for voting!</span>
              ) : (
                <button
                  onClick={() => handleVoteClick(review_id)}
                  className="text-black opacity-100 hover:opacity-75 bg-white-300 border border-black px-2 hover:text-orange-500"
                >
                  +
                </button>
              )}
              {error ? (
                <h1 className="bg-red-100">
                  Sorry there was an issue: {error.err.message}
                </h1>
              ) : (
                <span></span>
              )}
            </li>
            <li>
              <span className="font-bold">Designer: </span>
              {singleReview.designer}
            </li>
            <br></br>
          </ul>
          {userLoggedIn ? (
            <CommentFormPost
              comments={comments}
              setComments={setComments}
              userLoggedIn={userLoggedIn}
            />
          ) : (
            <h1 className="italic">
              Please{" "}
              <button className="text-black opacity-100 hover:opacity-75 bg-orange-300 px-2">
                <a href="#app-top">sign in</a>
              </button>{" "}
              to post comment
            </h1>
          )}

          <span className="font-bold">User Comments: </span>
          <ReviewIdComments
            comments={comments}
            setComments={setComments}
            review_id={review_id}
            userLoggedIn={userLoggedIn}
          />
        </div>
      </div>
    </div>
  );
}
