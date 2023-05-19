import { Link } from "react-router-dom";

const NavigationBar = () => {
    const NavItems = <>
        <li className="text-2xl"><Link to='/'>Home</Link></li>
        <li className="text-2xl"><Link to='/blog'>Blogs</Link></li>
        <li className="text-2xl"><Link>AllToys</Link></li>
        <li className="text-2xl"><Link>AddToy</Link></li>
        <li className="text-2xl"><Link>MyToys</Link></li>
        <li className="text-2xl"><Link to='/login'>login</Link></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {NavItems}
                    </ul>
                </div>
                <Link> <h2 className="text-4xl text-cyan-500">EduFun <span className="text-black">Toybox</span></h2></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavItems}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="avatar">
                    <div className="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;