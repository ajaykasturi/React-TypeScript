import { useState } from "react";
type AuthUser = {
  name: string;
  email: string;
};
export const User = () => {
  const [user, setUser] = useState<null | AuthUser>(null);
  const handleLogin = () => {
    setUser({
      name: "Ajay",
      email: "ajay@gmail.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>
        <p>User name is {user?.name}</p>
        <p>User email is {user?.email}</p>
      </div>
    </div>
  );
};