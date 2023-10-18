import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";
import { setPost } from "../Redux/Features/user-slice";

export const PostComponent = ({ post }) => {
  const loggedId = localStorage.getItem("userId");
  const isLiked = Boolean(post.likes[loggedId]);
  const likeCount = Object.keys(post.likes).length;
  const dispatch = useDispatch();

  const patchLike = async () => {
    const res = await axios.patch(`http://localhost:3005/posts/${post._id}`, {
      userId: loggedId,
    });
    const updatedPost = await res.data;
    dispatch(setPost(updatedPost));
  };

  return (
    <div className="post-div">
      <div className="post-div-container">
        <div className="post-div-row">
          <img
            src={post.userPicturePath}
            alt=""
            className="post-user-picture"
          />
          <div>
            <h4>
              {post.firstName} {post.lastName}
            </h4>
            <p>{post.location}</p>
          </div>
        </div>
        <p className="post-desc">{post.description}</p>
        <img src={post.picturePath} alt="" className="post-pic" />
        <div onClick={() => patchLike()}>
          {isLiked ? <FcLike /> : <FcLikePlaceholder />} {likeCount}
        </div>
      </div>
    </div>
  );
};

PostComponent.propTypes = {
  post: PropTypes.object,
};
