import './Skills.scss';
import React from 'react';
import { FaCode, FaListUl, FaCloudUploadAlt, FaPencilAlt } from 'react-icons/fa';
import Header from "../../components/Header/Header";
import svgOne from '../../assets/Media/requirements.svg';
import svgTwo from '../../assets/Media/design.svg';
import svgThree from '../../assets/Media/develop.svg';
import svgFour from '../../assets/Media/deploy.svg';

type Competency = {
    title: string;
    description: string[];
    icon: React.ElementType; // Updated this line
    img: string;
};

export const competenciesData: Competency[] = [
    {
        title: "Consulting",
        description: [
            "Assess your business operations to identify areas for improvement and growth.",
            "Provide recommendations to streamline your workflows and enhance productivity.",
            "Create a technology roadmap tailored to your specific business needs and goals.",
            "Offer clear communication to ensure successful project delivery."
        ],
        icon: FaListUl,
        img: svgOne,
    },
    {
        title: "Design",
        description: [
            "Craft easy-to-use interfaces that make navigating your software simple for anyone.",
            "Ensure your application works perfectly on any device with responsive design.",
            "Translate your business processes into clear, accurate data models that reflect your operations.",
            "Automate routine tasks, saving you time and reducing manual work."
        ],
        icon: FaPencilAlt,
        img: svgTwo,
    },
    {
        title: "Development",
        description: [
            "Build secure and high-performance servers to manage your data.",
            "Use modern tools like React and Node.js to deliver your solutions quickly.",
            "Use the latest security measures to ensure safe communication.",
            "Thorough validation to safeguard user inputs and deletions to prevent operational errors."
        ],
        icon: FaCode,
        img: svgThree,
    },
    {
        title: "Deployment",
        description: [
            "Implement continuous integration to make updates and new features easy to add.",
            "Reliable cloud hosting ensures your app is always available and performs smoothly.",
            "Configure scalable cloud storage for all your important files and data.",
            "Provide ongoing monitoring and support to troubleshoot issues and keep everything running smoothly."
        ],
        icon: FaCloudUploadAlt,
        img: svgFour,
    }
];

const Skills: React.FC = () => {

    return (
        <div className="skills-container">
            <Header
                heading="Bring Your Digital Solution to Life"
                desc="From concept to deployment, I manage every step of development to drive your organization's digital transformation."
            />

            <div className="competencies-grid">
                {competenciesData.map((competency, index) => (
                    <div key={index} className={`competency-section ${index % 2 === 0 ? 'even' : 'odd'}`}>
                        <div className="competency-details">
                            <div className="image-container" data-aos="fade-left">
                                <img src={competency.img} alt={competency.title} className="competency-img" />
                            </div>
                            <div className="description" >
                                <div className="header-icon-title">
                                    <h3>{competency.title}</h3>
                                </div>
                                <ul>
                                    {competency.description.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className="description-item"
                                            data-aos="fade-right"
                                            data-aos-delay={`${idx * 100}`} // Delay increases by 100ms for each item
                                        >
                                            <p>{item}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;