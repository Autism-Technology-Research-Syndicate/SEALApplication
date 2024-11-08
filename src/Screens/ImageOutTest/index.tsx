import { View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import BackgroundWrapper from '../../Components/BackgroundWrapper';
import Text from '../../Components/Text';
import { getStyles } from './defaultCSS';
import { useFontContext } from '../../Contexts/FontContext';
import { Appbar } from 'react-native-paper';
import { retrieveCurriculumImageFromUri, getAllCurriculumData } from '../../../Database/dbInitialization';

const Index: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { selectedFontConfig } = useFontContext();
  const styles = getStyles(selectedFontConfig);

  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);
  const [contentText, setContentText] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchDataAndImage = async () => {
      try {
        console.log("Fetching curriculum data on imageOutTest page...");
        const allCurriculumData = await getAllCurriculumData();
        const lastCurriculum = allCurriculumData[allCurriculumData.length - 1];

        if (lastCurriculum && lastCurriculum.content) {
          const content = JSON.parse(lastCurriculum.content);
          const uri = content.image;

          setContentText(content.text || "No content available");

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
        console.error("Error fetching curriculum image:", error);
        setContentText("Error loading content.");
      }
    };

    fetchDataAndImage();
  }, []);

  return (
    <BackgroundWrapper>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <Text style={styles.header}>Screen to display image from curriculum</Text>
        <View style={styles.section}>
          <Text style={styles.subheader}>Images</Text>
          <View style={styles.row}>
            {imageSrc ? (
              <Image
                source={{ uri: imageSrc }}
                style={{ width: 100, height: 100 }}
              />
            ) : (
              <Text>No image available</Text>
            )}
          </View>
          <View style={styles.row}>
            <Text>{contentText}</Text>
          </View>
        </View>
      </View>
    </BackgroundWrapper>
  );
};

export default Index;
