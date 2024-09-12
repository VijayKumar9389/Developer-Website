import StakeholderInfo from "../../assets/screenshoots/Stakeholders.png";
import StakeholderFilter from "../../assets/screenshoots/StakeholderFilter.png";
import DeliveryChanges from "../../assets/screenshoots/DeliveryChanges.png";
import DeliveryPlanning from "../../assets/screenshoots/DeliveryPlanning.png";
import DeliveryRoutes from "../../assets/screenshoots/DeliveryRoutes.png";
import DeliveryStatus from "../../assets/screenshoots/DeliveryStatus.png";
import InventoryItems from "../../assets/screenshoots/InventoryItems.png";
import InventoryRecords from "../../assets/screenshoots/InventoryRecords.png";
import InventoryPackage from "../../assets/screenshoots/InventoryPackage.png";
import Inventory from "../../assets/screenshoots/Inventory.png";
import Losses from "../../assets/screenshoots/Losses.png";
import Upload from "../../assets/screenshoots/Upload.png";
import Rentals from "../../assets/screenshoots/Rentals.png";
import Questions from "../../assets/screenshoots/Questions.png";

import InventoryApp from "../../assets/Media/inventory.png"
import OutReach from "../../assets/Media/outreach.png"

import Triton from "../../assets/Triton Logo.png"
import Emerald from "../../assets/Emerald Logo.png"


// Define the new WorkSection interface
export interface WorkSection {
    title: string;
    desc: string;
    sections: WorkSectionData[];
}

// Define the WorkSectionData interface
export interface WorkSectionData {
    description: string;
    imageUrl: string;
}

// Update the WorkData interface to use the new WorkSection type
export interface WorkData {
    title: string;
    desc?: string;
    imageUrl?: string;
    logo?: string;
    sections: WorkSection[];
}

export const workData: WorkData[] = [
    {
        title: 'Outreach Management',
        desc: 'The OnTract application for Triton Public Awareness simplifies stakeholder management, delivery tracking, and inventory control. It offers an intuitive, responsive interface for updating contacts, managing and tracking safety packages, and coordinating deliveries to stakeholders along the pipeline.',
        imageUrl: OutReach,
        logo: Triton,
        sections: [
            {
                title: 'Stakeholder Management',
                desc: '',
                sections: [
                    {
                        description: 'Filter stakeholders using various criteria to streamline engagement and interaction.',
                        imageUrl: StakeholderFilter,
                    },
                    {
                        description: 'Visualize stakeholder connections and details for deeper insights and better decision-making.',
                        imageUrl: StakeholderInfo,
                    },
                    {
                        description: 'Import and organize project data efficiently through Excel file uploads for seamless integration.',
                        imageUrl: Upload,
                    },
                ],
            },
            {
                title: 'Delivery Management',
                desc: '',
                sections: [
                    {
                        description: 'Assign and manage safety packages with precision to ensure accurate and timely delivery.',
                        imageUrl: DeliveryPlanning,
                    },
                    {
                        description: 'Automatically update delivery and stakeholder statuses with set completion dates for effective tracking.',
                        imageUrl: DeliveryStatus,
                    },
                    {
                        description: 'Plan and optimize delivery routes for field agents to reduce travel time and improve efficiency.',
                        imageUrl: DeliveryRoutes,
                    },
                    {
                        description: 'Modify delivery details, including package assignments and specifications, as needed for flexibility.',
                        imageUrl: DeliveryChanges,
                    },
                ],
            },
            {
                title: 'Inventory Management',
                desc: '',
                sections: [
                    {
                        description: 'Create and manage custom packages while tracking item quantities for accurate inventory oversight.',
                        imageUrl: InventoryPackage,
                    },
                    {
                        description: 'Store images and quantities of items to maintain precise inventory records and facilitate easy tracking.',
                        imageUrl: InventoryItems,
                    },
                    {
                        description: 'Track and navigate sent items, deliveries, and packages with intuitive controls for streamlined management.',
                        imageUrl: InventoryRecords,
                    },
                ],
            },
        ],
    },
    {
        title: 'Inventory Management & Digital Marketing',
        desc: 'The Inventory Tracker application, developed for Emerald Executive Housing, enhances rental property inventory management and integrates cutting-edge digital marketing strategies to elevate online presence and boost customer engagement. (In Progress)',
        imageUrl: InventoryApp,
        logo: Emerald,
        sections: [
            {
                title: 'Inventory App & Website',
                desc: '',
                sections: [
                    {
                        description: 'Efficiently manage rental property inventory and maintain accurate records with receipt storage for precise record-keeping.',
                        imageUrl: Losses,
                    },
                    {
                        description: 'Quickly identify and report missing items, total costs, and other discrepancies across multiple locations.',
                        imageUrl: Inventory,
                    },
                    {
                        description: 'Enhance brand visibility and rental listings through a modern, interactive website, designed to engage tenants effectively.',
                        imageUrl: Rentals,
                    },
                    {
                        description: 'Boost customer interaction by integrating contact forms within the inventory app to centralize and streamline customer inquiries.',
                        imageUrl: Questions,
                    },
                ],
            },
        ],
    }
    // Add more projects as needed
];

