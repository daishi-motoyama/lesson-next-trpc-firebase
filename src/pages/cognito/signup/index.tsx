import type { NextPage } from 'next';
import {SignUp} from "@src/client/feature/auth/route/cognito/signUp";

const SignupRoute: NextPage = () => {
  return <SignUp />;
};

export default SignupRoute;
