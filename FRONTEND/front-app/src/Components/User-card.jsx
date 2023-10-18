import { useEffect, useState } from "react";
import axios from "axios";

export const UserCard = () => {
  const [user, setUser] = useState(null);
  let loggedInUserId = localStorage.getItem("userId");

  useEffect(() => {
    axios
      .get(`http://localhost:3005/users/${loggedInUserId}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch(console.log);
  }, [loggedInUserId]);

  return (
    <div className="user-div">
      <div className="user-div-container">
        <h1>My Profile</h1>
        <div className="user-div-row">
          <img src={user?.picturePath} alt="" className="user-picture" />
          <div className="inner-div-row">
            <h2>
              {user?.firstName} {user?.lastName}
            </h2>
            <h4>{user?.occupation}</h4>
          </div>
        </div>
        <div className="inner-div-row-user">
          <div>{user?.email}</div>
          <div>{user?.location}</div>
        </div>
        <div>
          <p>{user?.description}</p>
        </div>
      </div>
    </div>
  );
};
