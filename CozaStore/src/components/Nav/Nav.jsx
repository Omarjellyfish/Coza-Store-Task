import './Nav.css'
import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass,faCartShopping,faHeart  } from '@fortawesome/free-solid-svg-icons';
import { useEffect,useState } from 'react';
export default function Nav(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const loginStatus = localStorage.getItem("loginStatus");
    //current falsey logic, need to make this happen at login
    useEffect(() => {
        setIsLoggedIn(true);
    }, [loginStatus,isLoggedIn]);
    function handleLogout(){
        localStorage.setItem("loginStatus", 'false');
        setIsLoggedIn(false);
    }
    return(
        <>
        <nav>
        <div className="logo"><img src='../../../images/icons/logo-01.png'alt="CozaStore" /></div>
        <ul className="util">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Shop">Shop</Link></li>
            <li><Link to="/Features">Features</Link></li>
            <li><Link to="/Blog">Blog</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/">Contact</Link></li>
        </ul>
        
        <div className="search-prof-cart">
            <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' />
            {isLoggedIn && <FontAwesomeIcon icon={faCartShopping} />}
            {isLoggedIn && <FontAwesomeIcon icon={faHeart} />}
            <Link to={'./Login'} onClick={()=>{handleLogout}} >Login</Link>
        </div>
    </nav>
    <Outlet/>
    </>
    )
}