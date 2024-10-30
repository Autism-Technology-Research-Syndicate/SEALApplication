import React, { useEffect, useState } from 'react';
import { 
  View, 
  Image, 
  ScrollView, 
  TouchableOpacity, 
  Text, 
  ActivityIndicator,
  Dimensions
} from 'react-native';
import { getImageData } from '../../../Database/dbInitialization';
import styles from '../../../appCSS';

interface ImageViewerProps {
  onClose: () => void;
}

interface DatabaseImage {
  id: number;
  b64str: string;
  input: number;
  output: number;
}

const ImageViewer: React.FC<ImageViewerProps> = ({ onClose }) => {
  const [images, setImages] = useState<DatabaseImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const screenWidth = Dimensions.get('window').width;

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = async () => {
    console.log('Starting to load images...');
    setLoading(true);
    try {
      const imageData = await getImageData();
      console.log('ImageViewer - Raw image data:', imageData);
      
      if (imageData && Array.isArray(imageData)) {
        imageData.forEach((img, index) => {
          console.log(`Image ${index} data:`, {
            id: img.id,
            hasB64: !!img.b64str,
            b64Length: img.b64str?.length,
            input: img.input,
            output: img.output
          });
        });
        
        setImages(imageData);
      } else {
        console.log('No images or invalid data format');
        setError('No images found');
      }
    } catch (error) {
      console.error('Error loading images:', error);
      setError('Error loading images');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.closeButton}
        onPress={onClose}
      >
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>

      {loading ? (
        <View style={styles.centerContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text>Loading images...</Text>
        </View>
      ) : error ? (
        <View style={styles.centerContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : images.length === 0 ? (
        <View style={styles.centerContainer}>
          <Text>No images found</Text>
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {images.map((image, index) => (
            <View key={image.id || index} style={styles.imageContainer}>
              <Image
                source={{ 
                  uri: `data:image/jpeg;base64,${image.b64str}`,
                  width: screenWidth - 40, // Add fixed width
                  height: 300 // Add fixed height
                }}
                style={styles.image}
                resizeMode="contain"
                onError={(error) => {
                  console.error('Image loading error:', error.nativeEvent.error);
                }}
                onLoad={() => console.log(`Image ${index} loaded successfully`)}
              />
              <View style={styles.imageInfo}>
                <Text style={styles.imageText}>Image ID: {image.id}</Text>
                <Text style={styles.imageText}>Input: {image.input}</Text>
                <Text style={styles.imageText}>Output: {image.output}</Text>
                <Text style={styles.imageText}>
                  Base64 length: {image.b64str?.length || 0}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default ImageViewer;