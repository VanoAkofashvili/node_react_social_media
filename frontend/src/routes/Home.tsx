import React from "react";
import Sidebar from "../modules/components/Home/Sidebar";
import Main from "../modules/components/Home/Main";
import Stories from "../modules/components/Home/Stories";
import Header from '../modules/components/Header'

 const Home: React.FC = () =>  {
  return (
    <>
      <Header />
      <Sidebar />
      <Main />
      <Stories />
    </>
  );
}
export default Home