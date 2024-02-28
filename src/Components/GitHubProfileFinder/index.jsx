import { useEffect } from "react";
import { useState } from "react";
import "../GitHubProfileFinder/style.css";
export default function GitHubProfileFinder() {
  const [userName, setUserName] = useState("velsenthilkumar1988");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  function handleSubmit() {
    fetchGitHubUserData();
  }

  async function fetchGitHubUserData() {
    setLoading(true);
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();
    console.log("====================================");
    console.log(data);
    console.log("====================================");
    if (data) {
      setUserData(data);
      setLoading(false);
      setUserName("");
    }
  }
  useEffect(() => {
    fetchGitHubUserData();
  }, []);
  if (loading) {
    return <h1>Please Wait ! Loading Data....</h1>;
  }
  const createdDate = new Date(userData.created_at);
  return (
    <div className="github-profile-finder">
      <div className="input-wrapper">
        <input
          type="text"
          name="search-by-username"
          placeholder="Search GitHub Username..."
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {/* {
        userData !==null ? <UserComponent userValue={userData}/>:null
      } */}

      {
        <div>
          <img src={userData.avatar_url} alt="User" className="avatar" />
        </div>
      }

      {
        <div>
          <a href={`https://github.com/${userData.login}`}>
            {userData.name || userData.login}
          </a>

          <p>
            User Joined at{" "}
            {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
              month: "short",
            })} ${createdDate.getFullYear()}`}
          </p>
        </div>
      }
      {
        <div>
            <p>Public Response : {userData.public_repos}</p>
        </div>
      }
      {
        <div>
            <p>No. of Followers : {userData.followers}</p>
        </div>
      }
      {
        <div>
            <p>No. of Followings : {userData.following}</p>
        </div>
      }
    </div>
  );
}
