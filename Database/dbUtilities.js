import { insertCurriculumData } from './dbInitialization.js';

async function parseStrToCurriculumData(inputStr) {
    try {
        const inputType = parseInt(inputStr.slice(0, 2), 10);
        const sequence = parseInt(inputStr.slice(2, 4), 10);
        const content = inputStr.slice(4);

        insertCurriculumData(inputType, sequence, content);
    } catch (error) {
        console.error('Error when save data to curriculum table:', error);
    }
}