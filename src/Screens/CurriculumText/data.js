import { specificTextContent } from '../../../Database/dbInitialization';

// Function to fetch text
export const fetchLongText = async (textId) => {
  try {
    const longText = await specificTextContent(textId);
    return longText;
  } catch (error) {
    console.error('Failed to fetch text:', error);
    throw error;
  }
};
