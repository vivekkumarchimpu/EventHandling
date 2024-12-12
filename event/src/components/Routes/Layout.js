import React from "react";
import { Link } from "react-router-dom";
const Layout = () => {
    return (
        <>
            <div className="navbar">
                <Link to='/home' style={{padding: '20px'}}>Home</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/about' style={{padding: '20px'}} >About</Link>
            </div>

        </>
    )
}
export default Layout;