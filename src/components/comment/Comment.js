import React from "react";

const Comment = ({ comment }) => {

  return (
    <>
      <div className="comment_show">
        <div className="wrapper">
          <div className="user_img">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Razu Islam"
            />
          </div>
          <div className="user_comment">
            <h3>unknown user</h3>
            <p>{comment}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
