import { Link } from "react-router-dom";
import PageTitle from "../../PageTitle";


const ErrorPage = () => {
    return (
        <div className="text-center">
            <PageTitle title="EduFun | 404 Error" />
            <img className="mx-auto" width={788} src="https://i.ibb.co/T1sS28p/404.png" alt="" />
            <h4 className="text-4xl mt-2">Oops! The page you are looking for does not exist.</h4>
            <Link to='/' className="p-4"><button className="btn btn-outline">Back to home</button></Link>
        </div>
    );
};

export default ErrorPage;