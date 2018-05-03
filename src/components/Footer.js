import React from 'react'
import Link from "gatsby-link"

class Footer extends React.Component {
    render() {
        return (
            <div>

            <section id="six" className="main tagline">
                <h3>Critical Thinking. <span style={{color: '#333', fontWeight: '700'}}>Collaboration.</span> Success.</h3>
            </section>

            <section id="footer">
                <ul className="icons">
                    <li><a href="#" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                    <li><a href="#" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                    <li><a href="#" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
                    <li><a href="#" className="icon alt fa-envelope"><span className="label">Email</span></a></li>
                </ul>
                <ul className="copyright">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/services/">Services</Link></li>
                    <li><Link to="/solutions/">Solutions</Link></li>
                    <li><Link to="/company/">Company</Link></li>
                    <li><Link to="/contact/">Contact</Link></li>
                </ul>
                <ul className="copyright">
                    <li>&copy; 1999 - 2018 System Soft Technologies</li><li>All rights reserved</li>
                </ul>
            </section>
            </div>
        )
    }
}

export default Footer
