// custom hook to fetch curriculum data and image from database
// could me moved to the hooks folder
import { useState, useEffect } from 'react';
import { retrieveCurriculumImageFromUri, getAllCurriculumData } from '../../../Database/dbInitialization';

const useCurriculumData = () => {
  const [imageSrc, setImageSrc] = useState(undefined);
  const [contentText, setContentText] = useState("Loading content...");

  useEffect(() => {
    const fetchDataAndImage = async () => {
      try {
        console.log("Fetching curriculum data...");

        const allCurriculumData = await getAllCurriculumData();
        const lastCurriculum = allCurriculumData[allCurriculumData.length - 1];

        if (lastCurriculum && lastCurriculum.content) {
          const content = JSON.parse(lastCurriculum.content);
          setContentText(content.text || "No content available");

          const uri = content.image;
          if (uri) {
            const base64Image = await retrieveCurriculumImageFromUri(uri);
            if (base64Image) {
              setImageSrc(base64Image);
            } else {
              console.log("No image available.");
            }
          }
        } else {
          setContentText("No content available");
        }
      } catch (error) {
        console.error("Error fetching curriculum data:", error);
        setContentText("Error loading content.");
      }
    };

    fetchDataAndImage();
  }, []);

  return { imageSrc, contentText };
};

export default useCurriculumData;
