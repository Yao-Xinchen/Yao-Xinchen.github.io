import type { Project } from '../types';

// TEMPLATE FILE - Copy this to create a new project
// Steps:
// 1. Copy this file and rename it to your project slug (e.g., robot-navigation.ts)
// 2. Update the export name to match your project slug
// 3. Fill in all the TODO sections
// 4. Import and add your project to src/data/projects.ts

export const projectSlug: Project = {
	// Basic Information
	slug: "project-slug", // TODO: URL-friendly name (lowercase, hyphens)
	title: "PROJECT TITLE", // TODO: Full project name
	category: "RL Algorithm", // TODO: Change to "Low-Level Control" if applicable

	// Short description for homepage (2-3 sentences)
	// TODO: Write a brief, engaging overview
	description: "Brief description of what this project does and why it's interesting. Explain the problem it solves and your key contribution.",

	// Technologies used
	// TODO: List all technologies, languages, frameworks, tools used
	technologies: ["Python", "Technology2", "Technology3"],

	// Project image (place image in /public/projects/)
	// TODO: Add your main project image
	image: "/projects/project-name.jpg",

	// === LINKS ===

	// Option 1: Single GitHub repo
	github: "https://github.com/yourusername/project",

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
		"/projects/project-name.jpg", // Main image (same as above)
		// "/projects/project-name-diagram.jpg",
		// "/projects/project-name-results.jpg",
	],
};
