import { NavLink } from "react-router-dom"
import "./header.scss"
import social from '../../img/Social.png'
import logo from '../../img/Foodieland.png'

export default function Header() {
  return (
    <header className="header">
        <div className="container header_cont">
            <img src={logo} alt="" />
            <nav className="header_nav">

                <NavLink to={'/'}>
                    <li>Home</li>
                </NavLink>

                <NavLink to={'/recipes-page'}>
                    <li>Recipes</li>
                </NavLink>

                <NavLink to={'/blog-page'}>
                    <li>Blog</li>
                </NavLink>

                <NavLink to={'/contact-page'}>
                    <li>Contact</li>
                </NavLink>

                <NavLink to={'/aboutus-page'}>
                    <li>About Us</li>
                </NavLink>

                <NavLink to={'/by-create'}>
                    <li>About Me</li>
                </NavLink>

            </nav>
            <img src={social} alt="" />
        </div>
    </header>
  )
}
