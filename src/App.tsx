import React from "react";
import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <h1>Header 1</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis,
          beatae perferendis nisi porro odit vitae!
        </p>
      </div>
      <div className="aside">
        <div className="aside-container">
          <h2>header 2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nisi
            veniam, perspiciatis fuga at qui minus culpa deleniti commodi iusto
            debitis dolor voluptatum, saepe similique alias sed facilis
            accusantium eligendi?
          </p>
        </div>
        <div className="aside-container">
          <h2>header 2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nisi
            veniam, perspiciatis fuga at qui minus culpa deleniti commodi iusto
            debitis dolor.
          </p>
        </div>
        <div className="aside-container">
          <h2>header 2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            deserunt reprehenderit magni quidem tempore molestias sit, earum
            ratione!
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
