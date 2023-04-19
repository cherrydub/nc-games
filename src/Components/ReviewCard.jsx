import { useState } from "react";
import { Link } from "react-router-dom";
import { patchVotes } from "../api";

export default function ReviewCard({
  owner,
  title,
  review_id,
  category,
  review_img_url,
  created_at,
  votes,
  designer,
  comment_count,
}) {
  const [showReview, setShowReview] = useState(false);
  const [voteCount, setVoteCount] = useState(0);
  const [error, setError] = useState(null);

  const handleExpand = () => {
    showReview ? setShowReview(false) : setShowReview(true);
  };

  const handleVoteClick = (review_id) => {
    setVoteCount(1);
    patchVotes(review_id).catch((err) => {
      setError({ err });
      setVoteCount(0);
    });
  };

  return (
    <div className="ReviewCard border-black border max-w-xs">
      <img src={review_img_url} alt={title} />
      <div className="p-1">
        <ul>
          <li>
            <span className="font-bold">Title: </span>
            {title}
          </li>

          <li>
            <span className="font-bold">Category: </span>
            {category}
          </li>
        </ul>
      </div>

      {showReview ? (
        <div className="px-1">
          <ul>
            <li>
              <span className="font-bold">Owner: </span>
              {owner}
            </li>
            <li>
              <span className="font-bold">Votes: </span>
              {votes + voteCount}
              <span> </span>
              {voteCount ? (
                <span className="bg-blue-200">thanks for voting!</span>
              ) : (
                <button
                  onClick={() => handleVoteClick(review_id)}
                  className="text-black opacity-100 hover:opacity-75 bg-green-300 px-2"
                >
                  +
                </button>
              )}
              {error ? (
                <h1 className="bg-red-100">
                  Sorry there was an issue: {error.err.message}
                  {console.log(error.err.message, "error here")}
                </h1>
              ) : (
                <span></span>
              )}
            </li>
            <li>
              <span className="font-bold">Designer: </span>
              {designer}
            </li>
            <li>
              <span className="font-bold">Comment Count: </span>
              {comment_count}
            </li>
          </ul>
        </div>
      ) : (
        <button
          className="text-black opacity-50 hover:opacity-100 bg-blue-300"
          onClick={handleExpand}
        >
          expand
        </button>
      )}

      <Link to={`/reviews/${review_id}`} key={review_id}>
        <div className="text-right">
          <button className="text-black opacity-50 hover:opacity-100 bg-green-300">
            more info <span>{`>>>`}</span>
          </button>
        </div>
      </Link>
    </div>
  );
}
