import { NavLink } from 'react-router-dom'

import classes from './MainHeader.module.css'
const MainHeader = () => {
    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink className={classes.link} activeClassName = {classes.active} to='/home'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={classes.link} activeClassName = {classes.active} to='/projects'>Projects</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader