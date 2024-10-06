import React, { useState } from 'react';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const logo = `${process.env.PUBLIC_URL}/img/logo.svg`

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const toggleSubMenu = () => {
        setIsSubMenuOpen(!isSubMenuOpen);
    };

    return (
        <div className="menu-container">
           
            <img src={logo} alt="Logo" width="150" className='logo'/>
          
            <button className="hamburger" onClick={toggleMenu}>
                &#9776; {/* Icono de menú hamburguesa */}
            </button>
            {isOpen && (
                <div className="menu-options">
                    <div className="menu-option" onClick={toggleSubMenu}>My Log</div>
                    {isSubMenuOpen && (
                        <div className="sub-menu">
                            <div className="sub-menu-option"> - Notes</div>
                            <div className="sub-menu-option"> - Data collected</div>
                        </div>
                    )}
                    <div className="menu-option">Missions</div>
                    <div className="menu-option">Learn More</div>
                </div>
            )}
        </div>
    );
};

export default HamburgerMenu;