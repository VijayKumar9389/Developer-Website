import { IoLocationOutline, IoCallOutline, IoMailOutline } from 'react-icons/io5';
import './Footer.scss';
import resumePDF from '../../assets/resume.pdf';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-contact">
                    <div className="contact-item">
                        <IoLocationOutline className="contact-icon"/>
                        <span>Saskatoon, SK</span>
                    </div>
                    <div className="contact-item">
                        <IoCallOutline className="contact-icon"/>
                        <a href="tel:+13069945031">1 (306) 994-5031</a>
                    </div>
                    <div className="contact-item">
                        <IoMailOutline className="contact-icon"/>
                        <a href="mailto:VijayMKumar9389@gmail.com">VijayMKumar9389@gmail.com</a>
                    </div>
                </div>
                <div className="footer-actions">
                    <a href={resumePDF} download="VijayKumar_Resume.pdf" className="action-button">
                        Download Resume
                    </a>
                    <a href="https://github.com/VijayKumar9389" className="action-button">View My GitHub</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Vijay Kumar. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;