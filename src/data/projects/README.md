# Individual Project Files

Each project has its own TypeScript file in this directory.

## How to Add a New Project

1. **Copy the template:**
   ```bash
   cp _template.ts your-project-name.ts
   ```

2. **Edit the new file:**
   - Update the export name (e.g., `export const yourProjectName`)
   - Fill in all TODO sections with your project details
   - Set `slug` to match the filename

3. **Import it in `src/data/projects.ts`:**
   ```typescript
   import { yourProjectName } from './projects/your-project-name';

   export const projects: Project[] = [
     apgppo,
     yourProjectName,  // Add here
   ];
   ```

4. **Add project images to `public/projects/`**

## Example Project Files

- **`apgppo.ts`** - Your APG-PPO algorithm project (RL Algorithm)
- **`_template.ts`** - Template to copy for new projects (don't modify this)

## Project File Structure

Each file exports a `Project` object with:

### Basic Info (shown on homepage)
- `slug`: URL path (e.g., "apgppo" → `/projects/apgppo`)
- `title`: Display name
- `description`: Brief 2-3 sentence summary
- `image`: Main image path
- `technologies`: Array of tech/tools used
- `category`: "RL Algorithm" or "Low-Level Control"
- `github`: GitHub repo URL (optional)
- `video`: Demo video URL (optional)

### Detailed Content (shown on project page)
- `detailedDescription`: Full project overview
- `challenges`: Problems you faced
- `solutions`: How you solved them
- `results`: Outcomes and impact
- `images`: Additional images for project page

## Tips

- Use descriptive slugs (lowercase, hyphens): `robot-navigation`, `pid-controller`
- Keep descriptions engaging and technical
- Include metrics/results where possible
- Add diagrams and visualizations
