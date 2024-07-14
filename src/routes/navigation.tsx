import { Link, Outlet, Router } from 'react-router-dom'
import { Fragment } from 'react'

const Navigation: React.FC = () => {
    return(
        <Fragment>
            <div className="navigation h-[70px] w-full flex justify-between mb-[25px]">
                <Link className="logo-container" to={'/'}/>
            </div>
            <div className="nav-links-container w-1/2 h-full flex items-center justify-end">
                <Link className="nav-link px=[15px] py-[10x] cursor-pointer" to ={'/auth'}/>
            </div>
        </Fragment>
    )
}

export default Navigation;