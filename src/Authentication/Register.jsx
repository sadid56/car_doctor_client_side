import { Link } from "react-router-dom";
import img from "../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
    const {createUser, ProfileUpdate} = useContext(AuthContext)

    const HandleRegister = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email, password);

        //create user
        createUser(email, password)
        .then(res => {
             console.log(res.user);
            ProfileUpdate(name)
            .then()
            .catch(error => {
              console.log(error.message);
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
          <form onSubmit={HandleRegister} className="card-body pb-0">
            <h1 className="text-3xl font-bold text-center">Registation</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered"
                required
                name="name"
              />
            </div>
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
        
            </div>
            <div className="form-control mt-6">
              <button  type="submit" className="btn bg-[#FF3811] text-white">Registation</button>
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
            Already have an account ?{" "}
            <Link to='/login' className="text-[#FF3811]">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
