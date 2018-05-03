import React from 'react'
import Link from "gatsby-link"

class TopNav extends React.Component {
    render() {
        return (
            <nav id="leftnav">
            	<ul>
            		<li><Link to="/">Admin Home</Link></li>
            		<li><Link to="/services/">Job Postings</Link></li>
            		<li><Link to="/solutions/">Job Applicants</Link></li>
            		<li><Link to="/company/">Dropdowns</Link></li>
            		<li><Link to="/careers/">Users</Link></li>
            	</ul>
            </nav>
        )
    }
}

export default TopNav