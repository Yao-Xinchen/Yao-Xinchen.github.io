import type { Project } from '../types';

export const where_to_learn: Project = {
	// Basic Information
	slug: "where-to-learn",
	title: "Where to Learn",
	category: "RL Algorithm",

	// Short description for homepage (2-3 sentences)
	description: "Analytical Policy Gradient Directed Exploration for On-Policy Robotic Reinforcement Learning",

	// Technologies used
	technologies: ["Python", "Jax", "Brax", "Mujoco Playground", "PPO", "APG"],

	// Project image (place image in /public/projects/)
	// TODO: Add your project image
	image: "/projects/where_to_learn.png",

	// Links
	github: [
		{
			title: "Algorithm",
			url: "https://github.com/Yao-Xinchen/brax",
			description: "Implementation of our algorithm in Brax"
		},
		{
			title: "Training Code",
			url: "https://github.com/Yao-Xinchen/philab-mujoco",
			description: "Policy training for Tron1 robot"
		},
		{
			title: "Deployment Code",
			url: "https://github.com/Yao-Xinchen/tron1-rl-deploy-python",
			description: "Policy deployment on Tron1 robot"
		}
	],
	video: "https://wheretolearn.github.io/static/videos/apg_aug_explore_video.mp4",

	links: [
		{
			title: "Project Website",
			url: "https://wheretolearn.github.io/",
			description: "Project website"
		}
	],
	
	// === DETAILED PAGE CONTENT ===
	// Define your own sections with custom headings
	// TODO: Write your project content with your own section names
	sections: [
		{
			heading: "Overview",
			content: `Write about your APG-PPO algorithm here.

What problem does it solve? What makes it novel?

You can write multiple paragraphs - newlines will be preserved.`,
		},
		{
			heading: "Technical Details", // Or any heading you want
			content: `Explain the technical approach.

- Algorithm design
- Implementation details
- etc.`,
		},
		{
			heading: "Results", // Or "Publication", "Impact", etc.
			content: `Share your results and publication details.

Published in [Conference/Journal Name] [Year].

Performance metrics, key findings, etc.`,
		},
		// Add more sections as needed with any headings you want
		// {
		//   heading: "Your Custom Heading",
		//   content: "Your content here..."
		// },
	],

	// Additional images for the project detail page
	// TODO: Add more images showcasing your work
	images: [
		"/projects/apgppo.png",
		// Uncomment and add more images as needed:
		// "/projects/apgppo-results.png",
	],
};
