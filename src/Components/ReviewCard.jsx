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
    <div className="ReviewCard">
      <img src={review_img_url} alt={title} />
      <ul>
        <li>Owner: {owner}</li>
        <li>Title: {title}</li>
        <li>Review ID: {review_id}</li>
        <li>Category: {category}</li>

        <li>votes: {votes}</li>
        <li>designer: {designer}</li>
        <li>comment count: {comment_count}</li>
      </ul>
    </div>
  );
}
