import type { Project } from '../types';

// TEMPLATE FILE - Copy this to create a new project
// Steps:
// 1. Copy this file and rename it to your project slug (e.g., robot-navigation.ts)
// 2. Update the export name to match your project slug
// 3. Fill in all the TODO sections
// 4. Import and add your project to src/data/projects.ts

export const auto_parking: Project = {
    // Basic Information
    slug: "auto_parking",
    title: "Auto Parking",
    category: "Perception",

    // Short description for homepage (2-3 sentences)
    description: "ECE484 Coursework, Automated Parking System for GEM",

    // Technologies used
    // TODO: List all technologies, languages, frameworks, tools used
    technologies: ["ROS", "FAST-LIO"],

    // Project image (place image in /public/projects/)
    // TODO: Add your main project image
    image: "/projects/auto_parking.png",

    // === LINKS ===

    // Option 1: Single GitHub repo
    github: undefined,

    // Option 2: Multiple GitHub repos
    // github: [
    // 	{
    // 		title: "Training Code",
    // 		url: "https://github.com/yourusername/project-training",
    // 		description: "Source code for model training"
    // 	},
    // 	{
    // 		title: "Deployment Code",
    // 		url: "https://github.com/yourusername/project-deploy",
    // 		description: "Production deployment implementation"
    // 	}
    // ],

    // Video/Demo (optional)
    video: "https://drive.google.com/file/d/1Xz49y2tI6ynNnQ8TG-kUl6flLDSIyuWI/view?usp=sharing", // or "https://youtube.com/watch?v=..."

    // Additional custom links (optional)
    // links: [
    // 	{
    // 		title: "Paper",
    // 		url: "https://arxiv.org/...",
    // 		description: "Published in Conference 2024"
    // 	},
    // 	{
    // 		title: "Project Website",
    // 		url: "https://project-site.com",
    // 		description: "Interactive demo and documentation"
    // 	}
    // ],

    // === DETAILED PAGE CONTENT ===
    // Define your own sections with any headings you want
    // TODO: Add sections that make sense for your project
    sections: [
        {
            heading: "Introduction", // TODO: Use your own heading
            content: `Write your content here.

Newlines are preserved.
You can write multiple paragraphs.`,
        },
        {
            heading: "Another Section", // TODO: Use any heading you want
            content: `More content here.

- You can use lists
- Technical details
- Whatever you need`,
        },
        // Add as many sections as you need with custom headings:
        // {
        //   heading: "Implementation",
        //   content: "..."
        // },
        // {
        //   heading: "Publication",
        //   content: "..."
        // },
    ],

    // Additional images for the project detail page
    // TODO: Add screenshots, diagrams, results visualizations
    images: [
        "/projects/project-name.jpg", // Main image (same as above)
        // "/projects/project-name-diagram.jpg",
        // "/projects/project-name-results.jpg",
    ],
};
