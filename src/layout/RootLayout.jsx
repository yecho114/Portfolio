import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { HashLink as NavLink } from 'react-router-hash-link';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";


const RootLayout = () => {

    const [menuOPen, setMenuOpen] = useState(false);

    const toggle = () => {
        setMenuOpen(!menuOPen)
    }


    return (
        <div className="root_layout">
            <header>
                <nav className={menuOPen ? "open" : ""}>
                    <h2>YECHO</h2>
                    <ul>
                        <li><NavLink className='nav_link' >Home</NavLink></li>
                        <li><NavLink className='nav_link' smooth to="#projects">Projects</NavLink></li>
                        <li><NavLink className='nav_link' smooth to="#skills">Skills</NavLink></li>
                        <li><NavLink className='nav_link' smooth to="#about">About Me</NavLink></li>
                        <li><NavLink className='nav_link' smooth to="#clients">Clients</NavLink></li>
                        <li><NavLink className='nav_link' smooth to="#contacts">Contacts</NavLink></li>
                    </ul>
                   

                    <button onClick={toggle}>
                        {!menuOPen ?
                            (<FontAwesomeIcon className='.navbtn nav_bar' icon={faBars} size='lg' />)
                            :
                            (<FontAwesomeIcon className='.navbtn nav_close' icon={faXmark} size='lg' />)
                        }
                    </button>
                </nav>

                <div className='menu_contianer'>
                        <li><NavLink className='nav_link' onClick={toggle} >Home</NavLink></li>
                        <li><NavLink className='nav_link' onClick={toggle} smooth to="#projects">Projects</NavLink></li>
                        <li><NavLink className='nav_link' onClick={toggle} smooth to="#skills">Skills</NavLink></li>
                        <li><NavLink className='nav_link' onClick={toggle} smooth to="#about">About Me</NavLink></li>
                        <li><NavLink className='nav_link' onClick={toggle} smooth to="#clients">Clients</NavLink></li>
                        <li><NavLink className='nav_link' onClick={toggle} smooth to="#contacts">Contacts</NavLink></li>

                    </div>
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout;