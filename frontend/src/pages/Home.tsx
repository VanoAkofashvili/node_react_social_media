import { Paper, Toolbar } from "@material-ui/core";
import ActiveUsers from "components/organizms/ActiveUsers";
import React from "react";
import Sidebar from "../components/molecules/Sidebar";
import Stories from "../components/molecules/Stories";
import Header from "../components/organizms/Header";
import PostsOnHome from "../components/organizms/PostsOnHome";
// import { HomeTemplate } from "../components/templates/HomeTemplate";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <PostsOnHome />
      <Stories />
      <ActiveUsers />
    </>
  );
};
export default Home;
