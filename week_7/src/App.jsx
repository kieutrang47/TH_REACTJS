import React from "react";
import "./styles/style.CSS";

const GridLayout = () => {

  return (


    <div className="p-5">
      <div className="grid-container">
        <div className="header">My Header</div>
        <div className="menu">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
        <div className="content">
          <h3>Lorem Ipsum</h3>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Ridiculus sit
            nisl laoreet facilisis aliquet...
          </p>
        </div>
        <div className="footer">Footer</div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <GridLayout />
    </div>
  );
};

export default App;
