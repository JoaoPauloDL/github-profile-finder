import "../github-profile-finder/styles.css";

const User = ({ user }) => {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    created_at,
  } = user;

  const createdDate = new Date(created_at);

  return (
    <div className="user">
      <div>
        <img src={avatar_url} className="avatar" alt="User" />
      </div>
      <div className="name-container">
        <a href={`https://github.com/${login}`}>{name || login}</a>
      </div>
      <div className="profile-info">
        <div className="info-item">
          <p>Public Repos</p>
          <p>{public_repos}</p>
        </div>
        <div className="info-item">
          <p>Followers</p>
          <p>{followers}</p>
        </div>
        <div className="info-item">
          <p>Following</p>
          <p>{following}</p>
        </div>
      </div>
      <div className="card-footer">
        <p>
          User joined on{" "}
          {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
            month: "short",
          })} ${createdDate.getFullYear()}`}
        </p>
      </div>
    </div>
  );
};

export default User;
