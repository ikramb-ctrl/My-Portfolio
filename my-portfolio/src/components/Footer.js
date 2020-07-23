import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => (
    <footer className="footer">
        <div className = "icon-bar">
                <a className = "social-link github-link" href = "https://github.com/ikramb-ctrl"> <GitHubIcon style={{ fontSize: 150, color:"white",marginRight:200 }}/> </a>
                <a className = "social-link emailp-link" href = "https://mail.google.com"> <AlternateEmailIcon style={{ fontSize: 150, color:"white",marginRight:200 }} /> </a>
                <a className = "social-link linkedin-link" href = "https://www.linkedin.com/in/ikram-beldjilali-298a501a2/"> <LinkedInIcon style={{ fontSize: 150, color:"white" }} /> </a>

      </div>
      
    </footer>
  );
  
  export default Footer;

