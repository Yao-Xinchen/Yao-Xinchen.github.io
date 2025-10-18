import type { Project } from '../types';

// TEMPLATE FILE - Copy this to create a new project
// Steps:
// 1. Copy this file and rename it to your project slug (e.g., robot-navigation.ts)
// 2. Update the export name to match your project slug
// 3. Fill in all the TODO sections
// 4. Import and add your project to src/data/projects.ts

export const meta_ros: Project = {
    // Basic Information
    slug: "meta-ros",
    title: "Meta ROS",
    category: "Low-Level Control",

    // Short description for homepage (2-3 sentences)
    description: "Low-Level Control System Designed for RoboMaster Competition Team Meta",

    // Technologies used
    technologies: ["C++", "ROS2", "Communication Protocols", "Concurrency"],

    // Project image (place image in /public/projects/)
    // TODO: Add your main project image
    image: "/projects/meta_ros.jpg",

    // === LINKS ===

    // Option 1: Single GitHub repo
    github: "https://github.com/Meta-Team/Meta-ROS",

    // Video/Demo (optional)
    video: undefined, // or "https://youtube.com/watch?v=..."

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
    ],
};
