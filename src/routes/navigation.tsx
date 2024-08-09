import { Link, Outlet} from 'react-router-dom';
import { Fragment } from 'react';
import { ReactComponent as WineLogo } from '../assets/noun-grape-85862.svg'

//wine logo has watermark, we will keep it for now

const Navigation: React.FC = () => {
    return(
        <Fragment>
            <div className="navigation h-[70px] w-full flex justify-between mb-[25px] bg-burgundy shadow-xl rounded-b-lg">
                <Link className="logo-container" to={'/'}>
                    <WineLogo className='logo w-16 h-16'/> 
                </Link>
            
                <div className="nav-links-container w-1/2 h-full flex items-center justify-end">
                    <Link className="nav-link px=[15px] py-[10x] cursor-pointer" to ={'/auth'}>
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;