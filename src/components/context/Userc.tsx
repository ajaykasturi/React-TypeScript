import { useContext } from "react";
import { AuthUser, UserContext } from "./UserContext";

const Userc = () => {
  const usercontext = useContext(UserContext);
  const handleLogin = () => {
    usercontext.setUser({
      name: "Ajay",
      email: "ajay@gmail.com",
    });
  };
  const handleLogout = () => {
    usercontext?.setUser({} as AuthUser);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>
        <p>User is {usercontext?.user?.name}</p>
        <p>Email is {usercontext?.user?.email}</p>
      </div>
    </div>
  );
};

export default Userc;
