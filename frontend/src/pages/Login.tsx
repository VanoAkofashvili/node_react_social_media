import React from "react";
import { LoginForm } from "../components/organizms/Forms/LoginForm";
import sideImg from "../assets/images/soc-media1.png";
import "./index.css";
import { LogInTemplate } from "../components/templates/LogInTemplate/LoginTemplate";

export const Login: React.FC = () => (
  <LogInTemplate loginForm={<LoginForm />} image={sideImg} />
);
