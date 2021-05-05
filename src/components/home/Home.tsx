import React, { ReactElement } from "react";
import logo from "../../assets/images/logo.svg";
import "../../assets/css/home/Home.css";

const Home: React.FC = (): ReactElement => {
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-log  o" alt="logo" />
        <p>
          Edit <code>src/Home.tsx</code> and save to ddreload.
        </p>
        <a
          className="Home-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
};

export default Home;
