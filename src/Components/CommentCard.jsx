import React from "react";

export default function CommentCard({
  comment_id,
  body,
  review_id,
  author,
  votes,
}) {
  return (
    <div className="CommentCard  border-black border-2 max-w-xs">
      <ul>
        <li>body: {body}</li>
        <li>author: {author}</li>
        <li>votes: {votes}</li>
      </ul>
    </div>
  );
}
