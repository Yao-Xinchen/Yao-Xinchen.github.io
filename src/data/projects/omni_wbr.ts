import type { Project } from '../types';

// TEMPLATE FILE - Copy this to create a new project
// Steps:
// 1. Copy this file and rename it to your project slug (e.g., robot-navigation.ts)
// 2. Update the export name to match your project slug
// 3. Fill in all the TODO sections
// 4. Import and add your project to src/data/projects.ts

export const omni_wbr: Project = {
	// Basic Information
	slug: "omni-wbr",
	title: "Omni WBR",
	category: "RL Algorithm",

	// Short description for homepage (2-3 sentences)
	description: "Omni-directional Wheeled-Biped Robot Control with Emergent Gaits",

	// Technologies used
	technologies: ["Isaac Lab", "Teacher-Student Framework", "PPO", "PyTorch"],

	// Project image (place image in /public/projects/)
	// TODO: Add your main project image
	image: "/projects/project-name.jpg",

	// Links
	// TODO: Update with actual links (set to undefined if not available)
	github: undefined,
	video: undefined,

	// === DETAILED PAGE CONTENT ===
	// Define your own sections with any headings you want
	// TODO: Add sections that make sense for your project
	sections: [
		{
			heading: "Overview", // TODO: Use your own heading
			content: `	Wheeled-biped robots combine the energy efficiency and speed of wheeled locomotion with the terrain adaptability of legged systems, making them ideal for applications like delivery, inspection, and rescue. However, existing control methods face critical limitations:
1. Model-based approaches rely on simplified dynamics and non-holonomic constraints that restrict omnidirectional mobility and terrain adaptability, essentially reducing the robot to a "Segway with legs"
2. Existing RL-based methods remain constrained to forward motion with explicit mode switching, lacking true omnidirectional mobility and adaptive hybrid locomotion
3. The potential of the wheeled-biped structure for adaptive hybrid locomotion across diverse terrains remains largely unexploited`,
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
