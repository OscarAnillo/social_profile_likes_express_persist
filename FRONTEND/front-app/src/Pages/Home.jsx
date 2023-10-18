import { UserCard } from "../Components/User-card";
import { AddPost } from "../Components/Add-post";
import { AllPost } from "../Components/AllPost";
import { Ad } from "../Components/ad";

export const Home = () => {
  return (
    <div className="home-row">
      <UserCard />
      <div>
        <AddPost />
        <AllPost />
      </div>
      <Ad />
    </div>
  );
};
