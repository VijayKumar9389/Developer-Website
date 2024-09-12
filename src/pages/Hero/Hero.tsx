import './Hero.scss';
import Image from '../../assets/Media/Devices.png';

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-content">
                <div className="hero-text">
                    <h1 className="hero-title">Build the Perfect Business Tool</h1>
                    <p className="hero-subtitle">
                        I craft secure, cloud-based web applications that streamline your business operations and enhance efficiency.
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