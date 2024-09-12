import './Hero.scss';
import Image from '../../assets/Media/Devices.png';

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-content">
                <div className="hero-text">
                    <h1 className="hero-title">Launch Your Custom Business Application</h1>
                    <p>
                        Access cloud-based apps from any device, ensuring seamless management and visualization anytime,
                        anywhere.
                    </p>
                </div>
                <div className="hero-image-wrapper">
                    <img className="hero-image" src={Image} alt="Laptops"/>
                </div>
            </div>

        </div>
    );
};

export default Hero;