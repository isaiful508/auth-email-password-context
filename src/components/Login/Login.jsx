import { Link, useNavigate } from "react-router-dom";
import Register from './../Register/Register';
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Result } from "postcss";


const Login = () => {
    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                e.target.reset();
                navigate('/');
            })
            .catch(error => console.error(error))

    }

    const handleGoogle = () => {
        signInWithGoogle()
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.error(error);
        })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content space-y-8  flex-col ">

                <div className="text-center ">
                    <h1 className="text-5xl  font-bold">Login now!</h1>

                </div>

                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={handleLogin} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">

                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <input type="password" placeholder="Password" name="password" className="input input-bordered" required />

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot Password?</a>
                            </label>
                            <p>New Here ? Please<Link to='/register'>
                                <button className="btn btn-link">Register</button>
                            </Link> </p>

                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>
                            <button onClick={handleGoogle} className="btn btn-link btn-primary">Google</button>
                        </p>
                    </form>



                </div>

            </div>
        </div>
    );
};

export default Login;