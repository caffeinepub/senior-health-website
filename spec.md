# Senior Health Website

## Current State
The current app (version 3) is an Indian Helpline Directory for Senior Citizens with:
- Navigation bar with links to 7 helpline categories
- Hero section with search bar
- Full helpline directory (30+ numbers across 7 categories: Emergency, Health, Medical, Elder Care, Mental Health, Women Safety, Government, Financial)
- Footer with quick dial numbers

The original "draft 2" was a health tips/wellness website for senior citizens with:
- Health tips cards
- Wellness sections
- Emergency resources section with some general numbers

## Requested Changes (Diff)

### Add
- Bring back the health tips/wellness content sections from draft 2 (health tips cards, wellness tips, daily routines for seniors)
- Keep the full Indian helpline directory from version 3 (all 30+ numbers specifically for senior citizens)

### Modify
- The app should now combine both: health tips/wellness content AND the senior citizen helpline directory
- Navigation should include links to both health sections and helpline categories
- Hero should introduce both health information and helplines

### Remove
- Remove any generic/non-senior-specific numbers if any existed in draft 2

## Implementation Plan
1. Update App.tsx to include both HealthTipsSection and HelplinesSection
2. Restore WellnessSection with senior-focused health tips content
3. Restore HealthTipsSection with health tip cards for common senior health issues
4. Update Navigation to include links to health sections + helpline categories
5. Update Hero to present the combined purpose of the site
6. Keep HelplinesSection exactly as-is (version 3 numbers are correct and senior-citizen-specific)
7. Keep Footer as-is

## UX Notes
- Two-part site: first health information, then helplines directory below
- Senior-friendly: large text, clear section headings, high contrast
- All helpline numbers remain tap-to-call on mobile
