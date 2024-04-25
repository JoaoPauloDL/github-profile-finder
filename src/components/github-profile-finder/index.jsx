import { useEffect } from "react";
import { useState } from "react";
import './styles.css'
import User from "../use-card/user";

const GitHubProfileFinder = () => {
  const [userName, setUserName] = useState("JoaoPauloDL");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleSubmit = () => {
    fetchGithubUserData()
  };

  const fetchGithubUserData = async () => {
    setLoading(true);
    const response = await fetch(`http://api.github.com/users/${userName}`);

    const data = await response.json();
    if (data) {
      setUserData(data);
      setLoading(false);
      setUserName('')
    }
    console.log(userData)
  };

 

  useEffect(() => {
    fetchGithubUserData();
  }, []);

   if(loading) {
    return <h1>Loading data! Please wait</h1>
  }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search Github Username..."
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {
        userData !== null ?  <User user={userData}/> : null
      }
    </div>
  );
};

export default GitHubProfileFinder;
