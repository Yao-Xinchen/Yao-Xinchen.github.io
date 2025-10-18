import type { Project } from '../types';

export const where_to_learn: Project = {
	// Basic Information
	slug: "where-to-learn",
	title: "Where to Learn",
	category: "RL Algorithm",

	// Short description for homepage (2-3 sentences)
	description: "Analytical Policy Gradient Directed Exploration for On-Policy Robotic Reinforcement Learning",

	// Technologies used
	technologies: ["Jax", "Brax", "Mujoco Playground", "PPO", "APG"],

	// Project image (place image in /public/projects/)
	// TODO: Add your project image
	image: "/projects/where_to_learn.jpg",

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

	website: "https://wheretolearn.github.io/",
	
	// === DETAILED PAGE CONTENT ===
	// Define your own sections with custom headings
	// TODO: Write your project content with your own section names
	sections: [
		{
			heading: "Overview",
			content: `	On-policy reinforcement learning (RL) algorithms have demonstrated great potential in robotic control, where effective exploration is crucial for efficient and high-quality policy learning. However, how to encourage the agent to explore the better trajectories efficiently remains a challenge. Most existing methods incentivize exploration by maximizing the policy entropy or encouraging novel state visiting regard- less of the potential state value. We propose a new form of directed exploration that uses analytical policy gradients from a differentiable dynamics model to inject task-aware, physics-guided guidance, thereby steering the agent towards high-reward regions for accelerated and more effective policy learning. We integrate our exploration approach into a widely used on-policy RL algorithm, Proximal Policy Optimization, to test and demonstrate its effectiveness. We conduct extensive benchmark experiments and demonstrate the effectiveness of the proposed exploration augmentation method. We further test our approach on a 6-DOF point-foot robot for velocity tracking locomotion, and conduct the simulation test and implement a successful sim-to-real deployment as the ultimate validation.`,
		},
	],

	// Additional images for the project detail page
	// TODO: Add more images showcasing your work
	images: [
	],
};
