import { Link } from "react-router-dom"
import classes from "./MainNavigation.module.scss"

export default function MainNavgation() {
    const root = 'react-ghPageTest'
    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to={`/${root}/`} >All Meetups</Link>
                    </li>
                    <li>
                        <Link to={`/${root}/new-meetup`}>Add New Meetup</Link>
                    </li>
                    <li>
                        <Link to={`/${root}/favorites`}>My Favorites</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}