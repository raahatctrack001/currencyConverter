import React from 'react';
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-6">
            <div className="container mx-auto flex flex-wrap justify-between items-center">
                <div className="flex flex-col">
                    <span>&copy; {new Date().getFullYear()} Currency Converter</span>
                    <div className="flex mt-2">
                        <a href="/privacy-policy" className="mr-4">Privacy Policy</a>
                        <a href="/terms-of-service">Terms of Service</a>
                    </div>
                </div>
                <div className="flex">
                    <a
                        href="https://twitter.com/your_profile"
                        className="text-xl mx-2"
                        aria-label="Twitter"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <FaTwitter />
                    </a>
                    <a
                        href="https://facebook.com/your_profile"
                        className="text-xl mx-2"
                        aria-label="Facebook"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <FaFacebook />
                    </a>
                    <a
                        href="https://linkedin.com/your_profile"
                        className="text-xl mx-2"
                        aria-label="LinkedIn"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://instagram.com/your_profile"
                        className="text-xl mx-2 non-operat"
                        aria-label="Instagram"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <FaInstagram />
                    </a>
                </div>
            </div>
            
            <div className="text-center mt-4">
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="bg-blue-600 text-white p-2 rounded"
                >
                    Back to Top
                </button>
            </div>
        </footer>
    );
};

export default Footer;
