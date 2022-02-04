import React, { useState, Suspense, lazy } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Welcome from "./Welcome";

const Login = lazy(() => import("userauth/Login"));

const App = () => {
  const [user, setUser] = useState('');
  const handleLogin = (data: {
    username: string,
    password: string
  }) => {
    setUser(data.username);
  }
  return (
    <div className="container">
      {user ? <Welcome user={user} /> : <Suspense fallback={<div>Loading..</div>}><Login onSuccess={handleLogin} /></Suspense>}
    </div>
  )
};
ReactDOM.render(<App />, document.getElementById("app"));
