import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mb-5">
        <div className="hero-content flex-col lg:flex-row">
            <div className="w-1/2 mr-20">
                <div className="mockup-phone">
                    <div className="camera"></div>
                    <div className="display">
                        <div className="artboard artboard-demo phone-1">Sign Up and Get Started <br /> <span>EduFun Toybox</span></div>
                    </div>
                </div>
            </div>
            <div className="w-1/2 max-w-sm card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className="text-3xl text-center font-bold">SignUp</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Sign Up</button>
                        <p className='text-center mb-5'>Already Have an account? <Link to='/login' className='text-info font-bold'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default SignUp;