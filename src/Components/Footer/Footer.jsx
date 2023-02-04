import React from 'react';
import '../../App.css';


const currentYear = new Date().getFullYear();

const Footer = () => (
    <footer className="footer">
        <p>Copyright © {currentYear}</p>
    </footer>
)

export default Footer;
