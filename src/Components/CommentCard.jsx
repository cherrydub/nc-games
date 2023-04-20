import React from "react";

export default function CommentCard({
  comment_id,
  body,
  review_id,
  author,
  votes,
}) {
  return (
    <div className="CommentCard  border-black border p-1 max-w-xs">
      <ul>
        <li>
          <span className="font-bold">Comment: </span>
          <span className="italic">{body}</span>
        </li>
        <li>
          <span className="font-bold">Author: </span>
          {author}
        </li>
        <li>
          <span className="font-bold">Votes: </span> {votes}
        </li>
      </ul>
    </div>
  );
}
