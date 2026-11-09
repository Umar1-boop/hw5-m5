import { Link } from 'react-router-dom'
import logo from '../../img/Foodieland.png'
import social from '../../img/Social.png'
import './footer.scss'
export default function Footer() {
  return (
    <footer className="footer"><div className="container"><div className="footer-top"><div><img src={logo} alt="Foodieland"/><p>Simple recipes made for everyday cooking.</p></div><nav><Link to="/">Home</Link><Link to="/recipes-page">Recipes</Link><Link to="/blog-page">Blog</Link><Link to="/contact-page">Contact</Link><Link to="/by-create">About Me</Link></nav></div><div className="footer-bottom"><span>© 2026 Foodieland. All rights reserved.</span><img src={social} alt="Social media"/></div></div></footer>
  )
}
