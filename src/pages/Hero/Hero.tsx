import './Hero.scss';
import Image from '../../assets/Media/Devices.png';

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-content">
                <div className="hero-text">
                    <h1 className="hero-title">Launch Your Custom Business Application</h1>
                    <p>
                        I design secure, cloud-based web applications (accessible via a web browser) to streamline business operations, improve efficiency, and
                        ensure accuracy.
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