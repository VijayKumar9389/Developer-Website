import './Projects.scss';
import { WorkData, workData } from "./data";
import ProjectSection from "./components/ProjectSection";
import Header from "../../components/Header/Header.tsx";

const Work = () => {
    return (
        <div className="work-container">
            <Header
                heading="Explore Our Custom Applications"
                desc="Showcasing tailored technology solutions designed to enhance and streamline our customers business operations."
            />
            {workData.map((project: WorkData, index: number) => (
                <ProjectSection key={index} project={project} />
            ))}
        </div>
    );
};

export default Work;