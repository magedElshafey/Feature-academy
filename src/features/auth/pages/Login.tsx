import MainInput from "../../../common/components/inputs/MainInput";
import AuthCard from "../../../common/layout/auth/AuthCard";
import { CiUser } from "react-icons/ci";
import { GoKey } from "react-icons/go";

const Login = () => {
  return (
    <AuthCard
      title="login"
      description="By logging in, you can use the site's features."
    >
      <form className="mt-4 sm:mt-5 md:mt-6 lg:mt-7 xl:mt-8">
        <div className="mb-4">
          <MainInput
            required={true}
            Icon={CiUser}
            placeholder="user name"
            label="user name"
          />
        </div>
        <div className="mb-4">
          <MainInput
            required={true}
            Icon={GoKey}
            type="password"
            placeholder="password"
            label="password"
          />
        </div>
      </form>
    </AuthCard>
  );
};

export default Login;
