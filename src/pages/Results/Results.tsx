import React from 'react';
import './Results.scss';
import { skillsData } from './data.ts';

// Skill Component
const Skill = ({ title, description, icon: Icon, delay }: { title: string; description: string; icon: React.ElementType; delay: number }) => {
    return (
        <div className="skill-card" data-aos="fade-up" data-aos-delay={delay}>
            <div className="skill-icon">
                <Icon />
            </div>
            <div className="skill-content">
                <h4 className="skill-title">{title}</h4>
                <p className="skill-description">{description}</p>
            </div>
        </div>
    );
};

// Skills Component
const Skills = () => {
    return (
        <div className="skills-wrapper">
            {skillsData.map((skill, index) => (
                <Skill
                    key={index}
                    {...skill}
                    delay={index * 100} // Stagger effect: 100ms delay between each item
                />
            ))}
        </div>
    );
};

export default Skills;