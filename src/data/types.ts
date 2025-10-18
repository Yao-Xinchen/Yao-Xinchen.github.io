// Project type definition used across the site

export interface ProjectSection {
	heading: string;
	content: string;
}

export interface ProjectLink {
	title: string;
	url: string;
	description?: string;
}

export interface Project {
	slug: string;
	title: string;
	description: string;
	image: string;
	technologies: string[];
	category: "Low-Level Control" | "RL Algorithm";
	// Links can be a single URL string or array of detailed links
	github?: string | ProjectLink[];
	video?: string;
	// Additional custom links
	links?: ProjectLink[];
	// Detailed content for project pages - flexible sections
	sections?: ProjectSection[];
	images?: string[];
}
