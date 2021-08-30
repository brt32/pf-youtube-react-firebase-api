import React from "react";
import moment from "moment";

import "./_comment.scss";

const Comment = () => {
  return (
    <div className="comment p-2 d-flex">
      <img
        src="https://www.pinclipart.com/picdir/big/499-4992513_avatar-avatar-png-clipart.png"
        alt=""
        className="rounded-circle mr-3"
      />
      <div className="comment__body mt-1 m-2">
        <p className="comment__header mb-0">
          Summit Dey • {moment("2020-05-06").fromNow()}
        </p>
        <p className="mb-0">Nice Video Dude!</p>
      </div>
    </div>
  );
};

export default Comment;
