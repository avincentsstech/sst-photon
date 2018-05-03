import React from 'react'
import Link from "gatsby-link"
import logo from '../../assets/images/logo.png'

class TopNav extends React.Component {
    render() {
        return (
            <div style={{background: "#333", textAlign: "right", color: "#fff", fontSize: "small", paddingRight: "10px"}}>
                &copy; Copyright 2018 - System Soft Technologies - All Rights Reserved.
            </div>
        )
    }
}

export default TopNav