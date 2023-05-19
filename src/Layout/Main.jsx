import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';
import NavigationBar from '../Pages/NavigationBar/navigationBar';

const Main = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className='min-h-[calc(100vh-200px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;