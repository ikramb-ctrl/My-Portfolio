import React from 'react';
import './Header.css';


const Header = () => (
    <header className="menu">
        <div className='logo'><img src="Logo-portfolio.png" alt='Logo du Portfolio' className='logoHome' /></div>
        <h1>Bonjour et Bienvenue sur mon Portfolio</h1>
        <nav>

            <ul>
                <li><a href="#Bio">Bio</a></li>

                <li><a href="#Compétences">Skills</a></li>

                <li><a href="#Projet">Projet</a></li>

                <li><a href="#Contact">Contact </a></li>

                </ul>

</nav>


    </header>
);

export default Header;