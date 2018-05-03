import React from 'react'
import Link from "gatsby-link"
import logo from '../../assets/images/logo.png'
import Status from "../../components/Status"

class TopNav extends React.Component {
    render() {
        return (
            <nav>      
                <a href="http://www.cgsdev.com"><img src={logo} alt="img" style={{marginTop: "10px", marginLeft: "10px"}} /></a>
                <Status />      
            </nav>
        )
    }
}

export default TopNav