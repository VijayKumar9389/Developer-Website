import './Hero.scss';
import Image from '../../assets/Media/Devices.png';

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-content">
                <div className="hero-text">
                    <h1 className="hero-title">Build the Perfect Business Tool for Your Vision</h1>
                    <p className="hero-subtitle">
                        I craft secure, cloud-based applications tailored to streamline your business operations, ensuring efficiency and scalability.
                    </p>
                </div>
                <div className="hero-image-wrapper">
                    <img className="hero-image" src={Image} alt="Custom web applications on devices"/>
                </div>
            </div>
        </div>
    );
};

export default Hero;