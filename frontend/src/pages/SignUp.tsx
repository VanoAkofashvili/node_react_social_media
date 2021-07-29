import React from "react";
import { SignUpForm } from "../components/organizms/Forms/SignUpForm";
import {SignUpTemplate} from '../components/templates/SignUpTemplate'

export const SignUp: React.FC = () => {

  return (
      <SignUpTemplate component={<SignUpForm />}/>
  );
};
