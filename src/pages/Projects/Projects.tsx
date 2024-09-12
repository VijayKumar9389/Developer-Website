import './Projects.scss';
import { WorkData, workData } from "./data";
import ProjectSection from "./components/ProjectSection";
import Header from "../../components/Header/Header.tsx";

const Work = () => {
    return (
        <div className="work-container">
            <Header
                heading="Explore My Tailored Custom Solutions"
                desc="Specifically designed to enhance and streamline my clients' business operations."
            />
            {workData.map((project: WorkData, index: number) => (
                <ProjectSection key={index} project={project} />
            ))}
        </div>
    );
};

export default Work;