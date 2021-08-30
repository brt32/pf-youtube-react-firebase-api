import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Comment from "../comment/Comment";
import {
  addComment,
  getCommentsOfVideoById,
} from "../../redux/actions/comments.action";
import "./_comments.scss";

const Comments = ({ videoId, totalComments }) => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  useEffect(() => {
    dispatch(getCommentsOfVideoById(videoId));
  }, [dispatch, videoId]);

  const comments = useSelector((state) => state.commentList.comments);

  const _comments = comments?.map(
    (comment) => comment.snippet.topLevelComment.snippet
  );

  const handleComment = (e) => {
    e.preventDefault();
    if (text.length === 0) return;
    dispatch(addComment(videoId, text));
    setText("");
  };

  return (
    <div className="comments">
      <p>{totalComments} Comments</p>
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
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="btn button-border-0 p-2">Comment</button>
        </form>
      </div>
      <div className="comments__list">
        {_comments?.map((comment, i) => (
          <Comment key={i} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
