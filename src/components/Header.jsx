import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <header className="bg-light py-3">
            <div className="container d-flex justify-content-between align-items-center">
                {/* Logo Section */}
                <a href="/" className="text-dark text-decoration-none h4">MyBlog</a>
                
                {/* Navbar Section */}
                <nav>
                    <ul className="nav">
                        <li className="nav-item">
                            <a href="/" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="/about" className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="/contact" className="nav-link">Contact</a>
                        </li>
                    </ul>
                </nav>
                
                {/* Sign In / Sign Up Buttons */}
                <div className="d-flex">
                    <button className="btn btn-outline-primary me-2">Sign In</button>
                    <button className="btn btn-primary">Sign Up</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
