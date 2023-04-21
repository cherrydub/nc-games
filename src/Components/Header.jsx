import Nav from "./Nav";
import UserLogin from "./UserLogin";

export default function Header({
  users,
  setUsers,
  userLoggedIn,
  setUserLoggedIn,
}) {
  return (
    <div className="Header vh50 bg-green-300 text-center">
      <h1 className="font-gamefont " id="nc-header">
        NC Games
      </h1>
      <Nav />
      <div className="text-right">
        <UserLogin
          users={users}
          setUsers={setUsers}
          userLoggedIn={userLoggedIn}
          setUserLoggedIn={setUserLoggedIn}
        />
      </div>
    </div>
  );
}
