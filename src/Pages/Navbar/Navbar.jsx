import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link> <h2 className="text-4xl text-cyan-500">EduFun <span className="text-black">Toybox</span></h2></Link>
            </div>
            <div className="gap-6 mr-44">
              <Link to='/'><h2 className="text-2xl">Home</h2></Link>
              <Link to="blogs"><h2 className="text-2xl">Blogs</h2></Link>
                <h2 className="text-2xl">AllToys</h2>
                <h2 className="text-2xl">AddToy</h2>
                <h2 className="text-2xl">MyToys</h2>
                <Link to='/login'><button className="btn btn-info text-2xl">Login</button></Link>
               </div>
            <div className="flex-none">
                <div className="avatar">
                    <div className="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;