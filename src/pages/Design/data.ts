import StakeholderInfo from "../../assets/screenshoots/BaseApp/PictureOne.png";
import Deliveries from "../../assets/screenshoots/BaseApp/PictureTwo.png";
import Upload from "../../assets/screenshoots/BaseApp/MobileComp.png";
import Mobile from "../../assets/screenshoots/BaseApp/PictureThree.png";
import Users from "../../assets/screenshoots/Users.png";

export interface WorkSectionData {
    description: string;
    imageUrl: string;
}

export interface WorkData {
    title: string;
    desc?: string;
    sections: WorkSectionData[];
}

export const workData: WorkData[] = [
    {
        title: 'Sleek, Responsive Interface for Seamless Data Management',
        desc: 'Our cloud-based web applications are designed for universal accessibility and ease of use. Develop once, and access your data from any device with an internet connection, ensuring effortless management and visualization from anywhere, at any time.',
        sections: [
            {
                description: 'Navigate and manage your business data efficiently with intuitive dashboards, tables, and filters, providing clear and actionable insights.',
                imageUrl: StakeholderInfo,
            },
            {
                description: 'Automate repetitive tasks such as data entry and calculations to seamlessly track project progress and stats, enhancing operational efficiency.',
                imageUrl: Deliveries,
            },
            {
                description: 'Guarantee a consistent user experience across all devices by ensuring your application adapts seamlessly to different screen sizes and resolutions.',
                imageUrl: Upload,
            },
            {
                description: 'Manage users and permissions with built-in tools, safeguarding sensitive information and restricting access to admin-approved pages and features.',
                imageUrl: Users,
            },
            {
                description: 'Implement a robust login system to restrict access to sensitive information, ensuring that only authorized personnel can view or edit critical data.',
                imageUrl: Mobile,
            },
        ],
    },
];

