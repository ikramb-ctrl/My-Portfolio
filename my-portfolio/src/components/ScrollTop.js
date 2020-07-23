import React, { useState } from 'react';
import '../App.css';
import BackupIcon from '@material-ui/icons/Backup';

const ScrollTopArrow = () => {

    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false)
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', checkScrollTop)

    return (
        <BackupIcon className="scrollTop" onClick={scrollTop} style={{ width:60,height: 140, marginLeft:1700,color:"grey", display: showScroll ? 'flex' : 'none' }} />
    );
}

export default ScrollTopArrow;