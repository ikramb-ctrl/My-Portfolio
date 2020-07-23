import React from 'react';
import './Header.css';


const Header = () => (
    <header className="menu">
        <div className='logo'><img src="Logo-portfolio.png" alt='Logo du Portfolio' className='logoHome' /></div>
        <h1> Bonjour et Bienvenue sur mon Portfolio</h1>
        <p className='citation'>"Si debugger, c'est supprimer des bugs, alors proggramer ne peut être que les ajouter" </p>
        <quote>-- Edsger Dijkstra --</quote>
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