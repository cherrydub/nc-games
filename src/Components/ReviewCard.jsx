import { useState } from "react";
import { Link } from "react-router-dom";

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

  const handleExpand = () => {
    showReview ? setShowReview(false) : setShowReview(true);
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
              {votes}
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
          <p></p>
          <button
            className="text-black opacity-50 hover:opacity-100 bg-red-300"
            onClick={handleExpand}
          >
            show less
          </button>
        </div>
      ) : (
        <button
          className="text-black opacity-50 hover:opacity-100 bg-blue-300"
          onClick={handleExpand}
        >
          expand
        </button>
      )}
      <p>
        <Link to={`/reviews/${review_id}`} key={review_id}>
          <div className="text-right">
            <button className="text-black opacity-50 hover:opacity-100 bg-green-300">
              more info <span>{`>>>`}</span>
            </button>
          </div>
        </Link>
      </p>
    </div>
  );
}
