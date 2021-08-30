import React from "react";
import Comment from "../comment/Comment";
import "./_comments.scss";

const Comments = () => {
  const handleComment = (comment) => {};

  return (
    <div className="comments">
      <p>1234 Comments</p>
      <div className="comments__form d-flex w-100 my-2">
        <img
          src="https://www.pinclipart.com/picdir/big/499-4992513_avatar-avatar-png-clipart.png"
          alt=""
          className="rounded-circle mr-3"
        />
        <form onSubmit={handleComment} className="d-flex flex-grow-1">
          <input
            type="text"
            className="flex-grow-1"
            placeholder="Write a comment..."
          />
          <button className="btn button-border-0 p-2">Comment</button>
        </form>
      </div>
      <div className="comments__list">
        {[...Array(15)].map((_, i) => (
          <Comment key={i} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
