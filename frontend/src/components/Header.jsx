import React, { useState } from 'react';
import { FaSun, FaMoon, FaBell, FaUserCircle } from 'react-icons/fa';
import { currencyData } from '../currency.js'

const Header = ({ theme, setTheme }) => {
    const [notifications, setNotifications] = useState(0);


    // Handle theme toggle
    const handleThemeToggle = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
                <img
                    src="logo.png"
                    alt="Currency Converter Logo"
                    className="h-8 w-8 mr-4"
                />
                <h1 className="text-2xl font-bold">Currency Converter</h1>
            </div>

            <div className="flex items-center">
                <button
                    className="mr-4 text-xl"
                    onClick={handleThemeToggle}
                    aria-label="Toggle Theme"
                >
                    {theme === 'light' ? <FaMoon /> : <FaSun />}
                </button>

                <button className="mr-4 text-xl" aria-label="Notifications">
                    <FaBell />
                    {notifications > 0 && (
                        <span className="bg-red-500 text-white text-xs rounded-full px-2 ml-1">
                            {notifications}
                        </span>
                    )}
                </button>

                <button className="text-xl" aria-label="User Profile">
                    <FaUserCircle />
                </button>
            </div>
        </header>
    );
};

export default Header;
