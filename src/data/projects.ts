// Central file that imports all individual project files
// To add a new project:
// 1. Create a new file in src/data/projects/[project-name].ts
// 2. Import it here
// 3. Add it to the projects array

import type { Project } from './types';
import { where_to_learn } from './projects/where_to_learn';
import { omni_wbr } from './projects/omni_wbr';
import { meta_ros } from './projects/meta_ros';
import { auto_parking } from './projects/auto_parking';

// Export all projects as an array
// TODO: Add your other projects to this array
export const projects: Project[] = [
	where_to_learn,
	omni_wbr,
	meta_ros,
	auto_parking,
	// Add more projects here as you create them
	// projectName,
];
