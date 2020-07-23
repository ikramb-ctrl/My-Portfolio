import React from 'react';
import './Skills.css';


function Skills() {
    return (
        <div className='skills'>
            <h2 id="Compétences">--- Mes Compétences --- </h2>
            <div className='first-paragraphe'>
                <h3 class="animate__animated animate__bounceInRight">Travail d'équipe</h3>
<p class="animate__animated animate__zoomIn">J'ai pu apprendre en travaillant en équipe </p>

            </div>

            <div className='second-paragraphe'>
            <h3 class="animate__animated animate__bounceInRight">Persévérance</h3>
<p class="animate__animated animate__zoomIn">Je vais au bout de mes objectifs</p>

            </div>
            <div className='third-paragraphe'>
            <h3 class="animate__animated animate__bounceInLeft">Autonomie</h3>
<p class="animate__animated animate__zoomIn">Je travaille aussi bien seul qu'en groupe</p>

            </div>

            <div className='fourth-paragraphe'>
            <h3 class="animate__animated animate__bounceInLeft">Adaptation</h3>
<p class="animate__animated animate__zoomIn">Je peux et sais m'adapter à toutes situation</p>


            </div>
        </div>
    );
}

export default Skills;