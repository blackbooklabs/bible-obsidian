const fs = require('fs');
const path = '/Users/dylanroberts/.gemini/antigravity/brain/4bdd7907-f3d3-4fbd-b5ee-5be9e6587cad/.system_generated/steps/824/content.md';
const target = '/Users/dylanroberts/Documents/non-music/Dev/GitHub/+ Sir the Baptist/+ resources/kebra_nagast.md';

try {
    const data = fs.readFileSync(path, 'utf8');
    fs.writeFileSync(target, data);
    console.log('Success');
} catch (err) {
    console.error(err);
}
