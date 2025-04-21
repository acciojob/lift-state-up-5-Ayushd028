
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
        {isLoggedIn ? (
        <h2>Welcome! You are logged in.</h2>
      ) : (
        <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  )
}

export default App
