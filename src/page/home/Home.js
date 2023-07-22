import MainRoutes from '../../Routes';
import SideBar from './sidebar/SideBar';
import { useLocation } from 'react-router-dom';


const Home = () => {


    const location = useLocation()

    return (
        <div className={`Home flex  h-screen`}>
            {/** am sibar la naw am home ya ka body borserkaia tanha la login dar nakawe  */}

            <div className='h-screen'>
                {location.pathname !== "/login" && < SideBar />}
            </div>



            <div className='flex-1 overflow-auto '>
                <MainRoutes />
            </div>
        </div>

    )
}

export default Home

