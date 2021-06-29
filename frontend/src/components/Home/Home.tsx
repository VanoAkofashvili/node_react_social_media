import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import Stories from "./Stories";

const Home: React.FC = () =>  {
  return (
    <>
      <Sidebar />
      <Main />
      <Stories />
    </>
  );
}
export default Home;
