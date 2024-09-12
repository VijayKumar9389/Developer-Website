import './Skills.scss';
import React, { useState } from 'react';
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
            "Assess your business operations to uncover inefficiencies and growth opportunities.",
            "Deliver actionable recommendations to streamline workflows and increase efficiency.",
            "Create a customized technology roadmap that aligns with your unique business goals.",
            "Provide ongoing support and transparent communication to ensure successful project delivery."
        ],
        icon: FaListUl,
        img: svgOne,
    },
    {
        title: "Design",
        description: [
            "Craft easy-to-use interfaces that make navigating your software simple for anyone.",
            "Ensure your application works perfectly on any device with responsive design.",
            "Automate time-consuming tasks and calculations with intelligent algorithms.",
            "Develop accurate data models that reflect your business operations for better decision-making."
        ],
        icon: FaPencilAlt,
        img: svgTwo,
    },
    {
        title: "Development",
        description: [
            "Build strong, secure systems to seamlessly connect your app to its database.",
            "Implement checks to ensure your data is always accurate and secure.",
            "Write clean, efficient code that makes it easy to add new features in the future.",
            "Use cutting-edge tools like React and Node.js to develop your app faster."
        ],
        icon: FaCode,
        img: svgThree,
    },
    {
        title: "Deployment",
        description: [
            "Protect your business with top-tier security systems to prevent data breaches.",
            "Set up reliable cloud hosting so your app is always available and running smoothly.",
            "Provide secure storage solutions for all your important business files and images.",
            "Offer ongoing monitoring and support to keep your systems up-to-date and running efficiently."
        ],
        icon: FaCloudUploadAlt,
        img: svgFour,
    }
];
const Skills: React.FC = () => {
    const [selectedCompetency, setSelectedCompetency] = useState<Competency>(competenciesData[0]);

    const handleClick = (competency: Competency) => {
        setSelectedCompetency(competency);
    };

    return (
        <div className="skills-container">
            <Header
                heading="Bring Your Digital Solution to Life"
                desc="From Concept to Deployment, I Oversee Every Stage of the Application Development Lifecycle"
            />
            <div className="competency-list" data-aos="fade-right">
                {competenciesData.map((competency, index) => (
                    <div
                        key={index}
                        className={`competency-item ${selectedCompetency.title === competency.title ? 'active' : ''}`}
                        onMouseEnter={() => handleClick(competency)}
                    >
                        <competency.icon className="icon"/>
                        <span className="title"><h5>{competency.title}</h5></span>
                    </div>
                ))}
            </div>
            <div className="competency-section">
                <div className="competency-details">
                    <div className="image-container" data-aos="fade-up">
                        <img src={selectedCompetency.img} alt={selectedCompetency.title}/>
                    </div>
                    <div className="description" data-aos="fade-left">
                        <ul>
                            {selectedCompetency.description.map((item, index) => (
                                <li key={index}>
                                    <p>{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;