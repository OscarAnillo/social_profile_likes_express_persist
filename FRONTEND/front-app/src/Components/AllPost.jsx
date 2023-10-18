import { useEffect } from "react";
import { PostComponent } from "./PostComponent";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../Redux/Features/user-slice";

export const AllPost = () => {
  const { posts } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:3005/posts")
      .then((res) => {
        dispatch(setPosts(res.data));
      })
      .catch(console.log);
  }, [dispatch]);

  return (
    <div>
      {posts.map((post) => (
        <PostComponent key={post._id} post={post} />
      ))}
    </div>
  );
};
