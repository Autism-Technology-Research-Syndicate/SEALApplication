import { specificTextContent } from '../../../Database/dbInitialization';

// Function to fetch text
export const fetchLongText = async (textId) => {
  try {
    // To fix: Here we got three identical rows 
    // // even though in dbInitialization.js we only inserted the row once.
    const longText = await specificTextContent(textId);
    return longText;
  } catch (error) {
    console.error('Failed to fetch text:', error);
    throw error;
  }
};
