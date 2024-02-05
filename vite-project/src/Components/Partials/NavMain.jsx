import style from './NavMain.module.scss'
import { NavLink } from 'react-router-dom';



export const NavMain = () => {
    return(
        <nav className={style.navMain}>
                <h2>REACT SNIPPETS</h2>
                <li><NavLink to='/'>HOME</NavLink></li>
                <li><NavLink to='/Loader'>LOADER</NavLink></li>
                <li><NavLink to='/Galleri'>GALLERI</NavLink></li>
                <li><NavLink to='/TextRepeater'>TEXT-REPEATER</NavLink></li>
                <li><NavLink to='/Fetch'>FETCHES</NavLink></li>
                <li><NavLink to='/Form'>FORM</NavLink></li>
                <li><NavLink to='/Login'>LOGIN</NavLink></li>
        </nav>
    )
}