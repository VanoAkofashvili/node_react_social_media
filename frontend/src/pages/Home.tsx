import React from "react";
import Sidebar from "../components/Home/Sidebar";
import Stories from "../components/Home/Stories";
import Header from '../components/organizms/Header'
import PostsOnHome from "../components/organizms/PostsOnHome";

 const Home: React.FC = () =>  {
  return (
    <>
      <Header />
      <Sidebar />
      <PostsOnHome />
      <Stories />
    </>
  );
}
export default Home