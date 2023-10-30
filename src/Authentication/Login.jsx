import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";

const Login = () => {
  const {signIn} = useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate()
  console.log(location);

    const handleLogin = e =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        signIn(email, password)
        .then((res)=> {
          alert('login success')
          const loggedInUser = res.user;
          const user = {email}
          
          //! get access token
          axios.post('http://localhost:5000/jwt', user, {withCredentials: true})
          .then(res => {
            console.log(res.data);
            if(res.data.success){
               navigate(location?.state ? location?.state : '/')
            }
          })
        })
        .catch(error => {
          console.log(error.message);
        })
    }


  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="flex-1">
          <img src={img} alt="" />
        </div>
        <div className="card  flex-1 shadow-2xl ">
          <form onSubmit={handleLogin} className="card-body pb-0">
            <h1 className="text-3xl font-bold text-center">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                name="password"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button  type="submit" className="btn bg-[#FF3811] text-white">Login</button>
            </div>
          </form>
          <div className="divider">OR</div>

          <div className="flex gap-5 justify-center">
            <button className="text-blue-600 btn btn-circle text-xl">
              <i class="fa-brands fa-facebook"></i>
            </button>
            <button className="btn btn-circle text-xl">
              <i class="fa-brands fa-linkedin"></i>
            </button>
            <button className="text-blue-400 btn btn-circle text-xl">
              <i class="fa-brands fa-google"></i>
            </button>
          </div>
          <p className="text-center font-medium pb-4">
            Don't have an account ?{" "}
            <Link to='/register' className="text-[#FF3811]">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
