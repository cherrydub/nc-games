import { useState, useEffect } from "react";
import "./App.css";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { getUsers } from "./api";

function App() {
  const [users, setUsers] = useState([]);
  const [userLoggedIn, setUserLoggedIn] = useState("");

  console.log(userLoggedIn, "inside app.js");

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  return (
    <div className="App" id="app-top">
      <Header
        users={users}
        setUsers={setUsers}
        userLoggedIn={userLoggedIn}
        setUserLoggedIn={setUserLoggedIn}
      />

      <Body
        users={users}
        setUsers={setUsers}
        userLoggedIn={userLoggedIn}
        setUserLoggedIn={setUserLoggedIn}
      />

      <Footer userLoggedIn={userLoggedIn} />
    </div>
  );
}

export default App;
