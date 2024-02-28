export default function UserComponent({userValue}) {
  const { avatar_url, followers, following, public_repos, name, login } = userValue;
  return <div className="user">
        <div>
            <img src={avatar_url} alt="User" className="avatar" />
        </div>
        <div>
            <a href={`https://github.com/${login}`} >{name || login}</a>
        </div>
    </div>;
}
