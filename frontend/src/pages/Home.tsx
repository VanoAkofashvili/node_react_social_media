import { Paper, Toolbar } from "@material-ui/core";
import React from "react";
import Sidebar from "../components/molecules/Sidebar";
import Stories from "../components/molecules/Stories";
import Header from '../components/organizms/Header'
import PostsOnHome from "../components/organizms/PostsOnHome";
// import { HomeTemplate } from "../components/templates/HomeTemplate";

const Home: React.FC = () =>  {
  return (
    <>
      <Header />
      <Sidebar />
      <PostsOnHome />
      <Stories />
      <Paper><Toolbar /><h1>Come with me</h1></Paper>
    </>
  );
}
export default Home