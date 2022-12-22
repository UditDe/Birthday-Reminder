import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const clearAll = () => {};
  return (
    <>
      <main>
        <section className="container">
          <h3>Bday Zero</h3>
          <List />
          <button className="btn" onClick={clearAll}>
            Clear All
          </button>
        </section>
      </main>
    </>
  );
}

export default App;
