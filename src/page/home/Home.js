import MainRoutes from '../../Routes';
import SideBar from './sidebar/SideBar';
import { useLocation } from 'react-router-dom';


const Home = () => {

    let stor = localStorage.getItem('data');
    const location = useLocation()

    return (
        <div className='Home'>


            {/** am sibar la naw am home ya ka body borserkaia tanha la login dar nakawe  */}
            {location.pathname !== "/login" && < SideBar />}

            <MainRoutes stor={stor} />
        </div>

    )
}

export default Home

