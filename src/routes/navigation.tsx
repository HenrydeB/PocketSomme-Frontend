import { Link, Outlet} from 'react-router-dom';
import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWineBottle } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const wineIcon = faWineBottle as IconProp;

//wine logo has watermark, we will keep it for now

const Navigation: React.FC = () => {
    return(
        <Fragment>
            <div className="navigation h-[70px] w-full flex justify-between mb-[25px] bg-burgundy shadow-xl rounded-b-lg">
                <Link className="logo-container" to={'/'}>
                    <FontAwesomeIcon icon={wineIcon} className='h-[75%] w-[70px] p-[10px]'/>
                </Link>
            
                <div className="nav-links-container w-1/2 h-full flex items-center justify-end pr-[10px]">
                    <Link className="nav-link px=[15px] py-[10x] cursor-pointer text-cream font-default hover:underline" to ={'/auth'}>
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;