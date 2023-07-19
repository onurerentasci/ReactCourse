import React, { useState } from "react";

type UserType = {
  name: string;
  email: string;
  phone: string;
};

function LoginCheck() {
  const [user, setUser] = useState<UserType | null>({} as UserType);

  const handleLogin = () => {
    setUser({
      name: "Onur",
      email: "onurerentasci@gmail.com",
      phone: "5555555555",
    });
    console.log(user);
  };
  const handleLogout = () => {
    setUser({} as UserType);
    console.log(user);
  };
  return (
    <div>
      <button onClick={handleLogin}>Giriş Yap</button>
      <button onClick={handleLogout}>Çıkış Yap</button>
      <div>
        <p>{user?.name}</p>
        <p>{user?.email}</p>
        <p>{user?.phone}</p>
      </div>
    </div>
  );
}

export default LoginCheck;
