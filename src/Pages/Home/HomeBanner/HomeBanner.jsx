import { BiUserCheck } from "react-icons/bi";
import { AiFillTrophy, AiFillLike, AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

const HomeBanner = () => {
    return (
        <div className="relative bg-gray-200" >
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">Welcome to <span className="text-cyan-500">EduFun</span> Toybox</h1>
                        <p className="text-lg md:text-xl text-black mb-6">Discover a world of toys and joy. Pre-register Now for 10% discount.</p>
                        <Link to='/signup'><button className="btn btn-outline btn-primary">
                            register Now
                        </button></Link>
                    </div>
                    <div>
                        <div className="bg-white p-4 rounded-lg shadow-lg">
                            <div className="flex items-center mb-4">
                                <BiUserCheck />
                                <p className="text-lg font-medium">1000+ Happy Clients</p>
                            </div>
                            <div className="flex items-center mb-4">
                                <AiFillTrophy />
                                <p className="text-lg font-medium">99% Success Rate</p>
                            </div>
                            <div className="flex items-center">
                                <AiFillLike />
                                <p className="text-lg font-medium">10+ Years of Experience</p>
                            </div>
                            <div className="flex items-center mt-4">
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="mr-2">
                                    <AiFillFacebook />
                                </a>
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                    <span className="h-24"> <AiOutlineInstagram /></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;