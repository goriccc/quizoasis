import { writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { questions } from './twc-i18n-questions.mjs';
import { results } from './twc-i18n-results.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const lib = path.join(__dirname, '..', 'lib');

writeFileSync(path.join(lib, 'phase3TeamWorkChemistryQuestions.json'), JSON.stringify(questions, null, 2) + '\n', 'utf8');
writeFileSync(path.join(lib, 'phase3TeamWorkChemistryResults.json'), JSON.stringify(results, null, 2) + '\n', 'utf8');
console.log('Wrote lib/phase3TeamWorkChemistryQuestions.json');
console.log('Wrote lib/phase3TeamWorkChemistryResults.json');
