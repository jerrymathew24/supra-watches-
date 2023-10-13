import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className=" nav   bar-brand px-5" >supra watches</Link >
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item ">
                            <NavLink to="/" className="nav-link"> Home <span className="sr-only"></span></NavLink >
                        </li>
                        <li className="nav-item">
                            <NavLink to="/category" className="nav-link">Category <span className="sr-only"></span></NavLink >
                        </li>
                        <li className="nav-item">
                            <NavLink to="/register" className="nav-link" >Register  </NavLink >
                        </li>
                        <li className="nav-item">
                            <NavLink to="/login" className="nav-link" >Login  </NavLink >
                        </li>
                        <li className="nav-item">
                            <NavLink to="/cart" className="nav-link" >Cart(0)  </NavLink >
                        </li>
                    </ul >

                </div >
            </nav >
        </>
    )
}

export default Header