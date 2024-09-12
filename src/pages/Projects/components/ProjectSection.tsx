import './ProjectSection.scss';
import {WorkData} from '../data.ts';
import {useState} from 'react';
import {FaChevronDown} from 'react-icons/fa6';

const ProjectSection: React.FC<{ project: WorkData }> = ({project}) => {
    const [activeSectionIndex, setActiveSectionIndex] = useState<number | null>(null);

    const toggleSection = (index: number) => {
        setActiveSectionIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <section className="project-section">
            <div className="content-wrapper">
                <div className="designed-for">
                    <img src={project.logo} alt="Company Logo"/>
                    <div className="info-container">
                        <h3 className="project-title">{project.title}</h3>
                        {project.desc && <p className="project-description">{project.desc}</p>}
                    </div>
                </div>
                {project.imageUrl && (
                    <div className="image-container" data-aos="fade-in">
                        <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="project-image"
                        />
                    </div>
                )}

                {project.sections.map((section, index) => (
                    <div key={index} className="section-item">
                        <div
                            onClick={() => toggleSection(index)}
                            className={`section-toggle ${activeSectionIndex === index ? 'active' : ''}`}
                        >
                            <div className="section-content">
                                <div className="section-header">
                                    <h4>{section.title}</h4>
                                    <p className="section-description">View Module</p>
                                </div>
                                <div className="arrow-container">
                                    <FaChevronDown
                                        className={`arrow-icon ${activeSectionIndex === index ? 'active' : ''}`}
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            className={`dropdown-content ${activeSectionIndex === index ? 'open' : ''}`}
                        >
                            <div className="details-wrapper">
                                <div className="details-content">

                                    <div className="details-sections">
                                        {section.sections.map((item, itemIndex) => (
                                            <div key={itemIndex} className="section-details">
                                                <h5>{item.description}</h5>
                                                {item.imageUrl && (
                                                    <img
                                                        src={item.imageUrl}
                                                        alt={item.description}
                                                        className="details-image"
                                                    />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};


export default ProjectSection;