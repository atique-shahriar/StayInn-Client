import axios from "axios";
import { GoogleAuthProvider } from "firebase/auth";
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";

const Login = () => {
  const {signInUser, signInGoogle} = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const user = {email, password};
    console.log(user);

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Logged in successfully");
        const user = {email};

        axios.post("https://b9a11-server-side-atique-shahriar.vercel.app/jwt", user, {withCredentials: true}).then((res) => {
          console.log(res.data);
          if (res.data.success) {
            setTimeout(() => {
              navigate(location?.state ? location.state : "/");
            }, 1000);
          }
        });
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Wrong email or password");
      });
  };

  const handleGoogleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    signInGoogle(googleProvider)
      .then((result) => {
        console.log("Login with google", result.user);
        toast.success("Logged in successfully with google");

        const displayName = result.user.displayName;
        const email = result.user.email;
        const photoURL = result.user.photoURL;
        const user = {displayName, email, photoURL};
        axios.post("https://b9a11-server-side-atique-shahriar.vercel.app/users", user).then((res) => {
          console.log(res.data);
        });
        const uEmail = {email};
        axios.post("https://b9a11-server-side-atique-shahriar.vercel.app/jwt", uEmail, {withCredentials: true}).then((res) => {
          console.log(res.data);
          if (res.data.success) {
            setTimeout(() => {
              navigate(location?.state ? location.state : "/");
            }, 1000);
          }
        });
      })
      .catch((error) => {
        console.log("Login with google  failed", error.message);
      });
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
          <h3 className="text-3xl font-bold text-[#199DFF] text-center mb-6">Login</h3>
          <div>
            <form className="space-y-4" onSubmit={handleSignIn}>
              <div className="space-y-2">
                <label>Email</label>
                <input type="email" placeholder="Type Email" name="email" className="w-full border rounded-md border-black px-2 py-2" required />
              </div>
              <div className="space-y-2">
                <label>Password</label>
                <input type="password" placeholder="Type Password" name="password" className="w-full border rounded-md border-black px-2 py-2" required />
              </div>
              <div className="pt-4">
                <input type="submit" value="Login" className="w-full border rounded-md bg-gradient-to-l from-[#3263FF] to-[#57b6ff] hover:bg-gradient-to-r text-lg hover:border hover:border-[#3263FF] text-white font-semibold px-2 py-2" />
              </div>
            </form>
          </div>
          <div className="space-y-4 mt-4 text-center">
            <p>Or login with</p>
            <div className="flex justify-center items-center gap-6 text-5xl hover:cursor-pointer">
              <FcGoogle onClick={handleGoogleSignIn}></FcGoogle>
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
