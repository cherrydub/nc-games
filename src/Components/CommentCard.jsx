import React from "react";

export default function CommentCard({
  comment_id,
  body,
  review_id,
  author,
  votes,
}) {
  return (
    <div className="CommentCard  border-black max-w-xs">
      <ul>
        <li className="italic">{body}</li>
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
