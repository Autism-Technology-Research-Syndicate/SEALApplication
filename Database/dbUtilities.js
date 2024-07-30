import { insertCurriculumData } from './dbInitialization.js';

async function parseStrToCurriculumData = (inputStr) => {
    try {
        const inputType = parseInt(inputString.slice(0, 1));
        const sequence = parseInt(inputString.slice(1, 2));
        const content = inputString.slice(2);

        insertCurriculumData(inputType, sequence, content);
    } catch (error) {
        console.error('Error when save data to curriculum table:', error);
    }
}