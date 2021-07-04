import React from "react";
import Sidebar from "../components/Home/Sidebar";
import Main from "../components/Home/Main";
import Stories from "../components/Home/Stories";
import Header from '../components/Header'

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