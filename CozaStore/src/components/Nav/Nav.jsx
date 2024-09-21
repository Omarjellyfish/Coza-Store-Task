import './Nav.css'
import { Outlet, Link,useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass,faCartShopping,faHeart  } from '@fortawesome/free-solid-svg-icons';
import { useContext } from "react";
import { LoginContext } from '../../Context/LoginContext';
export default function Nav(){
    const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);

    const Navigate=useNavigate()

    function handleLogout(){
        setIsLoggedIn(false);
        console.log('hello from logout')
        Navigate('/login')
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
            {isLoggedIn && <FontAwesomeIcon icon={faCartShopping} className='search-icon'/>}
            {isLoggedIn && <FontAwesomeIcon icon={faHeart}  className='search-icon' />}
            <button onClick={()=>{handleLogout()}} className='log-btn'>{isLoggedIn ?('Log Out'):('Log In')}</button>
            {/* fixed*/}
        </div>
    </nav>
    <Outlet/>
    </>
    )
}