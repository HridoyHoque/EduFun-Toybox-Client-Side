import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";
import PageTitle from "../../PageTitle";
import { useMediaQuery } from "react-responsive";

const SignUp = () => {
    const isSmallDevice = useMediaQuery({ maxWidth: 767 });
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        setError('')
        if (password.length < 6) {
            return setError("Your password must be at least six characters long")

        }
        console.log(name, email, password, photo)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
                setError('')
                toast.success('Created account successfully', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                updateUserData(result.user, name, photo);
                navigate(from, { replace: true })
            })
            .catch(() => {
                setError("Please provide valid information to register account")
            })
    }

    const updateUserData = (user, name, photo) => {
        updateProfile(user, {
            displayName: name, photoURL: photo
        })
            .then(() => {
                console.log('user updated successfully')
            })
            .catch(error => {
                console.log(error)
            })
    }
    
    return (
        <div className="hero min-h-screen bg-base-200 mb-5">
            <div className="hero-content flex-col lg:flex-row">
                {/* <div className={isSmallDevice? "hidden" : ""}> */}
                <div className={`w-1/2 mr-20 ${isSmallDevice ? 'hidden' : 'block md:block'}`}>
                    <div className="mockup-phone">
                        <div className="camera"></div>
                        <div className="display">
                            <div className="artboard artboard-demo phone-1">Sign Up and Get Started <br /> <span>EduFun Toybox</span></div>
                        </div>
                    </div>
                </div>
                {/* </div> */}
                <div className="w-1/2 max-w-sm card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">SignUp</h1>
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Your Photo" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                                <p className='text-center mb-5 mt-2'>Already Have an account? <Link to='/login' className='text-info font-bold'>Login</Link></p>
                                <p className="text-rose-600">{error}</p>
                            </div>
                        </form>
                    </div>
                </div>
                <PageTitle title="EduFun | SignUp" />
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

export default SignUp;