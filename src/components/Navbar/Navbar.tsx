import { useState, useEffect } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.scss';

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="logo">
                <h2 onClick={() => window.scrollTo(0, 0)}>Vijay Kumar</h2>
            </div>
            <div className={`nav-container ${isModalOpen ? 'open' : ''}`}>
                <ScrollLink
                    to="skills-container"
                    className="nav-link"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    onClick={closeModal}
                >
                    Services
                </ScrollLink>
                <ScrollLink
                    to="work-container"
                    className="nav-link"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    onClick={closeModal}
                >
                    Portfolio
                </ScrollLink>
                <ScrollLink
                    to="footer"
                    className="nav-link"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    onClick={closeModal}
                >
                    Contact
                </ScrollLink>
            </div>
            <button onClick={toggleModal} className="menu-btn">
                {isModalOpen ? <IoClose /> : <IoMenu />}
            </button>
            <div className={`overlay ${isModalOpen ? 'show' : ''}`} onClick={toggleModal}></div>
        </div>
    );
}

export default Navbar;