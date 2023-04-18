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
  return (
    <div className="ReviewCard border-black border-2 max-w-xs">
      <img src={review_img_url} alt={title} />
      <ul>
        {/* <li>Owner: {owner}</li> */}
        <li>Title: {title}</li>
        {/* <li>Review ID: {review_id}</li> */}
        <li>Category: {category}</li>
        <li>
          <Link to={`/reviews/${review_id}`} key={review_id}>
            <button className="rounded-full text-black opacity-50 px-4 py-2 hover:opacity-100 bg-orange-300">
              Click for more info
            </button>
          </Link>
        </li>
        {/* 
        <li>votes: {votes}</li>
        <li>designer: {designer}</li>
        <li>comment count: {comment_count}</li> */}
      </ul>
    </div>
  );
}
