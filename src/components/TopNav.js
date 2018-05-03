import React from 'react'
import Link from "gatsby-link"
import logo from '../assets/images/logo.png'

class TopNav extends React.Component {
    render() {
        return (
            <nav id="topnav">
            	<div className="logo"> 
            		<Link to="/"><img src={logo} /></Link>
            	</div>
            	<ul>
            		<li><Link to="/">Home</Link></li>
            		<li><Link to="/services/">Services</Link></li>
            		<li><Link to="/solutions/">Solutions</Link></li>
            		<li><Link to="/company/">Company</Link></li>
            		<li><Link to="/careers/">Careers</Link></li>
            		<li><Link to="/contact/">Contact</Link></li>
            	</ul>
            </nav>
        )
    }
}

export default TopNav