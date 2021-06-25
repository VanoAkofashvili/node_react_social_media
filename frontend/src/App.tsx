import { CssBaseline } from "@material-ui/core";
import React from "react";
import Header from "./components/Header";
import { Blue } from "./utils/colors";

const App: React.FC = () => {
  return (
    <div style={{backgroundColor: Blue}}>
      <CssBaseline />
      <Header />
    </div>
  );
};

export default App;
