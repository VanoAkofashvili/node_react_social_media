import { CssBaseline } from "@material-ui/core";
import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar.js";

const App: React.FC = () => {
  return (
    <div>
      <CssBaseline />
      <Header />
      <Sidebar />
    </div>
  );
};

export default App;
