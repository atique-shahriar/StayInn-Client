import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const user = {email, password};
    console.log(user);
  };

  return (
    <div className="w-11/12 md:w-4/5 mx-auto py-10">
      <div className="grid md:grid-cols-2 gap-10">
        <div className=" hidden md:block ">
          <div className="flex justify-center items-center  h-full">
            <img src="./logo.png" alt="" className="lg:w-4/5" />
          </div>
        </div>
        <div className=" border-2 border-gray-200 rounded-lg py-8 px-6 h-fit">
          <h3 className="text-3xl font-bold text-[#FF3811] text-center mb-6">
            Login
          </h3>
          <div>
            <form className="space-y-4" onSubmit={handleSignIn}>
              <div className="space-y-2">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Type Email"
                  name="email"
                  className="w-full border rounded-md border-black px-2 py-2"
                  required
                />
              </div>
              <div className="space-y-2">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Type Password"
                  name="password"
                  className="w-full border rounded-md border-black px-2 py-2"
                  required
                />
              </div>
              <div className="pt-4">
                <input
                  type="submit"
                  value="Login"
                  className="w-full border rounded-md bg-[#FF3811] text-white font-semibold px-2 py-2"
                />
              </div>
            </form>
          </div>
          <div className="space-y-4 mt-4 text-center">
            <p>Or login with</p>
            <div className="flex justify-center items-center gap-6 text-5xl">
              <FcGoogle></FcGoogle>
            </div>
            <p>
              Don&apos;t have an account?{" "}
              <Link to="/register" className="hover:text-[#FF3811]">
                Create Account.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
