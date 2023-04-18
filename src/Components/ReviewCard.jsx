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
    <div className="ReviewCard border-black border-2 max-w-xs">
      <img src={review_img_url} alt={title} />
      <ul>
        <li>Title: {title}</li>

        <li>Category: {category}</li>
      </ul>

      {showReview ? (
        <div>
          <ul>
            <li>Owner: {owner}</li>
            <li>votes: {votes}</li>
            <li>designer: {designer}</li>
            <li>comment count: {comment_count}</li>
          </ul>
          <p></p>
          <button
            className="text-black opacity-50 px-4 py-2 hover:opacity-100 bg-red-300"
            onClick={handleExpand}
          >
            show less
          </button>
          {/* Additional content to show when "show more" is clicked */}
        </div>
      ) : (
        <button
          className="rounded-full text-black opacity-50 px-4 py-2 hover:opacity-100 bg-blue-300"
          onClick={handleExpand}
        >
          expand
        </button>
      )}
      <p>
        <Link to={`/reviews/${review_id}`} key={review_id}>
          <button className="rounded-full text-black opacity-50 px-4 py-2 hover:opacity-100 bg-orange-300">
            Click for more info
          </button>
        </Link>
      </p>
    </div>
  );
}
