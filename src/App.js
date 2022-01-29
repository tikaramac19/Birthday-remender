import React, { useState } from "react";
import "./App.css";
import Data from "./components/Data";
import List from "./components/List";

function App() {
  const [people, setPeople] = useState(Data);
  return (
    <>
      <div className="container">
        <div className="birthday">
          <h3>{people.length} Birthday Todays</h3>
          <List people={people} />
          <button
            onClick={() => {
              setPeople([]);
            }}
          >
            Clear All
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
