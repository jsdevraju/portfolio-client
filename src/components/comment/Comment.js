import Image from "next/image";
import Loader from "../loader/Loader";

const Comment = ({ comment }) => {

  return (
    <>
      <div className="comment_show">
        <div className="wrapper">
          <div className="user_img">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Razu Islam"
              width={"100%"}
              height={"100%"}
              // loader={<Loader />}
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
