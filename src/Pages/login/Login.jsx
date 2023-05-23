import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from "react-icons/fc";
import './Login.css'
import PageTitle from "../../PageTitle";

const Login = () => {

    const { loginUser, googleLogin } = useContext(AuthContext);
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/';
    console.log(from)

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

       
        // Email password Login system
        loginUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
                setError('')
                toast.success('Success! You have been logged in.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                navigate(from, {replace: true})

            })
            .catch(() => {
                setError("please provide valid email and password")
            })
    }

    // Google Login system
    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            setError('')
            const user = result.user;
            console.log(user);
            toast.success('Success! You have been logged in by Google.', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            navigate(from, {replace: true});
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200 mb-5">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-20">
                    <div className="mockup-phone">
                        <div className="camera"></div>
                        <div className="display">
                            <div className="artboard artboard-demo phone-1">Welcome back! Please log in <br /> <span>EduFun Toybox</span></div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 max-w-sm card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" placeholder="email" className="input input-bordered"  />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name="password" placeholder="password" className="input input-bordered"  />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                                <p className='text-center mt-2 mb-5'>New to EduFun? <Link to='/signup' className='text-info font-bold'>Sign Up</Link></p>
                                <div className="divider">Sign In With Google</div>
                                <p className="text-rose-600">{error}</p>
                                    <div className="text-center">
                                        <button onClick={handleGoogleLogin}><FcGoogle className="googleIcon"/></button>
                                    </div>

                            </div>
                        </form>
                    </div>
                </div>
                <PageTitle title="EduFun | login"/>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </div>
    );
};

export default Login;