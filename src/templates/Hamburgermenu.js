import React, { useState } from 'react';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    //const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState(null); // Maneja el submenú activo

    const logo = `${process.env.PUBLIC_URL}/img/logo.svg`

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const toggleSubMenu = (index) => {
        // Si el submenú clickeado es el mismo que el activo, ciérralo; de lo contrario, ábrelo
        setActiveSubMenu(activeSubMenu === index ? null : index);
    };

    return (
        <div className="menu-container">
           
            <img src={logo} alt="Logo" width="150" className='logo'/>
          
            <button className="hamburger" onClick={toggleMenu}>
                &#9776; {/* Icono de menú hamburguesa */}
            </button>
            {isOpen && (
                <div className="menu-options">
                    <div className="menu-option" onClick={() => toggleSubMenu(0)}>My Log</div>
                    {activeSubMenu === 0 && (
                        <div className="sub-menu">
                            <div className="sub-menu-option"> - Notes</div>
                            <div className="sub-menu-option"> - Data collected</div>
                        </div>
                    )}
                    <div className="menu-option" onClick={() => toggleSubMenu(1)}>Missions</div>
                    {activeSubMenu === 1 && (
                        <div className="sub-menu">
                            <div className="sub-menu-option"> - Mision 01</div>
                            <div className="sub-menu-option"> - Mision 02</div>
                            <div className="sub-menu-option"> - Mision 03</div>
                        </div>
                    )}
                    <div className="menu-option">Learn More</div>
                </div>
            )}
        </div>
    );
};

export default HamburgerMenu;