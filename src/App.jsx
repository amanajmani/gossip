import React from "react";

import "./App.css";
import Login from "./pages/login";
import Routes from "./routes";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Routes />
        </div>
      )}
    </div>
  );
}

export default App;
